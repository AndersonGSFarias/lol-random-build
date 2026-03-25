// Importação da biblioteca Lucide
import { Dices } from "lucide-react";

// Botão que gera as composições
function GenerateButton() {
  return (
    <div className="flex justify-center">
      {" "}
      {/* !Incluir onGenerate */}
      <button className="w-[15.625rem] h-[3.75rem] my-[1.25rem] bg-linear-to-r from-third to-fourth eb-garamond uppercase text-[1rem] font-bold text-font-third p-[0.625rem] flex justify-around items-center rounded-[10px]">
        {" "}
        <Dices className="size-[1.5rem]" />
        Gerar composição
      </button>
    </div>
  );
}

export { GenerateButton };
