import { useEffect, useState } from "react";
import style from "./SectionElectricProd.module.css";

export default function SectionElectricProd() {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [count]);

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
        <span className={electricProd__count}>
          {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
        kWh
      </h3>
    </section>
  );
}
