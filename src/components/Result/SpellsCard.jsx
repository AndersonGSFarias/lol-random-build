import noReturn from "../../assets/no-return/no-return-small.png";

function SpellsCard({ spells }) {
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
      {/* Box de titulo das spells */}
      <h5 className="text-[#515B6B] text-[1rem] border-b border-[#252937] pb-[0.125rem] border-b-1 mb-[0.625rem]">Feitiços</h5>

      <div className="flex justify-start">
        {/* Spell 1 */}
        <figure className="flex flex-col justify-center items-center mr-[0.625rem]">
          <img src={spells?.[0]?.icon || noReturn} alt={spells?.[0]?.name || "Spell não selecionada"} className="w-[2.875rem] rounded-[5px] border-1 border-secundary" />

          <figcaption className="text-[#7C7D80] text-[0.625rem] font-medium mt-[0.25rem]">{spells?.[0]?.name || "Sem spell"}</figcaption>
        </figure>

        {/* Spell 2 */}
        <figure className="flex flex-col justify-center items-center ml-[0.625rem]">
          <img src={spells?.[1]?.icon || noReturn} alt={spells?.[1]?.name || "Spell não selecionada"} className="w-[2.875rem] rounded-[5px] border-1 border-secundary" />

          <figcaption className="text-[#7C7D80] text-[0.625rem] font-medium mt-[0.25rem]">{spells?.[1]?.name || "Sem spell"}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export { SpellsCard };
