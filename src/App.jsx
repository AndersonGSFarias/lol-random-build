import { useCallback, useEffect, useState } from "react";
import { preloadImages } from "./utils/preloadImages";

// Importacao dos Componentes
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ChampionCard } from "./components/Result/ChampionCard";
import { ItemsCard } from "./components/Result/ItemsCard";
import { RunesPrimary } from "./components/Result/RunesPrimary";
import { RunesSecundary } from "./components/Result/RunesSecondary";
import { SpellsCard } from "./components/Result/SpellsCard";
import { Footer } from "./components/Footer/Footer";

// Importacao dos Mocks
import { championsMock } from "./data/championsMock";
import { rolesMock } from "./data/rolesMock";
import { spellsMock } from "./data/spellsMock";
import { runePagesMock } from "./data/runePagesMock";
import { itemsMock } from "./data/itemsMock";

// Códigos de utilidade
import { getRandomItem, getRandomItems } from "./utils/random";
import { generatePrimaryRune, generateSecondaryRune } from "./utils/runes";

function App() {
  const [spells, setSpells] = useState([]);
  const [champion, setChampion] = useState(null);
  const [primaryRune, setPrimaryRune] = useState(null);
  const [secondaryRune, setSecondaryRune] = useState(null);
  const [items, setItems] = useState([]);

  // Pre-geracao de imagens
  useEffect(() => {
    const championImages = championsMock.flatMap((champion) => [champion.splash, champion.icon]);

    const roleImages = rolesMock.map((role) => role.icon);

    const spellImages = spellsMock.map((spell) => spell.icon);

    const itemImages = itemsMock.map((item) => item.icon);

    const runeImages = runePagesMock.flatMap((runePage) => {
      const keystoneImages = runePage.keystones.map((keystone) => keystone.icon);

      const slotImages = runePage.slots.flatMap((slot) => slot.map((rune) => rune.icon));

      return [runePage.treeIcon, ...keystoneImages, ...slotImages];
    });

    preloadImages([...championImages, ...roleImages, ...spellImages, ...itemImages, ...runeImages]);
  }, []);

  const handleGenerate = useCallback(() => {
    // 🎴 CHAMPION
    const randomChampion = getRandomItem(championsMock);

    // 🎯 ROLE
    const randomRole = getRandomItem(rolesMock);

    const championWithRole = {
      ...randomChampion,
      role: randomRole.name,
      roleIcon: randomRole.icon,
    };

    setChampion(championWithRole);

    // 🎲 SPELLS
    const selectedSpells = getRandomItems(spellsMock, 2);
    setSpells(selectedSpells);

    // 🔮 RUNAS
    const generatedPrimaryRune = generatePrimaryRune(runePagesMock);

    const generatedSecondaryRune = generateSecondaryRune(runePagesMock, generatedPrimaryRune.treeId);

    setPrimaryRune(generatedPrimaryRune);
    setSecondaryRune(generatedSecondaryRune);

    // 🛡️ ITENS
    const selectedItems = getRandomItems(itemsMock, 6);
    setItems(selectedItems);
  }, []);

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
      <HeroSection onGenerate={handleGenerate} />

      <main
        className="
    flex flex-col items-center gap-8 my-[2.188rem] flex-1

    xl:grid
    xl:grid-cols-[15.8125rem_15.8125rem_15.8125rem]
    xl:gap-[1.25rem]
    xl:w-[50rem]
    xl:mx-auto
    xl:items-start
  "
      >
        <div className="xl:col-span-3 xl:w-full">
          <ChampionCard champion={champion} />
        </div>

        <SpellsCard spells={spells} />
        <RunesPrimary rune={primaryRune} />
        <RunesSecundary rune={secondaryRune} />

        <div className="xl:col-span-3 xl:w-full">
          <ItemsCard items={items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
