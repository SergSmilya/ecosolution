import style from "./ButtonGetInTouchComponent.module.css";

export default function ButtonGetInTouchComponent({
  children = "Get in touch",
  type = "button",
}) {
  return (
    <button className={style.button__get} type={type}>
      {children}
    </button>
  );
}
