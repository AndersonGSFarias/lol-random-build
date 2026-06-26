import { GenerateButton } from "../GenerateButton/GenerateButton";

// Titulo e subtitulo
function HeroSection({ onGenerate }) {
  return (
    <section className="flex flex-col justify-center align-middle text-center mt-12.5">
      <h1 className="eb-garamond bg-linear-to-r from-third to-fourth bg-clip-text text-transparent text-[1.625rem] font-bold uppercase pb-[0.625rem] xl:text-[4rem]">LoL Random Build</h1>
      <h2 className="text-font-secundary text-[0.875rem]">Gere uma composicao aleatoria com um clique</h2>

      {/* Botão que gera as composições */}
      <GenerateButton onGenerate={onGenerate} />
      <h3 className="text-font-secundary text-[0.875rem]">
        Clique no <span className="font-bold uppercase">botão</span> ou <span className="font-bold uppercase">enter</span> cima para começar!
      </h3>
    </section>
  );
}

export { HeroSection };
