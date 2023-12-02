import SectionWhatIsIt from "../SectionWhatIsIt/SectionWhatIsIt";
import SectionAbout from "../SectionAbout/SectionAbout";
import SectionAsked from "../SectionAsked/SectionAsked";
import SectionCases from "../SectionCases/SectionCases";
import SectionContactUs from "../SectionContactUs/SectionContactUs";
import SectionElectricProd from "../SectionElectricProd/SectionElectricProd";
import { Element } from "react-scroll";

export default function Main() {
  return (
    <Element name="main">
      <main style={{ flexGrow: 1 }}>
        <SectionWhatIsIt />
        <SectionAbout />
        <SectionElectricProd />
        <SectionCases />
        <SectionAsked />
        <SectionContactUs />
      </main>
    </Element>
  );
}
