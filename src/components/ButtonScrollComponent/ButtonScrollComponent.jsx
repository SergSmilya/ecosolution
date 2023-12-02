import { scroller } from "react-scroll";
import style from "./ButtonScrollComponent.module.css";

export default function ButtonScrollComponent({
  children = "Get in touch",
  id = "contactUs",
  offset = -10,
}) {
  function scrollToElement() {
    scroller.scrollTo("contact us", {
      duration: 1500,
      delay: 100,
      smooth: "liner",
      offset: offset,
    });
  }

  return (
    <button className={style.button__get} onClick={scrollToElement}>
      {children}
    </button>
  );
}
