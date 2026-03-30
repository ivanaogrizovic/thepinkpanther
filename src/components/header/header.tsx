import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes.config";
import appLogo from "../../assets/pink-panther-logo.webp";
import "./header.scss";

export default function Header() {
  return (
    <header role="banner">
      <Link to={ROUTES.HOME} aria-label="Home">
        <img
          className="pinkpanther-header-image"
          src={appLogo}
          alt="The Pink Panther"
        />
      </Link>
    </header>
  );
}
