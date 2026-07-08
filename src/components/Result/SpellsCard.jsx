import noReturn from "../../assets/no-return/sem-resposta-sem-borda.png";
import spellIcon from "../../assets/feiticos/flash.png";
import { LockButton } from "../LockButton/LockButton";

function SpellsCard({ spells, lockedSpells, onToggleSpellLock }) {
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
      {/* Box de titulo das spells */}
      <div className="flex border-b border-[#252937] pb-[0.625rem] pl-[0.7rem] border-b-1 mb-[0.625rem]">
        <img src={spellIcon} alt="" className="w-[1.625rem] h-[1.625rem] rounded-2xl" />

        <h5 className="text-[#515B6B] text-[1rem] pl-[1.5rem] xl:pl-[1rem]">Feitiços</h5>
      </div>

      <div className="flex justify-start">
        {/* Spell 1 */}
        <figure className="flex flex-col justify-center items-center mr-[0.625rem]">
          <div
            className="
              relative
              group
              w-[2.875rem]
              h-[2.875rem]
              xl:w-[3.125rem]
              xl:h-[3.125rem]
            "
          >
            <img
              src={spells?.[0]?.icon || noReturn}
              alt={spells?.[0]?.name || "Spell não selecionada"}
              title={spells?.[0]?.name || "Feitiço 1"}
              className="
                w-full
                h-full
                rounded-[5px]
                border-1
                border-secundary
                object-cover
              "
            />
            {spells?.[0] && <LockButton isLocked={lockedSpells?.[0]} onToggleLock={() => onToggleSpellLock(0)} lockedLabel="Destravar feitiço 1" unlockedLabel="Travar feitiço 1" buttonSize="h-8 w-8" iconSize="w-5 h-5" />}{" "}
          </div>

          <figcaption className="text-[#7C7D80] text-[0.625rem] font-medium mt-[0.25rem]">{spells?.[0]?.name || "Spell 1"}</figcaption>
        </figure>

        {/* Spell 2 */}
        <figure className="flex flex-col justify-center items-center ml-[0.625rem]">
          <div
            className="
              relative
              group
              w-[2.875rem]
              h-[2.875rem]
              xl:w-[3.125rem]
              xl:h-[3.125rem]
            "
          >
            <img
              src={spells?.[1]?.icon || noReturn}
              alt={spells?.[1]?.name || "Spell não selecionada"}
              title={spells?.[1]?.name || "Feitiço 2"}
              className="
                w-full
                h-full
                rounded-[5px]
                border-1
                border-secundary
                object-cover
              "
            />
            {spells?.[1] && <LockButton isLocked={lockedSpells?.[1]} onToggleLock={() => onToggleSpellLock(1)} lockedLabel="Destravar feitiço 2" unlockedLabel="Travar feitiço 2" buttonSize="h-8 w-8" iconSize="w-5 h-5" />}{" "}
          </div>

          <figcaption className="text-[#7C7D80] text-[0.625rem] font-medium mt-[0.25rem]">{spells?.[1]?.name || "Spell 2"}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export { SpellsCard };
