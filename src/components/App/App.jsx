import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./App.module.css";

export default function App() {
  const { app__wrapper, container } = styles;
  return (
    <div className={app__wrapper}>
      <div className={container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
