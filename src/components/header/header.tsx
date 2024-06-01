import { Link } from "react-router-dom";
import './header.scss';

import appLogo from '../../assets/pink-panther-logo.webp';

function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={appLogo} className='logo' alt='the pink panther logo' />
            </Link>
        </header>
    );

}

export default Header;