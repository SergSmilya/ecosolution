import { animateScroll as scroll } from "react-scroll";
import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./Logo.module.css";

export default function Logo() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <a href="#top" onClick={scrollToTop}>
      <svg className={style.icon} width={"269px"} height={"40px"}>
        <use href={`${sprite}#Logo`} />
      </svg>
    </a>
  );
}
