function RunesSecundary() {
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
        className="flex items-center 
        border-b-1 border-[#252937]
        pb-[0.5rem]
        "
      >
        <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Domination_icon.png/52px-Domination_icon.png?87577" alt="" className="w-[2.5rem] ml-1.5" />
        <h6 className="text-[#4A5262] text-[0.75rem] border-r-1 border-[#252937] pl-[1.5rem] pr-[0.75rem]">Dominação</h6>
        <p className="text-[#4A5262] text-[0.60rem] px-[0.75rem] uppercase">Secundária</p>
      </div>

      <div className="flex flex-col text-[#A7A6A3] my-[0.5rem] gap-y-3">
        <div className=" flex flex-col gap-y-4 pt-2">
          <div className="flex items-center gap-[2rem] ml-3.5">
            <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Cheap_Shot_rune.png/52px-Cheap_Shot_rune.png?49513" alt="" className="w-[1.5rem]" />
            <p className=" text-[0.75rem] font-light">Golpe Desleal</p>
          </div>
          <div className="flex items-center gap-[2rem] ml-3.5">
            <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Treasure_Hunter_rune.png/52px-Treasure_Hunter_rune.png?1c456" alt="" className="w-[1.5rem]" />
            <p className=" text-[0.75rem] font-light">Caçador de Tesouros</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { RunesSecundary };
