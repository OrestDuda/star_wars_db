import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className={"nav"}>
      <Link to="/">
        <span className={"title"}>StarWars DB</span>
      </Link>

      <Link to="/people">
        <span className={"nav-link"}>People</span>
      </Link>

      <Link to="/planets">
        <span className={"nav-link"}>Planets</span>
      </Link>

      <Link to="starships">
        <span className={"nav-link"}>Starships</span>
      </Link>
    </nav>
  );
}
export default Header;
