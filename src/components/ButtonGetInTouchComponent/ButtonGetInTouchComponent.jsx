import style from "./ButtonGetInTouchComponent.module.css";

export default function ButtonGetInTouchComponent({
  children = "Get in touch",
}) {
  return (
    <button className={style.button__get} type="button">
      {children}
    </button>
  );
}
