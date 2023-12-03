import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./SliderPrevArrow.module.css";

export default function SliderPrevArrow({ onClick, styles }) {
  const { arrow__button, icon } = style;

  return (
    <button className={arrow__button} style={styles} onClick={onClick}>
      <svg className={icon}>
        <use href={`${sprite}#arrow-left-slider`} />
      </svg>
    </button>
  );
}
