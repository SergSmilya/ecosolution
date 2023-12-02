import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./SliderNextArrow.module.css";

export default function SliderNextArrow({ onClick }) {
  const { arrow__button, icon } = style;

  return (
    <button className={arrow__button} onClick={onClick}>
      <svg className={icon}>
        <use href={`${sprite}#arrow-right-slider`} />
      </svg>
    </button>
  );
}
