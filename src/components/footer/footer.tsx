import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="pinkpanther-footer">
      <div className="pinkpanther-footer-links">
        <p className="-microcopy">The Pink Panther©</p>
        <Link to={ROUTES.ABOUT}>About</Link>
        <Link to={ROUTES.SHOP.ENGAGEMENT}>Engagement Rings</Link>
        <Link to={ROUTES.SHOP.COMING_SOON}>Wedding Rings</Link>
        <Link to={ROUTES.BOOK}>Book an appointment</Link>
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
      <div className="pinkpanther-footer-blurb">
        <p className="-microcopy">Tech Stack</p>
        <p className="pinkpanther-footer-p">This website was made with:</p>
        <div className="pinkpanther-footer-techstack">
          <span>
            <FaReact id="react" /> React
          </span>
          <span>
            <SiTypescript id="typescript" /> Typescript
          </span>
          <span>
            <FaSass id="sass" /> SCSS
          </span>
        </div>
      </div>
      <div className="pinkpanther-footer-project-info">
        <p className="-microcopy">About this project</p>
        <p className="pinkpanther-footer-p">
          Currently undergoing some refactoring, including but not limited to:
        </p>
        <ul className="pinkpanther-footer-p -list">
          <li>
            <p>Adding tests, using Jest (currently in progress)</p>
          </li>
          <li>
            <p>Cart functionality</p>
          </li>
          <li>
            <p>Improving choice of images</p>
          </li>
          <li>
            <p>Mock backend with json-server</p>
          </li>
        </ul>
        <p className="pinkpanther-footer-p">Thank you for your time.</p>
      </div>
    </footer>
  );
}
