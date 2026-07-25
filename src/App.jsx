import { useCallback, useEffect, useState } from "react";
import { preloadImages } from "./utils/preloadImages";

// Importacao da API da Data Dragon
import { getDataDragonData } from "./services/dataDragonService";
import { normalizeDataDragonData } from "./services/dataDragonNormalizer";

// Importacao dos Componentes
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ChampionCard } from "./components/Result/ChampionCard";
import { ItemsCard } from "./components/Result/ItemsCard";
import { RunesPrimary } from "./components/Result/RunesPrimary";
import { RunesSecondary } from "./components/Result/RunesSecondary";
import { SpellsCard } from "./components/Result/SpellsCard";
import { Footer } from "./components/Footer/Footer";

// Importacao do Mock
import { rolesMock } from "./data/rolesMock";

// Códigos de utilidade
import { getRandomItem } from "./utils/random";
import { generatePrimaryRune, generateSecondaryRune } from "./utils/runes";

function App() {
  const [spells, setSpells] = useState([]);
  const [champion, setChampion] = useState(null);
  const [primaryRune, setPrimaryRune] = useState(null);
  const [secondaryRune, setSecondaryRune] = useState(null);
  const [items, setItems] = useState([]);
  const [dataDragonData, setDataDragonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Barra de pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // Estados das travas
  const [isChampionLocked, setIsChampionLocked] = useState(false);
  const [lockedSpells, setLockedSpells] = useState([false, false]);
  const [isPrimaryRuneLocked, setIsPrimaryRuneLocked] = useState(false);
  const [isSecondaryRuneLocked, setIsSecondaryRuneLocked] = useState(false);
  const [lockedItems, setLockedItems] = useState([false, false, false, false, false, false]);

  // Trava dos feitiços
  const handleToggleSpellLock = (spellIndex) => {
    if (!spells[spellIndex]) return;

    setLockedSpells((prevState) => prevState.map((isLocked, index) => (index === spellIndex ? !isLocked : isLocked)));
  };

  // Trava de itens
  const handleToggleItemLock = (itemIndex) => {
    if (!items[itemIndex]) return;

    setLockedItems((prevState) => prevState.map((isLocked, index) => (index === itemIndex ? !isLocked : isLocked)));
  };

  // Pre-geracao de imagens
  useEffect(() => {
    async function loadDataDragonData() {
      try {
        const data = await getDataDragonData();
        const normalizedData = normalizeDataDragonData(data);

        setDataDragonData(normalizedData);

        const championImages = normalizedData.champions.flatMap((champion) => [champion.splash, champion.icon]);

        const roleImages = rolesMock.map((role) => role.icon);

        const spellImages = normalizedData.spells.map((spell) => spell.icon);

        const itemImages = [...normalizedData.items.map((item) => item.icon), ...normalizedData.boots.map((boot) => boot.icon)];

        const runeImages = normalizedData.runePages.flatMap((runePage) => {
          const keystoneImages = runePage.keystones.map((keystone) => keystone.icon);

          const slotImages = runePage.slots.flatMap((slot) => slot.map((rune) => rune.icon));

          return [runePage.treeIcon, ...keystoneImages, ...slotImages];
        });

        preloadImages([...championImages, ...roleImages, ...spellImages, ...itemImages, ...runeImages]);

        console.log("Dados normalizados:", normalizedData);
      } catch (error) {
        console.error("Erro ao carregar Data Dragon:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadDataDragonData();
  }, []);

  // Corretor do texto
  const normalizeSearchText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  // Pesquisa de campeão
  const handleSearchChampion = (value) => {
    setSearchTerm(value);

    if (!dataDragonData) return;

    const normalizedValue = normalizeSearchText(value);

    if (!normalizedValue) {
      setSearchSuggestions([]);
      return;
    }

    const filteredChampions = dataDragonData.champions
      .filter((champion) => {
        const normalizedChampionName = normalizeSearchText(champion.name);

        return normalizedChampionName.startsWith(normalizedValue) || normalizedChampionName.includes(normalizedValue);
      })
      .slice(0, 6);

    setSearchSuggestions(filteredChampions);

    const exactChampion = filteredChampions.find((champion) => {
      const normalizedChampionName = normalizeSearchText(champion.name);

      return normalizedChampionName === normalizedValue;
    });

    if (!exactChampion) return;

    selectChampion(exactChampion);
  };
  const selectChampion = (selectedChampion) => {
    const randomRole = getRandomItem(rolesMock);

    const championWithRole = {
      ...selectedChampion,
      role: randomRole.name,
      roleIcon: randomRole.icon,
    };

    setChampion(championWithRole);
    setIsChampionLocked(true);
    setSearchTerm(selectedChampion.name);
    setSearchSuggestions([]);
  };

  const isJungleRole = (roleName) => {
    if (!roleName) return false;

    const normalizedRole = normalizeSearchText(roleName);

    return normalizedRole === "selva" || normalizedRole === "jungle";
  };

  const isSmiteSpell = (spell) => {
    if (!spell) return false;

    const normalizedSpellName = normalizeSearchText(spell.name);
    const normalizedSpellId = normalizeSearchText(spell.id);

    return normalizedSpellName === "golpear" || normalizedSpellName === "smite" || normalizedSpellId.includes("smite");
  };

  const handleGenerate = useCallback(() => {
    if (!dataDragonData) return;

    // 🎴 CHAMPION
    let currentChampion = champion;

    if (!isChampionLocked || !champion) {
      const randomChampion = getRandomItem(dataDragonData.champions);
      const randomRole = getRandomItem(rolesMock);

      currentChampion = {
        ...randomChampion,
        role: randomRole.name,
        roleIcon: randomRole.icon,
      };

      setChampion(currentChampion);
    }

    // 🎲 SPELLS
    // 🎲 SPELLS
    const currentRoleIsJungle = isJungleRole(currentChampion?.role);

    const smiteSpell = dataDragonData.spells.find((spell) => isSmiteSpell(spell));

    const shouldGenerateSpells = spells.length === 0 || lockedSpells.some((isLocked) => !isLocked) || spells.some((spell) => !currentRoleIsJungle && isSmiteSpell(spell));

    if (shouldGenerateSpells) {
      const newSpells = [...spells];

      const lockedSpellIds = newSpells
        .filter((spell, index) => {
          const isLocked = lockedSpells[index];
          const isInvalidSmite = !currentRoleIsJungle && isSmiteSpell(spell);

          return isLocked && !isInvalidSmite;
        })
        .map((spell) => spell?.id);

      const availableSpells = dataDragonData.spells.filter((spell) => {
        const isAlreadyLocked = lockedSpellIds.includes(spell.id);

        if (isAlreadyLocked) return false;

        if (!currentRoleIsJungle && isSmiteSpell(spell)) {
          return false;
        }

        return true;
      });

      for (let index = 0; index < 2; index++) {
        const currentSpell = newSpells[index];

        const isSpellLocked = lockedSpells[index];
        const hasSpell = Boolean(currentSpell);
        const isInvalidSmite = !currentRoleIsJungle && isSmiteSpell(currentSpell);

        if (!isSpellLocked || !hasSpell || isInvalidSmite) {
          const alreadySelectedIds = newSpells.filter(Boolean).map((spell) => spell.id);

          const possibleSpells = availableSpells.filter((spell) => !alreadySelectedIds.includes(spell.id));

          newSpells[index] = getRandomItem(possibleSpells);
        }
      }

      if (currentRoleIsJungle && smiteSpell) {
        const alreadyHasSmite = newSpells.some((spell) => isSmiteSpell(spell));

        if (!alreadyHasSmite) {
          const firstUnlockedIndex = lockedSpells.findIndex((isLocked) => !isLocked);

          const indexToReplace = firstUnlockedIndex !== -1 ? firstUnlockedIndex : 0;

          newSpells[indexToReplace] = smiteSpell;
        }
      }

      setSpells(newSpells);
    }

    // 🔮 RUNAS
    let currentPrimaryRune = primaryRune;
    let currentSecondaryRune = secondaryRune;

    if (!isPrimaryRuneLocked || !primaryRune) {
      currentPrimaryRune = generatePrimaryRune(dataDragonData.runePages);
      setPrimaryRune(currentPrimaryRune);
    }

    const secondaryRuneIsInvalid = currentSecondaryRune && currentPrimaryRune && currentSecondaryRune.treeId === currentPrimaryRune.treeId;

    if (!isSecondaryRuneLocked || !secondaryRune || secondaryRuneIsInvalid) {
      currentSecondaryRune = generateSecondaryRune(dataDragonData.runePages, currentPrimaryRune.treeId);

      setSecondaryRune(currentSecondaryRune);
    }

    // 🛡️ ITENS

    // Geração de itens
    const shouldGenerateItems = items.length === 0 || lockedItems.some((isLocked) => !isLocked);

    if (shouldGenerateItems) {
      const newItems = [...items];

      const lockedNormalItemIds = newItems.filter((item, index) => index < 5 && lockedItems[index] && item).map((item) => item.id);

      const lockedBootIds = newItems.filter((item, index) => index === 5 && lockedItems[index] && item).map((item) => item.id);

      const availableNormalItems = dataDragonData.items.filter((item) => !lockedNormalItemIds.includes(item.id));

      const availableBoots = dataDragonData.boots.filter((boot) => !lockedBootIds.includes(boot.id));

      for (let index = 0; index < 6; index++) {
        const isItemLocked = lockedItems[index];
        const hasItem = Boolean(newItems[index]);
        const isBootSlot = index === 5;
        const currentItemIsBoot = newItems[index]?.tags?.includes("Boots");

        if (isItemLocked && hasItem) {
          if (!isBootSlot || currentItemIsBoot) {
            continue;
          }
        }

        if (isBootSlot) {
          const alreadySelectedIds = newItems.filter(Boolean).map((item) => item.id);

          const possibleBoots = availableBoots.filter((boot) => !alreadySelectedIds.includes(boot.id));

          newItems[index] = getRandomItem(possibleBoots);
          continue;
        }

        const alreadySelectedIds = newItems.filter(Boolean).map((item) => item.id);

        const possibleItems = availableNormalItems.filter((item) => !alreadySelectedIds.includes(item.id));

        newItems[index] = getRandomItem(possibleItems);
      }

      setItems(newItems);
    }
  }, [dataDragonData, isChampionLocked, champion, lockedSpells, spells, isPrimaryRuneLocked, primaryRune, isSecondaryRuneLocked, secondaryRune, lockedItems, items]);

  // Botao enter para gerar os conteudos
  useEffect(() => {
    const handleKeyDown = (event) => {
      const isTyping = event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.isContentEditable;

      if (isTyping) return;

      if (event.key === "Enter") {
        handleGenerate();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleGenerate]);

  // Conteudo principal
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* botão está dentro do Hero */}
      <HeroSection onGenerate={handleGenerate} isLoading={isLoading} searchTerm={searchTerm} onSearchChampion={handleSearchChampion} searchSuggestions={searchSuggestions} onSelectChampion={selectChampion} />
      <main
        className="
    flex 
    flex-col 
    items-center 
    gap-8 
    my-[1.25rem] 
    pb-[10rem]
    flex-1
    xl:grid
    xl:grid-cols-[15.8125rem_15.8125rem_15.8125rem]
    xl:gap-[1.25rem]
    xl:w-[50rem]
    xl:mx-auto
    xl:items-start
    xl:pb-[10rem]
  "
      >
        <div className="xl:col-span-3 xl:w-full">
          <ChampionCard champion={champion} isLocked={isChampionLocked} onToggleLock={() => setIsChampionLocked((prevState) => !prevState)} />
        </div>

        <SpellsCard spells={spells} lockedSpells={lockedSpells} onToggleSpellLock={handleToggleSpellLock} />
        <RunesPrimary rune={primaryRune} isLocked={isPrimaryRuneLocked} onToggleLock={() => setIsPrimaryRuneLocked((prevState) => !prevState)} />
        <RunesSecondary rune={secondaryRune} isLocked={isSecondaryRuneLocked} onToggleLock={() => setIsSecondaryRuneLocked((prevState) => !prevState)} />

        <div className="xl:col-span-3 xl:w-full">
          <ItemsCard items={items} lockedItems={lockedItems} onToggleItemLock={handleToggleItemLock} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
