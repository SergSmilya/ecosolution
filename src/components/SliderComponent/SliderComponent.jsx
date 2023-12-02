import { useState } from "react";
import Slider from "react-slick";
import SliderNextArrow from "../SliderNextArrow/SliderNextArrow";
import SliderPrevArrow from "../SliderPrevArrow/SliderPrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./SliderComponent.module.css";

import img1 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland.jpg";
import img2 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland1.jpg";
import img3 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland2.jpg";
import img4 from "../../assets/imgs/imges for slider/landscape-with-windmills.jpg";
import img5 from "../../assets/imgs/imges for slider/nuclear-power-plant-center-spain.jpg";

export default function SliderComponent() {
  const [activeSlide, setActiveSlide] = useState(1);

  const { slider__wrap, slider__img } = style;

  const settings = {
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    afterChange: (current) => setActiveSlide(current + 1),
  };

  return (
    <>
      <h2>{`0${activeSlide}/05`}</h2>
      <Slider {...settings}>
        <div className={slider__wrap}>
          <img
            className={slider__img}
            width={"100%"}
            src={img1}
            alt="beautiful-view-wind-turbines-grass-covered-field-captured-holland"
          />
        </div>
        <div className={slider__wrap}>
          <img
            className={slider__img}
            width={"100%"}
            src={img2}
            alt="beautiful-view-wind-turbines-grass-covered-field-captured-holland"
          />
        </div>
        <div className={slider__wrap}>
          <img
            className={slider__img}
            width={"100%"}
            src={img3}
            alt="beautiful-view-wind-turbines-grass-covered-field-captured-holland"
          />
        </div>
        <div className={slider__wrap}>
          <img
            className={slider__img}
            width={"100%"}
            src={img4}
            alt="landscape-with-windmills"
          />
        </div>
        <div className={slider__wrap}>
          <img
            className={slider__img}
            width={"100%"}
            src={img5}
            alt="nuclear-power-plant-center-spain"
          />
        </div>
      </Slider>
    </>
  );
}
