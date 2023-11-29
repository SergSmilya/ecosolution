import Logo from "../Logo/Logo";
import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";
import SocialMediaComponent from "../SocialMediaComponent/SocialMediaComponent";
import AdressComponent from "../AdressComponent/AdressComponent";
import style from "./Footer.module.css";

export default function Footer() {
  const { footer, footer__logoButton, social__wrap } = style;

  return (
    <div className={footer}>
      <div className={footer__logoButton}>
        <Logo />
        <ArrowColorComponent position={270} />
      </div>
      <div className={social__wrap}>
        <SocialMediaComponent />
      </div>
      <AdressComponent />
    </div>
  );
}
