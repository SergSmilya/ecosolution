import { Element } from "react-scroll";
import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./SectionContactUs.module.css";

export default function SectionContactUs() {
  const {
    contactUs__section,
    contactUs__title,
    main__wrap,
    tel__wrap,
    contactUs__postTitle,
    tel__list,
    tel__item,
    contactUs__link,
    mail__wrap,
    adress__wrap,
    social__wrap,
    social__list,
    social__item,
    social__link,
  } = style;

  return (
    <section className={contactUs__section} id="contactUs">
      <Element name="contacts">
        <h2 className={contactUs__title}>Contact us</h2>
        <div className={main__wrap}>
          <div className={tel__wrap}>
            <p className={contactUs__postTitle}>Phone:</p>
            <ul className={tel__list}>
              <li className={tel__item}>
                <a className={contactUs__link} href="tel:+38 (098) 12 34 567">
                  <svg width={"24px"} height={"24px"}>
                    <use href={`${sprite}#call`} />
                  </svg>
                  38 (098) 12 34 567
                </a>
              </li>
              <li className={tel__item}>
                <a className={contactUs__link} href="tel:+38 (093) 12 34 567">
                  <svg width={"24px"} height={"24px"}>
                    <use href={`${sprite}#call`} />
                  </svg>
                  38 (093) 12 34 567
                </a>
              </li>
            </ul>
          </div>
          <div className={mail__wrap}>
            <p className={contactUs__postTitle}>E-mail:</p>
            <a className={contactUs__link} href="mailto:office@ecosolution.com">
              <svg width={"24px"} height={"24px"}>
                <use href={`${sprite}#sms`} />
              </svg>
              office@ecosolution.com
            </a>
          </div>
          <div className={adress__wrap}>
            <p className={contactUs__postTitle}>Address:</p>
            <a
              className={contactUs__link}
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+7,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+79000/data=!4m2!3m1!1s0x473add6785a9dce5:0x92b4b3ec68e99c14?sa=X&ved=2ahUKEwiC0fOis-mCAxV3SvEDHc-RAhIQ8gF6BAgPEAA≈"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={"24px"} height={"24px"}>
                <use href={`${sprite}#map`} />
              </svg>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </div>
          <div className={social__wrap}>
            <p className={contactUs__postTitle}>Social Networks:</p>
            <ul className={social__list}>
              <li className={social__item}>
                <a
                  className={social__link}
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <svg width={"24px"} height={"24px"}>
                    <use href={`${sprite}#facebook`} />
                  </svg>
                </a>
              </li>
              <li className={social__item}>
                <a
                  className={social__link}
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <svg width={"24px"} height={"24px"}>
                    <use href={`${sprite}#instagram`} />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
}
