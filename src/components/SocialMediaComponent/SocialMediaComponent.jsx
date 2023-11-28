import style from "./SocialMediaComponent.module.css";
import sprite from "../../assets/imgs/svg/sprite.svg";

export default function SocialMediaComponent() {
  const { social__wrap, social__list, social__item, social__link } = style;

  return (
    <div className={social__wrap}>
      <ul className={social__list}>
        <li className={social__item}>
          <a className={social__link} href="/">
            <svg width={"24px"} height={"24px"} style={{ fill: "white" }}>
              <use href={`${sprite}#facebook`} />
            </svg>
          </a>
        </li>
        <li className={social__item}>
          <a className={social__link} href="/">
            <svg width={"24px"} height={"24px"} style={{ fill: "white" }}>
              <use href={`${sprite}#instagram`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
