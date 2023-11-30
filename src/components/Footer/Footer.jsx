import { Link, animateScroll as scroll } from "react-scroll";
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
        <Link
          to="main"
          spy={true}
          smooth={true}
          offset={100}
          duration={700}
          delay={200}
        >
          <ArrowColorComponent position={270} />
        </Link>
      </div>
      <div className={social__wrap}>
        <SocialMediaComponent />
      </div>
      <AdressComponent />
    </div>
  );
}
