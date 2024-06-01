import { Link } from "react-router-dom";

import appLogo from '../../assets/pink-panther-logo.webp';

function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={appLogo} alt='the pink panther logo' />
            </Link>
        </header>
    );

}

export default Header;
