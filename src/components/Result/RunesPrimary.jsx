import waitFirstRune from "../../assets/runas/rune-principal.png";
import noReturnRounded from "../../assets/no-return/sem-resposta-redondo.png";

function RunesPrimary({ rune }) {
  return (
    <section
      className="
        bg-[#080E1B] 
        w-[18.75rem] 
        xl:w-[15.8125rem] 
        xl:h-[14.375rem]
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
        border-b-1 border-[#252937]
        pb-[0.5rem]

        "
      >
        <img
          src={rune?.treeIcon || waitFirstRune}
          title={rune?.treeName || "Árvore de Runa Primária"}
          alt={rune?.treeName || "Árvore de Runa Primária"}
          className="w-[1.875rem] 
        xl:w-[1.625rem] 
        xl:h-[1.625rem] 
        ml-[0.675rem]

        "
        />
        <h6
          className="text-[#4A5262] 
        text-[1rem] 
        border-r-1 
        border-[#252937] 
        pl-[1.5rem]
        xl:pl-[1rem] 
        pr-[0.75rem]"
        >
          {" "}
          {rune?.treeName || "Página"}
        </h6>
        <p className="text-[#4A5262] text-[0.60rem] xl:text-[0.5rem] px-[0.75rem] uppercase">Primária</p>
      </div>

      <div className="flex flex-col text-[#A7A6A3] my-[0.5rem] gap-y-3">
        {/* Keystone */}
        <div className="flex items-center gap-[1rem] xl:gap-[0.5rem]">
          <img src={rune?.keystone?.icon || noReturnRounded} title={rune?.keystone?.name || "Runa principal"} alt={rune?.keystone?.name || "Runa principal"} className="w-[3.375rem]" />
          <p className="text-[1.25rem] xl:text-[0.9rem] font-bold">{rune?.keystone?.name || "Principal"}</p>
        </div>

        {/* Runas menores */}
        <div className="flex flex-col gap-y-2.5">
          {(rune?.runes ?? [null, null, null]).map((subRune, index) => (
            <div key={index} className="flex items-center gap-[2rem] xl:gap-[1.5rem] ml-3.5">
              <img src={subRune?.icon || noReturnRounded} title={subRune?.name || `Atributo ${index + 1}`} alt={subRune?.name || `Atributo ${index + 1}`} className="w-[1.5rem]" />
              <p
                title={subRune?.name || `Fragmento ${index + 1}`}
                className="
                text-[0.75rem]
                font-light
                max-w-[9.5rem]
                truncate "
              >
                {subRune?.name || `Fragmento ${index + 1}`}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { RunesPrimary };
