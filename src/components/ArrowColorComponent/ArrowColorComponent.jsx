import sprite from "../../assets/imgs/svg/sprite.svg";

export default function ArrowColorComponent({ size = 32, coef = 0, pad = 8 }) {
  return (
    <svg
      width={size}
      height={size}
      style={{
        backgroundColor: "var(--primaryGreenColor)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `${pad}`,
        fill: "none",
      }}
    >
      <use
        width={size / 2 - coef}
        height={size / 2 - coef}
        href={`${sprite}#arrow-right`}
      />
    </svg>
  );
}
