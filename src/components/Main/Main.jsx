import SectionWhatIsIt from "../SectionWhatIsIt/SectionWhatIsIt";
import SectionAbout from "../SectionAbout/SectionAbout";
import SectionAsked from "../SectionAsked/SectionAsked";
import SectionCases from "../SectionCases/SectionCases";
import SectionContactForm from "../SectionContactForm/SectionContactForm";
import SectionContactUs from "../SectionContactUs/SectionContactUs";
import SectionElectricProd from "../SectionElectricProd/SectionElectricProd";

export default function Main() {
  return (
    <main style={{ flexGrow: 1 }} id="main">
      <SectionWhatIsIt />
      <SectionAbout />
      <SectionElectricProd />
      <SectionCases />
      <SectionAsked />
      <SectionContactUs />
      <SectionContactForm />
    </main>
  );
}
