import sprite from "../../assets/imgs/svg/sprite.svg";

export default function Logo() {
  return (
    <a>
      <svg width={"269px"} height={"40px"} fill={"none"}>
        <use href={`${sprite}#Logo`} />
      </svg>
    </a>
  );
}
