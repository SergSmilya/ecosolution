import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { throttle } from "throttle-debounce";
import AdressComponent from "../AdressComponent/AdressComponent";

import style from "./Hero.module.css";
import images from "../../assets/imgs/hero/index.js";

export default function Hero() {
  const [isHidenCopy, setIsHidenCopy] = useState(false);

  const { hero__section, about__img } = style;

  useEffect(() => {
    window.addEventListener("resize", throttle(300, isHideCopyOnMobile));

    return () => {
      window.removeEventListener("resize", throttle(300, isHideCopyOnMobile));
    };
  }, []);

  function isHideCopyOnMobile({ target: { window } }) {
    const WIDTH = window.screen.width;

    setIsHidenCopy(WIDTH);
  }
  return (
    <Element className={hero__section} name="hero">
      <AdressComponent display={isHidenCopy >= 768 ? "block" : "none"} />
      <img className={about__img} src={images.mobImg} alt="" width={"100%"} />
    </Element>
  );
}
