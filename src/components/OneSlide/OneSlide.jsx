import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";

import style from "./OneSlide.module.css";

export default function OneSlide({
  item: { img, location, name, date, type },
}) {
  const {
    main__wrap,
    slide__img,
    second__wrap,
    commonTextButton__wrap,
    commonText__wrap,
    slide__location,
    slide__name,
    desc__wrap,
    slide__type,
    slide__date,
  } = style;

  return (
    <div className={main__wrap}>
      {img && (
        <img className={slide__img} src={img} alt="" width={100} height={100} />
      )}
      <div className={second__wrap}>
        <div className={commonTextButton__wrap}>
          <div className={commonText__wrap}>
            <h2 className={slide__location}>{location}</h2>
            <p className={slide__name}>{name}</p>
          </div>
          <ArrowColorComponent position="315" pad="16" size="60" />
        </div>
        <div className={desc__wrap}>
          <p className={slide__type}>{type}</p>
          <p className={slide__date}>{date}</p>
        </div>
      </div>
    </div>
  );
}
