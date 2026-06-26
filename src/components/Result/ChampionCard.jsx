import noReturn from "../../assets/no-return/sem-resposta-sem-borda.png";
import noReturnWideScreen from "../../assets/no-return/sem-resposta-wide-sem-borda.png";

// Card do Herói
function ChampionCard({ champion }) {
  return (
    <section
      className="
        relative
        bg-[#252937] 
        w-[18.75rem] 
        xl:w-full
        h-[10.313rem] 
        xl:h-[26.875rem]
        flex justify-start items-end
        border-1 border-solid border-secundary 
        rounded-[10px]
        bg-cover bg-center
        shadow-[inset_0_-10px_30px_5px_#000000]
      "
      style={{
        backgroundImage: `url(${champion?.splash || noReturnWideScreen})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-[10px]"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex gap-[0.75rem] xl:gap-[1.5rem] p-[0.625rem] xl:p-[2.5rem]">
        {/* Ícone do champ */}
        <div className="w-[2.625rem] xl:w-[5.375rem] h-[2.625rem] xl:h-[5.375rem] border border-secundary rounded-[10px] overflow-hidden">
          <img src={champion?.icon || noReturn} alt={champion?.name || "Campeão não selecionado"} className="w-full h-full object-cover rounded-[15px] scale-110" />
        </div>

        <div>
          {/* Nome */}
          <h4 className="eb-garamond uppercase bg-linear-to-r from-third to-fourth bg-clip-text text-transparent font-bold text-[0.75rem] xl:text-[2rem] mt-1">{champion?.name || "Campeão"}</h4>

          <div className="flex items-center gap-3">
            {/* Ícone da role */}
            {champion?.roleIcon ? <img src={champion.roleIcon} alt="role" className="w-[1rem] xl:w-[1.875rem]" /> : <span className=" Inter text-secundary text-[0.75rem] font-medium  ">?</span>}

            {/* Nome da role */}
            <span className="Inter text-[0.75rem] xl:text-[1.125rem] text-white font-bold">{champion?.role || "Rota"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ChampionCard };
