import styles from "./Header.module.css";

export default function Header() {
  const { headerButton, headerWrap } = styles;
  return (
    <header>
      <div className={headerWrap}>
        <img src="" alt="Logo" width={269} height={40} />
        <button className={headerButton} type="button"></button>
      </div>
    </header>
  );
}
