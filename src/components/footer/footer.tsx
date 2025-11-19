import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import './footer.scss';

function Footer() {
    return (
        <footer className="pinkpanther-footer">
          <div className="pinkpanther-footer-links">
            <p className="-microcopy">The Pink Panther©</p>
            <Link to='shop/about'>About</Link>
            <Link to='shop/engagement'>Engagement Rings</Link>
            <Link to='shop/coming-soon'>Wedding Rings</Link>
            <Link to='book-an-appointment'>Book an appointment</Link>
            <div className='pinkpanther-footer-icons'>
              <a
                className='pinkpanther-footer-icon'
                href='https://github.com/ivanaogrizovic'
                target='blank'
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub role="img" aria-label="GitHub logo"/>
              </a>
              <a
                className='pinkpanther-footer-icon'
                href='https://www.linkedin.com/in/ivana-ogrizovic/'
                target='blank'
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin role="img" aria-label="LinkedIn logo"/>
              </a>
            </div>
          </div>
          <div className="pinkpanther-footer-blurb">
            <p className="-microcopy">Tech Stack</p>
            <p className="pinkpanther-footer-p">This website was made with:</p>
            <div className='pinkpanther-footer-techstack'>
              <div><FaReact id='react'role="img" aria-label="React logo"/> React</div>
              <span><SiTypescript id='typescript'role="img" aria-label="TypseScript logo"/> Typescript</span>
              <span><FaSass id='sass' role="img" aria-label="Sass logo"/> SCSS</span>
            </div>
          </div>
          <div className='pinkpanther-footer-project-info'> 
            <p className="-microcopy">About this project</p>
            <p className="pinkpanther-footer-p">Currently undergoing some refactoring, including but not limited to:</p>
            <ul className="pinkpanther-footer-p -list">
              <li>Replacing React Router with NextJS</li>
              <li>Adding more engaging animations</li>
              <li>Standardising often-recurring styles</li>
              <li>Improving choice of images</li>
              <li>Codebase cleanup</li>
            </ul>
            <p className="pinkpanther-footer-p">Thank you for your time.</p>
          </div>
        </footer>
    );
}

export default Footer;