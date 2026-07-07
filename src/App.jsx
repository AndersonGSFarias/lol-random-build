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
import { getRandomItem, getRandomItems } from "./utils/random";
import { generatePrimaryRune, generateSecondaryRune } from "./utils/runes";

function App() {
  const [spells, setSpells] = useState([]);
  const [champion, setChampion] = useState(null);
  const [primaryRune, setPrimaryRune] = useState(null);
  const [secondaryRune, setSecondaryRune] = useState(null);
  const [items, setItems] = useState([]);
  const [dataDragonData, setDataDragonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    const randomChampion = getRandomItem(dataDragonData.champions);

    // 🎯 ROLE
    const randomRole = getRandomItem(rolesMock);

    const championWithRole = {
      ...randomChampion,
      role: randomRole.name,
      roleIcon: randomRole.icon,
    };

    setChampion(championWithRole);

    // 🎲 SPELLS
    const selectedSpells = getRandomItems(dataDragonData.spells, 2);
    setSpells(selectedSpells);

    // 🔮 RUNAS
    const generatedPrimaryRune = generatePrimaryRune(dataDragonData.runePages);

    const generatedSecondaryRune = generateSecondaryRune(dataDragonData.runePages, generatedPrimaryRune.treeId);

    setPrimaryRune(generatedPrimaryRune);
    setSecondaryRune(generatedSecondaryRune);

    // 🛡️ ITENS
    const selectedItems = getRandomItems(dataDragonData.items, 6);
    setItems(selectedItems);
  }, [dataDragonData]);

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
          <ChampionCard champion={champion} />
        </div>

        <SpellsCard spells={spells} />
        <RunesPrimary rune={primaryRune} />
        <RunesSecondary rune={secondaryRune} />

        <div className="xl:col-span-3 xl:w-full">
          <ItemsCard items={items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
