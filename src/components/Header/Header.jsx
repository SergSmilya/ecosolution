import { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";
import ButtonScrollComponent from "../ButtonScrollComponent/ButtonScrollComponent";
import styles from "./Header.module.css";
import icon from "../../assets/imgs/svg/sprite.svg";
import Logo from "../Logo/Logo";

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

  return (
    <header className={header}>
      <div className={headerWrap}>
        <Logo />

        <div className={header__wrapForButton}>
          <button className={headerButton} type="button">
            <svg width={16} height={16}>
              <use href={`${icon}#burger-menu`} />
            </svg>
          </button>
          {widthScreen >= 768 && <ButtonScrollComponent />}
        </div>
      </div>
    </header>
  );
}
