import style from "./AnswQuestItemComponent.module.css";
import sprite from "../../assets/imgs/svg/sprite.svg";

export default function AnswQuestItemComponent({ children, content = "" }) {
  const { question__item, question__button, question__title, answer__text } =
    style;
  return (
    <li className={question__item}>
      <button className={question__button} type="button">
        <svg width={16} height={16}>
          <use href={`${sprite}#minus`} />
        </svg>
      </button>
      <div>
        <h3 className={question__title}>{children}</h3>
        <p className={answer__text}>{content}</p>
      </div>
    </li>
  );
}
