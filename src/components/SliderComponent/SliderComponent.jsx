import { useEffect, useState } from "react";
import Slider from "react-slick";
import SliderNextArrow from "../SliderNextArrow/SliderNextArrow";
import SliderPrevArrow from "../SliderPrevArrow/SliderPrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./SliderComponent.module.css";
import { throttle } from "throttle-debounce";

import img1 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland.jpg";
import img2 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland1.jpg";
import img3 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland2.jpg";
import img4 from "../../assets/imgs/imges for slider/landscape-with-windmills.jpg";
import img5 from "../../assets/imgs/imges for slider/nuclear-power-plant-center-spain.jpg";

export default function SliderComponent() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [widthScreen, setWidthScreen] = useState(window.screen.width);

  const { wrap__pos, count__slide, slider__wrap, slider__img } = style;

  useEffect(() => {
    window.addEventListener("resize", throttle(300, isHideButtonOnMobile));

    return () => {
      window.removeEventListener("resize", throttle(300, isHideButtonOnMobile));
    };
  }, []);

  function isHideButtonOnMobile({ target: { window } }) {
    const WIDTH = window.screen.width;

    setWidthScreen(WIDTH);
  }

  const quantitySlide = widthScreen >= 768 ? 2 : 1;

  const settings = {
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: quantitySlide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: (
      <SliderNextArrow
        styles={{ position: "absolute", top: "-78px", right: 0 }}
      />
    ),
    prevArrow: (
      <SliderPrevArrow
        styles={{
          position: "absolute",
          top: "-78px",
          right: "78px",
          zIndex: 3,
        }}
      />
    ),
    afterChange: (current) => setActiveSlide(current + 1),
  };

  return (
    <>
      <h2 className={count__slide}>{`0${activeSlide}/05`}</h2>
      <div className={wrap__pos}>
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
      </div>
    </>
  );
}

// import { useEffect, useState } from "react";
// import Slider from "react-slick";
// import SliderNextArrow from "../SliderNextArrow/SliderNextArrow";
// import SliderPrevArrow from "../SliderPrevArrow/SliderPrevArrow";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import style from "./SliderComponent.module.css";
// import OneSlide from "../OneSlide/OneSlide";
// import cases from "../../data/cases.json";
// import { throttle } from "throttle-debounce";

// import img1 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland.jpg";
// import img2 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland1.jpg";
// import img3 from "../../assets/imgs/imges for slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland2.jpg";
// import img4 from "../../assets/imgs/imges for slider/landscape-with-windmills.jpg";
// import img5 from "../../assets/imgs/imges for slider/nuclear-power-plant-center-spain.jpg";

// export default function SliderComponent() {
//   const [activeSlide, setActiveSlide] = useState(1);
//   const [widthScreen, setWidthScreen] = useState(window.screen.width);

//   const { wrap__pos, count__slide } = style;

//   useEffect(() => {
//     window.addEventListener("resize", throttle(300, isHideButtonOnMobile));

//     return () => {
//       window.removeEventListener("resize", throttle(300, isHideButtonOnMobile));
//     };
//   }, []);

//   function isHideButtonOnMobile({ target: { window } }) {
//     const WIDTH = window.screen.width;

//     setWidthScreen(WIDTH);
//   }

//   const quantitySlide = widthScreen >= 768 ? 2 : 1;

//   const settings = {
//     swipeToSlide: true,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: quantitySlide,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     arrows: true,
//     nextArrow: (
//       <SliderNextArrow
//         styles={{ position: "absolute", top: "-78px", right: 0 }}
//       />
//     ),
//     prevArrow: (
//       <SliderPrevArrow
//         styles={{
//           position: "absolute",
//           top: "-78px",
//           right: "78px",
//           zIndex: 3,
//         }}
//       />
//     ),
//     afterChange: (current) => setActiveSlide(current + 1),
//   };

//   return (
//     <>
//       <h2 className={count__slide}>{`0${activeSlide}/05`}</h2>
//       <div className={wrap__pos}>
//         <Slider {...settings}>
//           {cases.map((item, id) => (
//             <OneSlide item={item} key={id} />
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }
