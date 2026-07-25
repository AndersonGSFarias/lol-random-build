// Importação da biblioteca Lucide
import { Dices } from "lucide-react";

// Botão que gera as composições
function GenerateButton({ onGenerate }) {
  return (
    <div className="flex justify-center">
      {" "}
      {/* !Incluir onGenerate */}
      <button onClick={onGenerate} className="btn w-[2.875rem] h-[2.875rem] xl:w-[3.75rem] xl:h-[3.75rem] my-[0.75rem] bg-linear-to-r from-third to-fourth eb-garamond uppercase text-[1rem] font-bold text-font-third p-[0.625rem] flex justify-around items-center rounded-[10px] cursor-pointer">
        {" "}
        <Dices className="size-[1.5rem]" />
      </button>
    </div>
  );
}

export { GenerateButton };
