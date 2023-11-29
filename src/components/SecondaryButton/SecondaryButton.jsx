import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";
import style from "./SecondaryButton.module.css";

export default function SecondaryButton({ children }) {
  return (
    <button className={style.secondary__button} type="button">
      {children}
      <ArrowColorComponent />
    </button>
  );
}
