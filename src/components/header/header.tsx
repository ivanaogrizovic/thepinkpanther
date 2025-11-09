import { Link } from "react-router-dom";
import appLogo from '../../assets/pink-panther-logo.webp';
import "./header.scss";

function Header() {
    return (
        <header>
            <Link to='/' aria-label="Home">
                <img className="pinkpanther-header-image" src={appLogo} alt="The Pink Panther" />
            </Link>
        </header>
    );

}

export default Header;
