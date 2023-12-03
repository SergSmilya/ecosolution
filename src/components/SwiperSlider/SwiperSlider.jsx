import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

import img1 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland.jpg";
import img2 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland1.jpg";
import img3 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland2.jpg";
import img4 from "../../assets/imgs/imges for slider/landscape-with-windmills.jpg";
import img5 from "../../assets/imgs/imges for slider/nuclear-power-plant-center-spain.jpg";

register();

export default function SwiperSlider() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(swiper);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="false"
      autoplay-delay="2000"
      centered-slides="true"
    >
      <swiper-slide>
        <img
          //   className={slider__img}
          width={"100%"}
          src={img1}
          alt="beautiful-view-wind-turbines-grass-covered-field-captured-holland"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          //   className={slider__img}
          width={"100%"}
          src={img2}
          alt="beautiful-view-wind-turbines-grass-covered-field-captured-holland"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          //   className={slider__img}
          width={"100%"}
          src={img3}
          alt="beautiful-view-wind-turbines-grass-covered-field-captured-holland"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          //   className={slider__img}
          width={"100%"}
          src={img4}
          alt="landscape-with-windmills"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          //   className={slider__img}
          width={"100%"}
          src={img5}
          alt="nuclear-power-plant-center-spain"
        />
      </swiper-slide>
    </swiper-container>
  );
}
