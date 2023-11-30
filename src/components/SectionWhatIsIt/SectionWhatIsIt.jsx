import SecondaryButton from "../SecondaryButton/SecondaryButton";
import style from "./SectionWhatIsIt.module.css";

export default function SectionWhatIsIt() {
  const {
    whatIsIt__section,
    whatIsIt__title,
    wrapper,
    whatIsIt__postTitle,
    button__wrap,
  } = style;

  return (
    <section className={whatIsIt__section}>
      <h1 className={whatIsIt__title}>RENEWABLE ENERGY For any task</h1>
      <div className={wrapper}>
        <p className={whatIsIt__postTitle}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <div className={button__wrap}>
          <SecondaryButton>Learn more</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
