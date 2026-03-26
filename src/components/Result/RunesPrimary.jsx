function RunesPrimary() {
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
        <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Precision_icon.png/52px-Precision_icon.png?a120e" alt="" className="w-[2.5rem] ml-1.5" />
        <h6 className="text-[#4A5262] text-[1rem] border-r-1 border-[#252937] pl-[1.5rem] pr-[0.75rem]">Precisão</h6>
        <p className="text-[#4A5262] text-[0.60rem] px-[0.75rem] uppercase">Primária</p>
      </div>

      <div className="flex flex-col text-[#A7A6A3] my-[0.5rem] gap-y-3">
        <div className="flex items-center gap-[1rem]">
          <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Conqueror_rune.png/52px-Conqueror_rune.png?607ea" alt="" className="w-[3.375rem]" />
          <p className=" text-[1.25rem] font-bold">Conquistador</p>
        </div>
        <div className=" flex flex-col gap-y-4">
          <div className="flex items-center gap-[2rem] ml-3.5">
            <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Triumph_rune.png/52px-Triumph_rune.png?bb13b" alt="" className="w-[1.5rem]" />
            <p className=" text-[0.75rem] font-light">Triunfo</p>
          </div>
          <div className="flex items-center gap-[2rem] ml-3.5">
            <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Legend-_Alacrity_rune.png/52px-Legend-_Alacrity_rune.png?4afd0" alt="" className="w-[1.5rem]" />
            <p className=" text-[0.75rem] font-light">Lenda: Espontaneidade</p>
          </div>
          <div className="flex items-center gap-[2rem] ml-3.5">
            <img src="https://wiki.leagueoflegends.com/en-us/images/thumb/Cut_Down_rune.png/52px-Cut_Down_rune.png?ecfb4" alt="" className="w-[1.5rem]" />
            <p className=" text-[0.75rem] font-light">Dilacerar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { RunesPrimary };
