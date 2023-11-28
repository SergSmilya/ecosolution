import Logo from "../Logo/Logo";
import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";
import style from "./Footer.module.css";
import SocialMediaComponent from "../SocialMediaComponent/SocialMediaComponent";

export default function Footer() {
  const { footer, footer__logoButton } = style;

  return (
    <div className={footer}>
      <div className={footer__logoButton}>
        <Logo />
        <ArrowColorComponent position={270} />
      </div>
      <SocialMediaComponent />
    </div>
  );
}
