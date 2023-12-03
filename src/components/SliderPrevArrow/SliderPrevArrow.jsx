import clsx from "clsx";
import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./SliderPrevArrow.module.css";

export default function SliderPrevArrow({ className, onClick }) {
  const { arrow__button, icon } = style;

  console.log(className);
  return (
    <button className={clsx(arrow__button, className)} onClick={onClick}>
      <svg className={icon}>
        <use href={`${sprite}#arrow-left-slider`} />
      </svg>
    </button>
  );
}
