import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./App.module.css";

export default function App() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
