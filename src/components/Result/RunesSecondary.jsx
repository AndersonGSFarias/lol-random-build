import waitSecondRune from "../../assets/runas/rune-secundario.png";
import noReturnRounded from "../../assets/no-return/sem-resposta-redondo.png";

function RunesSecundary({ rune }) {
  return (
    <section
      className="
        bg-[#080E1B] 
        w-[18.75rem] 
        flex flex-col
        border-1 border-solid border-secundary 
        rounded-[10px]
        px-[1.25rem]
        py-[0.625rem]
        "
    >
      <div
        className="
    flex items-center
    border-b border-[#252937]
    pb-[0.5rem]
  "
      >
        <img src={rune?.treeIcon || waitSecondRune} alt={rune?.treeName || "Runa Secundária"} className="w-[2.5rem] ml-1.5" />

        <h6 className="text-[#4A5262] text-[1rem] border-r border-[#252937] pl-[1.5rem] pr-[0.75rem]">{rune?.treeName || " Página"}</h6>

        <p className="text-[#4A5262] text-[0.60rem] px-[0.75rem] uppercase">Secundária</p>
      </div>

      <div className="flex flex-col text-[#A7A6A3] my-[0.5rem] gap-y-3">
        <div className="flex flex-col gap-y-4 pt-2">
          {(rune?.runes ?? [null, null]).map((attribute, index) => (
            <div key={index} className="flex items-center gap-[2rem] ml-3.5">
              <img src={attribute?.icon || noReturnRounded} alt={attribute?.name || `Atributo ${index + 1}`} className="w-[1.5rem]" />

              <p className="text-[0.75rem] font-light">{attribute?.name || `Atributo ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { RunesSecundary };
