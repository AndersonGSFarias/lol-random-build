function ItemsCard() {
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
        mb-[9.375rem]
        "
    >
      {/* Título com a linha embaixo */}
      <h5 className="text-[#515B6B] text-[1rem] border-b border-[#252937] pb-2 mb-6">Itens</h5>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-2 text-[#7C7D80] text-[0.75rem] mb-6">
        {/* Item 1 */}
        <figure className="flex flex-col items-center text-center gap-2">
          <img src="https://wiki.leagueoflegends.com/en-us/images/Fiendhunter_Bolts_item.png?7596c" alt="Dardos de Caça-Demônios" className="w-12 h-12 rounded-lg" /* Tamanho fixo e borda arredondada */ />
          <figcaption className="leading-tight w-[6rem]">
            <span>Dardos de Caça-Demonios</span>
          </figcaption>
        </figure>

        {/* Item 2 */}
        <figure className="flex flex-col items-center text-center gap-2">
          <img src="https://wiki.leagueoflegends.com/en-us/images/Iceborn_Gauntlet_item.png" alt="Manopla dos Glacinatas" className="w-12 h-12 rounded-lg" />
          <figcaption className="leading-tight w-[6rem]">
            <span>Manopla dos Glacinatas</span>
          </figcaption>
        </figure>

        {/* Item 3 */}
        <figure className="flex flex-col items-center text-center gap-2">
          <img src="https://wiki.leagueoflegends.com/en-us/images/Mercury%27s_Treads_item.png" alt="Passos de Mercúrio" className="w-12 h-12 rounded-lg" />
          <figcaption className="leading-tight w-[6rem]">
            <span>Passos de Mercúrio</span>
          </figcaption>
        </figure>

        {/* Item 4 */}
        <figure className="flex flex-col items-center text-center gap-2">
          <img src="https://wiki.leagueoflegends.com/en-us/images/Essence_Reaver_item.png" alt="Colhedor de Essência" className="w-12 h-12 rounded-lg" />
          <figcaption className="leading-tight w-[6rem]">
            <span>Colhedor de Essência</span>
          </figcaption>
        </figure>

        {/* Item 5 */}
        <figure className="flex flex-col items-center text-center gap-2">
          <img src="https://wiki.leagueoflegends.com/en-us/images/Bloodthirster_item.png" alt="Sedenta por Sangue" className="w-12 h-12 rounded-lg" />
          <figcaption className="leading-tight w-[6rem]">
            <span>Sedenta por Sangue</span>
          </figcaption>
        </figure>

        {/* Item 6 */}
        <figure className="flex flex-col items-center text-center gap-2">
          <img src="https://wiki.leagueoflegends.com/en-us/images/Black_Cleaver_item.png" alt="Cutelo Negro" className="w-12 h-12 rounded-lg" />
          <figcaption className="leading-tight w-[6rem]">
            <span>Cutelo Negro</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export { ItemsCard };
