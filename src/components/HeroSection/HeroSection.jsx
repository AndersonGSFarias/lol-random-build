import { GenerateButton } from "../GenerateButton/GenerateButton";

// Titulo e subtitulo
function HeroSection({ onGenerate, isLoading }) {
  return (
    <section className="flex flex-col justify-center align-middle text-center mt-12.5">
      <h1 className="eb-garamond bg-linear-to-r from-third to-fourth bg-clip-text text-transparent text-[1.625rem] font-bold uppercase pb-[0.625rem] xl:text-[4rem]">LoL Random Build</h1>

      <h2 className="text-font-secundary text-[0.875rem]">Gere uma composição aleatória com um clique</h2>

      <GenerateButton onGenerate={onGenerate} isLoading={isLoading} />

      <h3 className="text-font-secundary text-[0.875rem]">
        Clique no <span className="font-bold uppercase">botão</span> <span className="hidden xl:inline-flex">ou</span> <span className="hidden xl:inline-flex font-bold uppercase">Enter</span> para começar!
      </h3>
    </section>
  );
}

export { HeroSection };
