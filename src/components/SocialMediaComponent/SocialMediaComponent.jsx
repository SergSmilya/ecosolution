import style from "./SocialMediaComponent.module.css";
import sprite from "../../assets/imgs/svg/sprite.svg";

export default function SocialMediaComponent({
  width = null,
  height = null,
  padding = null,
}) {
  const {
    social__wrap,
    social__list,
    social__item,
    social__link,
    social__icon,
  } = style;

  return (
    <div className={social__wrap}>
      <ul className={social__list}>
        <li
          className={social__item}
          style={{
            width: width,
            height: height,
            padding: padding,
          }}
        >
          <a
            className={social__link}
            href="https://www.facebook.com/"
            target="_blank"
          >
            <svg width={"24px"} height={"24px"} className={social__icon}>
              <use href={`${sprite}#facebook`} />
            </svg>
          </a>
        </li>
        <li
          className={social__item}
          style={{
            width: width,
            height: height,
            padding: padding,
          }}
        >
          <a
            className={social__link}
            href="https://www.instagram.com/"
            target="_blank"
          >
            <svg width={"24px"} height={"24px"} className={social__icon}>
              <use href={`${sprite}#instagram`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
