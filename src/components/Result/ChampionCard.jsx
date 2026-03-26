// Card do Herói
function ChampionCard() {
  return (
    // Background
    <section
      className="
        relative
        bg-[#252937] 
        w-[18.75rem] 
        h-[10.313rem] 
        flex justify-start items-end
        border-1 border-solid border-secundary 
        rounded-[10px]
        bg-cover bg-center
        shadow-[inset_0_-10px_30px_5px_#000000]
      "
      style={{
        backgroundImage: `url('https://wiki.leagueoflegends.com/en-us/images/Irelia_OriginalSkin.jpg?12499')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-[10px]"></div>
      {/* Sobreamento interno */}
      <div className="relative z-10"></div>
      {/* Informações  */}
      <div className="flex gap-[0.75rem] p-[0.625rem]">
        {/* Icone do champ */}
        <div className="w-[2.625rem] h-[2.625rem] rounded-[10px] bg-secundary"></div>

        <div>
          {/* Titulo do champ */}
          <h4 className="eb-garamond uppercase bg-linear-to-r from-third to-fourth bg-clip-text text-transparent font-bold text-[0.75rem] mt-1">Irelia</h4>

          <div className="flex items-center gap-1">
            {/* Icone da role */}
            <img src="https://wiki.leagueoflegends.com/en-us/images/All_roles_icon.png?d9e6c" alt="" className="w-[1rem] " />
            {/* Nome da role */}
            <span className="Inter text-[1rem] text-white font-bold">Meio</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ChampionCard };
