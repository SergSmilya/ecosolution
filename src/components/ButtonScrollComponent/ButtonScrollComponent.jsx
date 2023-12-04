import { scroller } from "react-scroll";
import style from "./ButtonScrollComponent.module.css";

export default function ButtonScrollComponent({
  children = "Get in touch",
  id = "contactUs",
}) {
  function scrollToElement() {
    scroller.scrollTo("contact us", {
      duration: 1500,
      delay: 100,
      smooth: "liner",
      offset: -100,
    });
  }

  return (
    <button className={style.button__get} onClick={scrollToElement}>
      {children}
    </button>
  );
}
