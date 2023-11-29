import AnswQuestItemComponent from "../AnswQuestItemComponent/AnswQuestItemComponent";
import ButtonGetInTouchComponent from "../ButtonGetInTouchComponent/ButtonGetInTouchComponent";
import style from "./SectionAsked.module.css";

export default function SectionAsked() {
  const {
    asked__section,
    asked__title,
    questions__list,
    asked__postTitle,
    asked__buttonWrap,
  } = style;
  return (
    <section className={asked__section}>
      <h2 className={asked__title}>Frequently Asked Questions</h2>
      <ul className={questions__list}>
        <AnswQuestItemComponent content="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.">
          How do wind turbines and solar panels work together in a renewable
          energy system?
        </AnswQuestItemComponent>
        <AnswQuestItemComponent>
          What sets EcoSolution's renewable energy solutions apart from others
          on the market?
        </AnswQuestItemComponent>
        <AnswQuestItemComponent>
          How can businesses and communities benefit from integrating renewable
          energy solutions from EcoSolution?
        </AnswQuestItemComponent>
        <AnswQuestItemComponent>
          What measures does EcoSolution take to ensure the environmental
          sustainability of its products?
        </AnswQuestItemComponent>
        <AnswQuestItemComponent>
          How does EcoSolution engage with local communities and support a just
          transition to renewable energy?
        </AnswQuestItemComponent>
      </ul>
      <p className={asked__postTitle}>
        Didn't find the answer to your question?
      </p>
      <div className={asked__buttonWrap}>
        <ButtonGetInTouchComponent>Contact Us</ButtonGetInTouchComponent>
      </div>
    </section>
  );
}
