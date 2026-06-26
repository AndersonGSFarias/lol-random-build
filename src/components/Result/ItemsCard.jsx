import noReturnRounded from "../../assets/no-return/sem-resposta-sem-borda.png";

function ItemsCard({ items }) {
  return (
    <section
      className="
        bg-[#080E1B] 
        w-[18.75rem] 
        xl:w-full
        xl:h-[11.063rem]
        flex flex-col
        border-1 border-solid border-secundary 
        rounded-[10px]
        px-[1.25rem]
        py-[0.625rem]
      "
    >
      <div className="flex border-b border-[#252937] pb-[0.625rem] pl-[0.7rem] border-b-1 mb-[0.625rem]">
        <img src="/src/assets/itens/shop-button-mobile.png" alt="" className="w-[1.625rem] h-[1.625rem] rounded-2xl " />
        <h5 className="text-[#515B6B] text-[1rem] pl-[1.5rem] ">Itens</h5>
      </div>

      <div
        className="
    grid
    grid-cols-3
    gap-x-4
    gap-y-4

    xl:grid-cols-[repeat(6,5rem)]
    xl:gap-x-[2.5rem]
    xl:gap-y-0
    xl:justify-center
  "
      >
        {(items?.length ? items : [null, null, null, null, null, null]).map((item, index) => (
          <figure key={item?.id || index} className="flex flex-col items-center">
            <img
              src={item?.icon || noReturnRounded}
              alt={item?.name || `Item ${index + 1}`}
              className="
                  w-[2.875rem] 
                  xl:w-[5rem]
                  h-[2.875rem]
                  xl:h-[5rem]
                  rounded-[5px] 
                  border-1 
                  border-secundary
                  object-cover
                "
            />

            <figcaption className="text-[#7C7D80] text-[0.625rem] font-medium mt-[0.25rem] text-center leading-tight">{item?.name || `Item ${index + 1}`}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export { ItemsCard };
