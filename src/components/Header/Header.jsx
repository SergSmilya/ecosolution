import { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";
import styles from "./Header.module.css";
import icon from "../../assets/imgs/svg/sprite.svg";
import Logo from "../Logo/Logo";
import ButtonScrollComponent from "../ButtonScrollComponent/ButtonScrollComponent";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const [widthScreen, setWidthScreen] = useState(window.screen.width);

  const { header, headerButton, headerWrap, header__wrapForButton } = styles;

  useEffect(() => {
    window.addEventListener(
      "resize",
      throttle(500, ({ target: { window } }) => {
        const WIDTH = window.screen.width;
        setWidthScreen(WIDTH);
      })
    );
  }, []);

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <header className={header}>
      <div className={headerWrap} onClick={scrollToTop}>
        <Logo />

        <div className={header__wrapForButton}>
          <button className={headerButton} type="button">
            <svg width={16} height={16}>
              <use href={`${icon}#burger-menu`} />
            </svg>
          </button>
          {widthScreen >= 768 && <ButtonScrollComponent />}
          {/* <Link
            activeClass="active"
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-40}
            duration={700}
          >
            contactUs
          </Link> */}
        </div>
      </div>
    </header>
  );
}
