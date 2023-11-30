import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <a>
      <svg className={style.icon} width={"269px"} height={"40px"}>
        <use href={`${sprite}#Logo`} />
      </svg>
    </a>
  );
}
