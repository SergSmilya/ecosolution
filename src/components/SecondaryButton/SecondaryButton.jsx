import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";
import style from "./SecondaryButton.module.css";

export default function SecondaryButton({ children, type = "button" }) {
  return (
    <button className={style.secondary__button} type={type}>
      {children}
      <ArrowColorComponent />
    </button>
  );
}
