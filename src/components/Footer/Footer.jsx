import { scroller } from "react-scroll";
import Logo from "../Logo/Logo";
import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";
import SocialMediaComponent from "../SocialMediaComponent/SocialMediaComponent";
import AdressComponent from "../AdressComponent/AdressComponent";
import style from "./Footer.module.css";

export default function Footer() {
  const { footer, social__additional, footer__logoButton, social__wrap } =
    style;

  function scrollToMain() {
    scroller.scrollTo("main", {
      duration: 1500,
      delay: 100,
      smooth: "liner",
      offset: 100,
    });
  }

  return (
    <div className={footer}>
      <div className={footer__logoButton}>
        <Logo />
        <div className={social__additional}>
          <SocialMediaComponent />
        </div>
        <button type="button" onClick={scrollToMain}>
          <ArrowColorComponent position={270} />
        </button>
      </div>
      <div className={social__wrap}>
        <SocialMediaComponent />
      </div>
      <AdressComponent />
    </div>
  );
}
