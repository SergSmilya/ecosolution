import clsx from "clsx";
import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./SliderNextArrow.module.css";

export default function SliderNextArrow({ className, onClick }) {
  const { arrow__button, icon } = style;

  return (
    <button className={clsx(arrow__button, className)} onClick={onClick}>
      <svg className={icon}>
        <use href={`${sprite}#arrow-right-slider`} />
      </svg>
    </button>
  );
}
