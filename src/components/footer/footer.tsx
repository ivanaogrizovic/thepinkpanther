import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="pinkpanther-footer" data-testid="footer-section">
      <h5>The Pink Panther</h5>
      <div className="pinkpanther-footer-links">
        <Link to={ROUTES.HOME} className="microcopy">
          Home
        </Link>
        <Link to={ROUTES.ABOUT} className="microcopy">
          About
        </Link>
        <Link to={ROUTES.SHOP.ENGAGEMENT} className="microcopy">
          Engagement Rings
        </Link>
        <Link to={ROUTES.BOOK} className="microcopy">
          Book an appointment
        </Link>
      </div>
      <hr />
      <div className="pinkpanther-footer-end">
        <p>The Pink Panther © All right reserved</p>
        <div className="pinkpanther-footer-icons">
          <a
            className="pinkpanther-footer-icon"
            href="https://github.com/ivanaogrizovic"
            target="blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            className="pinkpanther-footer-icon"
            href="https://www.linkedin.com/in/ivana-ogrizovic/"
            target="blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
