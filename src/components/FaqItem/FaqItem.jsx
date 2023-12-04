import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import clsx from "clsx";

import sprite from "../../assets/imgs/svg/sprite.svg";
import style from "./FaqItem.module.css";

export default function FaqItem({ children, desc, uuid }) {
  const {
    question__item,
    question__button,
    icon,
    active,
    question__title,
    answer__text,
  } = style;

  return (
    <AccordionItem className={question__item} uuid={uuid}>
      <AccordionItemHeading className={question__title}>
        <AccordionItemButton className={question__button}>
          <AccordionItemState>
            {({ expanded }) => {
              return (
                <svg
                  width={16}
                  height={16}
                  className={clsx(icon, !expanded && active)}
                >
                  <use href={`${sprite}#${expanded ? "minus" : "add"}`} />
                </svg>
              );
            }}
          </AccordionItemState>
          {children}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className={answer__text}>{desc}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
