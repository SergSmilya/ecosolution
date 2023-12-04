import { Element } from "react-scroll";
import { Accordion } from "react-accessible-accordion";
import ButtonScrollComponent from "../ButtonScrollComponent/ButtonScrollComponent";
import FaqItem from "../FaqItem/FaqItem";

import faqs from "../../data/faq.json";
import style from "./SectionAsked.module.css";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function SectionAsked() {
  const {
    asked__section,
    asked__title,
    element,
    accord,
    asked__buttonWrap,
    additional__title,
    inner__wrap,
    asked__postTitle,
    wrap__button,
  } = style;

  return (
    <section className={asked__section}>
      <h2 className={asked__title}>Frequently Asked Questions</h2>
      <Element name="faq" className={element}>
        <Accordion className={accord} preExpanded={"1"}>
          {faqs.map(({ id, question, answer }) => {
            return (
              <FaqItem key={id} desc={answer} uuid={id}>
                {question}
              </FaqItem>
            );
          })}
        </Accordion>
      </Element>
      <div className={asked__buttonWrap}>
        <h2 className={additional__title}>Frequently Asked Questions</h2>
        <div className={inner__wrap}>
          <p className={asked__postTitle}>
            Didn't find the answer to your question?
          </p>
          <div className={wrap__button}>
            <ButtonScrollComponent>Contact Us</ButtonScrollComponent>
          </div>
        </div>
      </div>
    </section>
  );
}
