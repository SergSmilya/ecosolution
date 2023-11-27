import Header from "../Header/Header";
import styles from "./App.module.css";

export default function App() {
  const { container } = styles;
  return (
    <div className={container}>
      <Header />
    </div>
  );
}
