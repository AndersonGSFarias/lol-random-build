import { useState } from "react";

import { HeroSection } from "./components/HeroSection/HeroSection";
import { ChampionCard } from "./components/Result/ChampionCard";
import { ItemsCard } from "./components/Result/ItemsCard";
import { RunesPrimary } from "./components/Result/RunesPrimary";
import { RunesSecundary } from "./components/Result/RunesSecondary";
import { SpellsCard } from "./components/Result/SpellsCard";
import { Footer } from "./components/Footer/Footer";

// 📦 MOCK — fica FORA do App
// Mock de campeões
const championsMock = [
  {
    id: 1,
    name: "Ahri",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Ahri.png",
  },
  {
    id: 2,
    name: "Garen",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Garen.png",
  },
  {
    id: 3,
    name: "Lee Sin",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/LeeSin.png",
  },
];

// Mock de Roles (Rotas)
const rolesMock = [
  {
    name: "Top",
    icon: "/src/assets/rotas/top.png",
  },
  {
    name: "Jungle",
    icon: "/src/assets/rotas/jungle.png",
  },
  {
    name: "Mid",
    icon: "/src/assets/rotas/mid.png",
  },
  {
    name: "Adc",
    icon: "/src/assets/rotas/adc.png",
  },
  {
    name: "Suporte",
    icon: "/src/assets/rotas/support.png",
  },
];
// Mock de Feitiços
const spellsMock = [
  {
    id: 1,
    name: "Flash",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerFlash.png",
  },
  {
    id: 2,
    name: "Ignite",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerDot.png",
  },
  {
    id: 3,
    name: "Curar",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerHeal.png",
  },
  {
    id: 4,
    name: "Teleporte",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerTeleport.png",
  },
];
// Mock de Runas
const runesPrimaryMock = [
  {
    id: 1,

    treeName: "Precisão",

    treeIcon: "https://wiki.leagueoflegends.com/en-us/images/thumb/Precision_icon.png/52px-Precision_icon.png?a120e",

    keystone: {
      name: "Conquistador",
      icon: "https://wiki.leagueoflegends.com/en-us/images/thumb/Conqueror_rune.png/52px-Conqueror_rune.png?607ea",
    },

    runes: [
      {
        name: "Triunfo",
        icon: "https://wiki.leagueoflegends.com/en-us/images/thumb/Triumph_rune.png/52px-Triumph_rune.png?bb13b",
      },
      {
        name: "Lenda: Espontaneidade",
        icon: "https://wiki.leagueoflegends.com/en-us/images/thumb/Legend-_Alacrity_rune.png/52px-Legend-_Alacrity_rune.png?4afd0",
      },
      {
        name: "Dilacerar",
        icon: "https://wiki.leagueoflegends.com/en-us/images/thumb/Cut_Down_rune.png/52px-Cut_Down_rune.png?ecfb4",
      },
    ],
  },
];

function App() {
  const [spells, setSpells] = useState([]);
  const [champion, setChampion] = useState(null);
  const [primaryRune, setPrimaryRune] = useState(null);

  const handleGenerate = () => {
    // 🎴 CHAMPION
    const randomChampion = championsMock[Math.floor(Math.random() * championsMock.length)];

    // 🎯 ROLE (separada)
    const randomRole = rolesMock[Math.floor(Math.random() * rolesMock.length)];

    // 🔥 juntar os dois
    const championWithRole = {
      ...randomChampion,
      role: randomRole.name,
      roleIcon: randomRole.icon,
    };

    setChampion(championWithRole);

    // 🎲 SPELLS
    const shuffled = [...spellsMock].sort(() => Math.random() - 0.5);
    const selectedSpells = shuffled.slice(0, 2);
    setSpells(selectedSpells);

    // 🔮 RUNA PRIMÁRIA
    const randomPrimaryRune = runesPrimaryMock[Math.floor(Math.random() * runesPrimaryMock.length)];

    setPrimaryRune(randomPrimaryRune);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* botão está dentro do Hero */}
      <HeroSection onGenerate={handleGenerate} />

      <section className="flex flex-col items-center gap-8.75 my-[2.188rem] flex-1">
        <ChampionCard champion={champion} />
        {/* agora recebe spells */}
        <SpellsCard spells={spells} />
        <RunesPrimary rune={primaryRune} />
        <RunesSecundary />
        <ItemsCard />
      </section>

      <Footer />
    </div>
  );
}

export default App;
