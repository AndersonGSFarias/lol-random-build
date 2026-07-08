import lockIcon from "../../assets/cadeados/cadeado-fechado.svg";
import unlockIcon from "../../assets/cadeados/cadeado-aberto.svg";

function LockButton({ isLocked, onToggleLock, lockedLabel = "Destravar", unlockedLabel = "Travar", buttonSize = "h-16 w-16", iconSize = "w-auto h-auto" }) {
  return (
    <button
      type="button"
      onClick={onToggleLock}
      onMouseDown={(event) => event.preventDefault()}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
        }
      }}
      aria-label={isLocked ? lockedLabel : unlockedLabel}
      title={isLocked ? lockedLabel : unlockedLabel}
      className={`
        absolute
        left-1/2
        top-1/2
        z-20

        flex
        ${buttonSize}
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center

        rounded-full
        cursor-pointer
        transition-all
        duration-300
        hover:scale-110

        ${isLocked ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
      `}
    >
      <img
        src={lockIcon}
        alt="Cadeado travado"
        className={`
          ${iconSize}
          transition-opacity
          duration-300

          ${isLocked ? "group-hover:opacity-0" : "opacity-100"}
        `}
      />

      {isLocked && (
        <img
          src={unlockIcon}
          alt="Cadeado destravado"
          className={`
            absolute
            ${iconSize}
            opacity-0
            translate-x-1
            transition-opacity
            duration-300
            group-hover:opacity-100
          `}
        />
      )}
    </button>
  );
}

export { LockButton };
