import { GenerateButton } from "../GenerateButton/GenerateButton";
import { SearchBar } from "../SearchBar/SearchBar";

import DiceGradient from "../../assets/dados/dado.svg";

// Titulo e subtitulo
function HeroSection({ onGenerate, isLoading, searchTerm, onSearchChampion, searchSuggestions, onSelectChampion }) {
  return (
    <section className="flex flex-col justify-center align-middle text-center">
      <div className="flex flex-col justify-center align-middle text-center mt-12.5">
        <h1 className="eb-garamond bg-linear-to-r from-third to-fourth bg-clip-text text-transparent text-[1.625rem] font-bold uppercase pb-[0.625rem] xl:text-[4rem]">LoL Random Build</h1>
      </div>
      <div className="flex justify-center align-middle">
        <h2 className="text-font-secundary text-[0.875rem]">Clique no </h2> <img className="mx-1.5" src={DiceGradient} alt="" />
        <h3 className="text-font-secundary text-[0.875rem]">para gerar uma composição aleatória</h3>
      </div>
      <div className="flex justify-center items-center mt-[1.25rem] ">
        <SearchBar value={searchTerm} onChange={onSearchChampion} disabled={isLoading} suggestions={searchSuggestions} onSelectSuggestion={onSelectChampion} />
        <GenerateButton onGenerate={onGenerate} isLoading={isLoading} />
      </div>
    </section>
  );
}

export { HeroSection };
