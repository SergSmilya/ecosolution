import { scroller } from "react-scroll";
import style from "./NavLinkItem.module.css";
import sprite from "../../assets/imgs/svg/sprite.svg";

export default function NavLinkItem({ children, scrollTo, onCloseModal }) {
  const { nav__button } = style;

  function toLowerCaseName(str) {
    return str.toLowerCase();
  }

  function scrollToElement() {
    scroller.scrollTo(`${toLowerCaseName(scrollTo)}`, {
      duration: 1500,
      activeClass: "active",
      delay: 100,
      smooth: "liner",
      offset: 10,
    });
  }

  return (
    <button className={nav__button} onClick={scrollToElement}>
      {children}
      <svg width={16} height={16}>
        <use href={`${sprite}#arrow`} />
      </svg>
    </button>
  );
}
