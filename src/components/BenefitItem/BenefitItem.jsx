import sprite from "../../assets/imgs/svg/sprite.svg";
import styles from "./BenefitItem.module.css";

export default function BenefitItem({
  children,
  nameIcon = "innovation",
  nameBenefit = "Innovation",
}) {
  const { benefit__container, icon__wrap, icon__desc, benefit__desc } = styles;
  return (
    <div className={benefit__container}>
      <div className={icon__wrap}>
        <svg width={16} height={16}>
          <use href={`${sprite}#${nameIcon}`} />
        </svg>
        <p className={icon__desc}>{nameBenefit}</p>
      </div>
      <p className={benefit__desc}>{children}</p>
    </div>
  );
}
