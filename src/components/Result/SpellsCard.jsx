function SpellsCard() {
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
      <h5 className="text-[#515B6B] text-[1rem] border-b border-[#252937] pb-[0.125rem] border-b-1 mb-[0.625rem] ">Feitiços</h5>
      <div className="flex justify-start">
        {/* Icones das spells 1 */}
        <figure className="flex flex-col justify-center items-center mr-[0.625rem]">
          {" "}
          <img src="https://wiki.leagueoflegends.com/en-us/images/Teleport.png?b4dbd" alt="Spell 1" className="w-[2.875rem] rounded-[5px] border-1 border-secundary" />
          <figcaption className="text-[#7C7D80] text-[0.625rem] font-medium mt-[0.25rem]">Teleporte</figcaption>
        </figure>
        {/* Icones das spells 2 */}
        <figure className="flex flex-col justify-center items-center ml-[0.625rem]">
          <img src="https://wiki.leagueoflegends.com/en-us/images/Flash.png?3cd4f" alt="Spell 2" className="w-[2.875rem] rounded-[5px] border-1 border-secundary " />
          <figcaption className="text-[#7C7D80] text-[0.625rem] font-medium mt-[0.25rem]">Flash</figcaption>
        </figure>
      </div>
    </section>
  );
}

export { SpellsCard };
