import sprite from "../../assets/imgs/svg/sprite.svg";

export default function Button({
  children,
  width = 16,
  height = 16,
  nameIcon = "arrow-right",
  position = 0,
  bcgColor = "",
}) {
  return (
    <button type={"button"}>
      {children}
      <svg
        width={width}
        height={height}
        style={{
          transform: `rotate(${position}deg)`,
          color: `var(--bgdColorBtnHeader)`,
        }}
      >
        <use href={`${sprite}#${nameIcon}`} />
      </svg>
    </button>
  );
}
