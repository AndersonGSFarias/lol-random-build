import { HeroSection } from "./components/HeroSection/HeroSection";
import { ChampionCard } from "./components/Result/ChampionCard";

function App() {
  return (
    <>
      <HeroSection />
      <section className="flex flex-col items-center gap-8.75 my-[2.188rem]">
        <ChampionCard />
      </section>
    </>
  );
}

export default App;
