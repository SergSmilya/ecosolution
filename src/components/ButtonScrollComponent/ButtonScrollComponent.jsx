import { scroller } from "react-scroll";
import style from "./ButtonScrollComponent.module.css";

export default function ButtonScrollComponent({
  children = "Get in touch",
  id = "contactUs",
  offset = -10,
}) {
  function scrollToElement() {
    scroller.scrollTo("contacts", {
      duration: 1500,
      delay: 100,
      smooth: "liner",
      offset: offset,
    });
  }

  return (
    <button className={style.button__get} onClick={scrollToElement}>
      {children}
    </button>
  );
}

// =================
// import { Link } from "react-scroll";
// import style from "./ButtonScrollComponent.module.css";

// export default function ButtonScrollComponent({
//   children = "Get in touch",
//   id = "contactUs",
//   offset = 30,
// }) {
//   return (
//     <Link
//       className={style.button__get}
//       activeClass="active"
//       to={id}
//       spy={true}
//       smooth={true}
//       offset={offset}
//       duration={500}
//     >
//       {children}
//     </Link>
//   );
// }
