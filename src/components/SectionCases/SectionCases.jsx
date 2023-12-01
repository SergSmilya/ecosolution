import { Element } from "react-scroll";
import SliderComponent from "../SliderComponent/SliderComponent";
import style from "./SectionCases.module.css";

export default function SectionCases() {
  const { cases__section, cases__title } = style;

  return (
    <section className={cases__section}>
      <Element name="cases">
        <h2 className={cases__title}>Successful cases of our company</h2>
        <div>
          <SliderComponent />
        </div>
      </Element>
    </section>
  );
}

// =====================
// import {Element} from 'react-scroll'
// import SliderComponent from "../SliderComponent/SliderComponent";
// import style from "./SectionCases.module.css";

// export default function SectionCases() {
//   const { cases__section, cases__title } = style;

//   return (
//     <section className={cases__section}>
//       <h2 className={cases__title}>Successful cases of our company</h2>

//       <div>
//         <SliderComponent />
//       </div>
//     </section>
//   );
// }
