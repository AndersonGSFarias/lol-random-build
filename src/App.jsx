import { HeroSection } from "./components/HeroSection/HeroSection";
import { ChampionCard } from "./components/Result/ChampionCard";
import { RunesPrimary } from "./components/Result/RunesPrimary";
import { RunesSecundary } from "./components/Result/RunesSecondary";
import { SpellsCard } from "./components/Result/SpellsCard";

function App() {
  return (
    <>
      <HeroSection />
      <section className="flex flex-col items-center gap-8.75 my-[2.188rem]">
        <ChampionCard />
        <SpellsCard />
        <RunesPrimary />
        <RunesSecundary />
      </section>
    </>
  );
}

export default App;
