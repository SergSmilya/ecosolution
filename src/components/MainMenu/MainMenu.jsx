const nameLinkList = [
  "Main",
  "About",
  "Service",
  "Cases",
  "FAQ",
  "Customers",
  "Contact Us",
];

export default function MainMenu() {
  return (
    <nav>
      <ul>
        {nameLinkList.map((el, i) => (
          <li key={i}>
            <h2 href="">{el}</h2>
          </li>
        ))}
      </ul>
    </nav>
  );
}
