import { Element } from "react-scroll";
import BenefitItem from "../BenefitItem/BenefitItem";
import style from "./SectionAbout.module.css";

import img1 from "../../assets/imgs/about/man-worker-firld-by-solar-panels.png";
import img2 from "../../assets/imgs/about/wind-farms-fields.png";

export default function SectionAbout() {
  const {
    about__section,
    main__wrapper,
    about__title,
    about__postTitle,
    block__list,
    card__list,
    about__img,
  } = style;

  return (
    <section className={about__section}>
      <Element className={main__wrapper} name="about">
        <h2 className={about__title}>Main values of our company</h2>
        <p className={about__postTitle}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
        <div className={block__list}>
          <ul className={card__list}>
            <li>
              <BenefitItem nameIcon="openness" nameBenefit="Openness">
                to the world, people, new ideas and projects
              </BenefitItem>
            </li>
            <li>
              <BenefitItem
                nameIcon="responssbility"
                nameBenefit="Responsibility"
              >
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </BenefitItem>
            </li>
          </ul>
          <img
            className={about__img}
            src={img1}
            alt="img1"
            width={342}
            height={197}
          />
        </div>
        <div className={block__list}>
          <img
            className={about__img}
            src={img2}
            alt="img2"
            width={342}
            height={197}
          />
          <ul className={card__list}>
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
        </div>
      </Element>
    </section>
  );
}
