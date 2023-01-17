import { Link } from "react-router-dom";
import "./styleMenu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>planer weselny</h1>
      <Link to="/stronaGlowna">Strona główna</Link>
      <Link to="/planZadan">Plan zadań</Link>
      <Link to="/budzet">Budżet</Link>
      <Link to="/goscie">Goście</Link>
      <Link to="/">Wyloguj</Link>
    </div>
  );
};

export default Menu;
