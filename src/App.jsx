import { useState } from "react";

import { HeroSection } from "./components/HeroSection/HeroSection";
import { ChampionCard } from "./components/Result/ChampionCard";
import { ItemsCard } from "./components/Result/ItemsCard";
import { RunesPrimary } from "./components/Result/RunesPrimary";
import { RunesSecundary } from "./components/Result/RunesSecondary";
import { SpellsCard } from "./components/Result/SpellsCard";
import { Footer } from "./components/Footer/Footer";

// 📦 MOCK — fica FORA do App
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
    name: "Heal",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerHeal.png",
  },
  {
    id: 4,
    name: "Teleport",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerTeleport.png",
  },
];

function App() {
  const [spells, setSpells] = useState([]);

  const handleGenerate = () => {
    // embaralha array
    const shuffled = [...spellsMock].sort(() => Math.random() - 0.5);

    // pega duas spells
    const selectedSpells = shuffled.slice(0, 2);

    // salva no state
    setSpells(selectedSpells);

    console.log(selectedSpells);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* botão está dentro do Hero */}
      <HeroSection onGenerate={handleGenerate} />

      <section className="flex flex-col items-center gap-8.75 my-[2.188rem] flex-1">
        <ChampionCard />

        {/* agora recebe spells */}
        <SpellsCard spells={spells} />

        <RunesPrimary />
        <RunesSecundary />
        <ItemsCard />
      </section>

      <Footer />
    </div>
  );
}

export default App;
