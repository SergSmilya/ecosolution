import { scroller } from "react-scroll";
import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";
import style from "./SecondaryButton.module.css";

export default function SecondaryButton({ children }) {
  function scrollToCases() {
    scroller.scrollTo("cases", {
      duration: 1500,
      delay: 100,
      smooth: "liner",
      offset: -10,
    });
  }

  return (
    <button
      className={style.secondary__button}
      type={"button"}
      onClick={scrollToCases}
    >
      {children}
      <ArrowColorComponent />
    </button>
  );
}
