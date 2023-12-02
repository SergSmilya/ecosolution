import AdressComponent from "../AdressComponent/AdressComponent";
import BenefitItem from "../BenefitItem/BenefitItem";
import style from "./SectionAbout.module.css";

import images from "../../assets/imgs/hero/index.js";
import { Element } from "react-scroll";

export default function SectionAbout() {
  const { about__section, about__title, about__postTitle, card__list } = style;

  return (
    <section className={about__section}>
      <Element name="about">
        <AdressComponent />
        <img src={images.mobImg} alt="" width={"100%"} height={200} />
        <h2 className={about__title}>Main values of our company</h2>
        <p className={about__postTitle}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
        <ul className={card__list}>
          <li>
            <BenefitItem nameIcon="openness" nameBenefit="Openness">
              to the world, people, new ideas and projects
            </BenefitItem>
          </li>
          <li>
            <BenefitItem nameIcon="responssbility" nameBenefit="Responsibility">
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </BenefitItem>
          </li>
          <li>
            <BenefitItem nameIcon="innovation" nameBenefit="Innovation">
              we use the latest technology to implement non-standard solutions
            </BenefitItem>
          </li>
          <li>
            <BenefitItem nameIcon="quality" nameBenefit="Quality">
              we do not strive to be the first among others, but we want to be
              the best in our business
            </BenefitItem>
          </li>
        </ul>
      </Element>
    </section>
  );
}
