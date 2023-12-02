import icon from "../../assets/imgs/svg/sprite.svg";
import NavLinkItem from "../NavLinkItem/NavLinkItem";
import style from "./MainMenu.module.css";
import { nameLinkList } from "../../assets/help/arrLinksList";

export default function MainMenu({ onCloseModal }) {
  const { close__button, nav__list, nav__item } = style;

  return (
    <>
      <button className={close__button} type="button" onClick={onCloseModal}>
        <svg width={20} height={20}>
          <use href={`${icon}#close`} />
        </svg>
        close
      </button>

      <nav>
        <ul className={nav__list}>
          {nameLinkList.map((el, i) => (
            <li className={nav__item} key={i}>
              <NavLinkItem scrollTo={el} onCloseModal={onCloseModal}>
                {el}
              </NavLinkItem>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
