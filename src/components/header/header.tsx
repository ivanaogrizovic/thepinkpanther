import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import appLogo from "../../assets/pink-panther-logo.webp";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <Link to={ROUTES.HOME} aria-label="Home">
        <img className="pinkpanther-header-image" src={appLogo} alt="" />
      </Link>
    </header>
  );
}
