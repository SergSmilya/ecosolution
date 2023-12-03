import style from "./FotoCadrItem.module.css";

export default function FotoCadrItem({ children, path, alt, desc }) {
  const { foto, title, sub__title } = style;

  return (
    <div>
      <img className={foto} src={path} alt={alt} />
      <h2 className={title}>{children}</h2>
      <p className={sub__title}>{desc}</p>
    </div>
  );
}
