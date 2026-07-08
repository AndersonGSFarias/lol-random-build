import waitSecondRune from "../../assets/runas/rune-secundario.png";
import noReturnRounded from "../../assets/no-return/sem-resposta-redondo.png";
import { LockButton } from "../LockButton/LockButton";

function RunesSecondary({ rune, isLocked, onToggleLock }) {
  return (
    <section
      className="
    relative
    group
    overflow-hidden
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
      {rune && <LockButton isLocked={isLocked} onToggleLock={onToggleLock} lockedLabel="Destravar runa secundária" unlockedLabel="Travar runa secundária" />}
      <div
        className="
        flex items-center
        border-b border-[#252937]
        pb-[0.5rem]
  "
      >
        <img
          src={rune?.treeIcon || waitSecondRune}
          title={rune?.treeName || "Runa Secundária"}
          alt={rune?.treeName || "Runa Secundária"}
          className="w-[1.875rem] 
        xl:w-[1.625rem] 
        xl:h-[1.625rem] 
        ml-[0.675rem]

        "
        />

        <h6 className="text-[#4A5262] text-[1rem] border-r border-[#252937] pl-[1.5rem] xl:pl-[1rem] pr-[0.75rem]">{rune?.treeName || " Página"}</h6>
        <p className="text-[#4A5262] text-[0.60rem] xl:text-[0.5rem] px-[0.75rem] uppercase">Secundária</p>
      </div>

      <div className="flex flex-col text-[#A7A6A3] my-[0.5rem] gap-y-3">
        <div className="flex flex-col gap-y-2.5 pt-2">
          {(rune?.runes ?? [null, null]).map((attribute, index) => (
            <div key={index} className="flex items-center gap-[2rem] xl:gap-[1.5rem] ml-3.5">
              <img src={attribute?.icon || noReturnRounded} title={attribute?.name || `Atributo ${index + 1}`} alt={attribute?.name || `Atributo ${index + 1}`} className="w-[1.5rem]" />

              <p className="text-[0.75rem] font-light">{attribute?.name || `Atributo ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { RunesSecondary };
