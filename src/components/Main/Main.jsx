import SectionWhatIsIt from "../SectionWhatIsIt/SectionWhatIsIt";
import SectionAbout from "../SectionAbout/SectionAbout";
import SectionAsked from "../SectionAsked/SectionAsked";
import SectionCases from "../SectionCases/SectionCases";
import SectionContactForm from "../SectionContactForm/SectionContactForm";
import SectionContactUs from "../SectionContactUs/SectionContactUs";
import SectionElectricProd from "../SectionElectricProd/SectionElectricProd";
import { Element } from "react-scroll";
// import Modal from "../Modal/Modal";
// import MainMenu from "../MainMenu/MainMenu";

export default function Main() {
  return (
    <Element name="main">
      <main style={{ flexGrow: 1 }}>
        {/* <Modal>
        <MainMenu />
      </Modal> */}
        <SectionWhatIsIt />
        <SectionAbout />
        <SectionElectricProd />
        <SectionCases />
        <SectionAsked />
        <SectionContactUs />
        <SectionContactForm />
      </main>
    </Element>
  );
}
