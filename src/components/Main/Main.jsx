import SectionWhatIsIt from "../SectionWhatIsIt/SectionWhatIsIt";
import Hero from "../Hero/Hero";
import SectionAbout from "../SectionAbout/SectionAbout";
import SectionAsked from "../SectionAsked/SectionAsked";
import SectionCases from "../SectionCases/SectionCases";
import SectionContactUs from "../SectionContactUs/SectionContactUs";
import SectionElectricProd from "../SectionElectricProd/SectionElectricProd";
import { Element } from "react-scroll";
import SocialMediaComponent from "../SocialMediaComponent/SocialMediaComponent";

export default function Main() {
  return (
    <Element name="main">
      <main style={{ flexGrow: 1 }}>
        {/* <SectionWhatIsIt /> */}
        {/* <Hero /> */}
        <SectionAbout />
        {/* <SectionElectricProd /> */}
        {/* <SectionCases /> */}
        {/* <SectionAsked /> */}
        {/* <SectionContactUs /> */}
      </main>
    </Element>
  );
}
