import { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";
import { clsx } from "clsx";
import ButtonScrollComponent from "../ButtonScrollComponent/ButtonScrollComponent";
import Modal from "../Modal/Modal";
import MainMenu from "../MainMenu/MainMenu";
import styles from "./Header.module.css";
import icon from "../../assets/imgs/svg/sprite.svg";
import Logo from "../Logo/Logo";

export default function Header() {
  const [widthScreen, setWidthScreen] = useState(window.screen.width);
  const [isHiden, setIsHiden] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const {
    header,
    headerButton,
    headerWrap,
    headerWrap__background,
    header__wrapForButton,
  } = styles;

  useEffect(() => {
    window.addEventListener("resize", throttle(300, isHideButtonOnMobile));

    document.addEventListener(
      "scroll",
      throttle(500, changeBackgroundColorHeader)
    );

    return () => {
      document.removeEventListener(
        "scroll",
        throttle(500, changeBackgroundColorHeader)
      );

      window.removeEventListener("resize", throttle(300, isHideButtonOnMobile));
    };
  }, []);

  function isHideButtonOnMobile({ target: { window } }) {
    const WIDTH = window.screen.width;

    setWidthScreen(WIDTH);
  }

  function changeBackgroundColorHeader() {
    const SCROLLPOSITION = window.scrollY;

    if (SCROLLPOSITION !== 0) {
      setIsScroll(true);
    }
    if (SCROLLPOSITION < 50) {
      setIsScroll(false);
    }
  }

  function habdleOpenModal() {
    setIsHiden(true);
  }

  function handleCloseModal(e) {
    if (e.code === "Escape" || e.target === e.currentTarget) {
      setIsHiden(false);
    }
  }

  return (
    <header className={clsx(header, isScroll && headerWrap__background)}>
      <div className={headerWrap}>
        <Logo />

        <div className={header__wrapForButton}>
          <button
            className={headerButton}
            type="button"
            onClick={habdleOpenModal}
          >
            <svg width={16} height={16}>
              <use href={`${icon}#burger-menu`} />
            </svg>
          </button>
          {widthScreen >= 768 && <ButtonScrollComponent />}
        </div>
      </div>

      {isHiden && (
        <Modal onCloseModal={handleCloseModal}>
          <MainMenu onCloseModal={handleCloseModal} />
        </Modal>
      )}
    </header>
  );
}
