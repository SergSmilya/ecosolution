import SectionAbout from "../SectionAbout/SectionAbout";
import SectionAsked from "../SectionAsked/SectionAsked";
import SectionCases from "../SectionCases/SectionCases";
import SectionContactForm from "../SectionContactForm/SectionContactForm";
import SectionContactUs from "../SectionContactUs/SectionContactUs";
import SectionElectricProd from "../SectionElectricProd/SectionElectricProd";
import SectionWhatIsIt from "../SectionWhatIsIt/SectionWhatIsIt";

export default function Main() {
  return (
    <main>
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
