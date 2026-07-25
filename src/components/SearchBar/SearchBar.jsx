import { Search } from "lucide-react";

function SearchBar({ value, onChange, disabled, suggestions = [], onSelectSuggestion }) {
  const hasSuggestions = suggestions.length > 0;

  return (
    <div
      className="
        relative

        w-[15rem]
        h-[2.875rem]

        xl:w-[43.625rem]
        xl:h-[3.75rem]

        mr-[0.625rem]
        xl:mr-[2.75rem]
      "
    >
      <div
        className="
          w-full
          h-full

          rounded-[10px]
          bg-linear-to-r
          from-[#D58D00]
          to-[#F3CB69]
          p-[1px]
        "
      >
        <label
          className="
            flex
            items-center
            gap-[0.875rem]

            w-full
            h-full

            rounded-[9px]
            bg-[#0A1624]

            px-[1rem]
            xl:px-[1.25rem]
          "
        >
          <Search
            className="
              size-[1.25rem]
              xl:size-[1.5rem]
              text-[#7B7E84]
              shrink-0
            "
          />

          <input
            type="search"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            disabled={disabled}
            placeholder="Pesquisar campeão..."
            className="
              w-full
              bg-transparent
              outline-none
              border-none

              text-[#A7A6A3]
              placeholder:text-[#7B7E84]

              text-[0.75rem]
              xl:text-[0.875rem]

              font-medium

              disabled:cursor-not-allowed
            "
          />
        </label>
      </div>

      {hasSuggestions && (
        <ul
          className="
            absolute
            top-[calc(100%+0.375rem)]
            left-0
            z-50

            w-full
            max-h-[14rem]
            overflow-y-auto

            rounded-[10px]
            border
            border-secundary
            bg-[#0A1624]

            shadow-[0_10px_30px_rgba(0,0,0,0.45)]
          "
        >
          {suggestions.map((champion) => (
            <li key={champion.id}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => onSelectSuggestion(champion)}
                className="
                  flex
                  items-center
                  gap-[0.75rem]

                  w-full
                  px-[0.875rem]
                  py-[0.625rem]

                  text-left
                  cursor-pointer

                  hover:bg-[#111F33]
                  transition-colors
                  duration-200
                "
              >
                <img
                  src={champion.icon}
                  alt={champion.name}
                  className="
                    w-[2rem]
                    h-[2rem]
                    rounded-[6px]
                    border
                    border-secundary
                    object-cover
                  "
                />

                <span
                  className="
                    text-[#A7A6A3]
                    text-[0.75rem]
                    xl:text-[0.875rem]
                    font-medium
                  "
                >
                  {champion.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { SearchBar };
