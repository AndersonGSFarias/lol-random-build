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

        const itemImages = normalizedData.items.map((item) => item.icon);

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

  const handleGenerate = useCallback(() => {
    if (!dataDragonData) return;

    // 🎴 CHAMPION
    if (!isChampionLocked || !champion) {
      const randomChampion = getRandomItem(dataDragonData.champions);

      // 🎯 ROLE
      const randomRole = getRandomItem(rolesMock);

      const championWithRole = {
        ...randomChampion,
        role: randomRole.name,
        roleIcon: randomRole.icon,
      };

      setChampion(championWithRole);
    }

    // 🎲 SPELLS
    const shouldGenerateSpells = spells.length === 0 || lockedSpells.some((isLocked) => !isLocked);

    if (shouldGenerateSpells) {
      const newSpells = [...spells];

      const lockedSpellIds = newSpells.filter((_, index) => lockedSpells[index]).map((spell) => spell?.id);

      const availableSpells = dataDragonData.spells.filter((spell) => !lockedSpellIds.includes(spell.id));

      for (let index = 0; index < 2; index++) {
        const isSpellLocked = lockedSpells[index];
        const hasSpell = Boolean(newSpells[index]);

        if (!isSpellLocked || !hasSpell) {
          const alreadySelectedIds = newSpells.filter(Boolean).map((spell) => spell.id);

          const possibleSpells = availableSpells.filter((spell) => !alreadySelectedIds.includes(spell.id));

          newSpells[index] = getRandomItem(possibleSpells);
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

      const lockedItemIds = newItems.filter((_, index) => lockedItems[index]).map((item) => item?.id);

      const availableItems = dataDragonData.items.filter((item) => !lockedItemIds.includes(item.id));

      for (let index = 0; index < 6; index++) {
        const isItemLocked = lockedItems[index];
        const hasItem = Boolean(newItems[index]);

        if (!isItemLocked || !hasItem) {
          const alreadySelectedIds = newItems.filter(Boolean).map((item) => item.id);

          const possibleItems = availableItems.filter((item) => !alreadySelectedIds.includes(item.id));

          newItems[index] = getRandomItem(possibleItems);
        }
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
      <HeroSection onGenerate={handleGenerate} isLoading={isLoading} />

      <main
        className="
    flex 
    flex-col 
    items-center 
    gap-8 
    my-[2.188rem] 
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
