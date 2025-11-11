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
            <h4>The Pink Panther©</h4>
            <Link to='shop/about'>About</Link>
            <Link to='shop/engagement'>Engagement Rings</Link>
            <Link to='shop/coming-soon'>Wedding Rings</Link>
            <Link to='book-an-appointment'>Book an appointment</Link>
            <Link to='our-stores'>Our stores</Link>
            <div className='pinkpanther-footer-icons'>
              <a
                className='pinkpanther-footer-icon'
                href='https://github.com/ivanaogrizovic'
                target='blank'
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                className='pinkpanther-footer-icon'
                href='https://www.linkedin.com/in/ivana-ogrizovic/'
                target='blank'
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="pinkpanther-footer-blurb">
            <h4>Tech Stack</h4>
            <p className="pinkpanther-footer-p">This website was made with:</p>
            <div className='pinkpanther-footer-techstack'>
              <div><FaReact id='react'/> React</div>
              <span><SiTypescript id='typescript'/> Typescript</span>
              <span><FaSass id='sass'/> SCSS</span>
            </div>
          </div>
          <div className='pinkpanther-footer-project-info'> 
            <h4>About this project</h4>
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