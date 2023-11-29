import style from "./SectionElectricProd.module.css";

export default function SectionElectricProd() {
  const {
    electricProd__section,
    electricProd__title,
    electricProd__countTitle,
    electricProd__count,
  } = style;

  return (
    <section className={electricProd__section}>
      <h2 className={electricProd__title}>
        Electricity we produced for all time
      </h2>
      <h3 className={electricProd__countTitle}>
        <span className={electricProd__count}>1.134.147.814</span>kWh
      </h3>
    </section>
  );
}
