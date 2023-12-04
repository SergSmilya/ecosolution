import style from "./AdressComponent.module.css";

export default function AdressComponent({ display = null }) {
  const { adress, adress__link, adress__text } = style;

  return (
    <address className={adress}>
      <a
        className={adress__link}
        href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+7,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+79000/@49.8313523,24.0349592,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6785a9dce5:0x92b4b3ec68e99c14!8m2!3d49.8313523!4d24.0349592!16s%2Fg%2F1wf37ccl?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
      >
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </a>

      <a className={adress__link} href="mailto:office@ecosolution.com">
        office@ecosolution.com
      </a>

      <p className={adress__text} style={{ display: display }}>
        ecosolution &#169; 2023
      </p>
    </address>
  );
}
