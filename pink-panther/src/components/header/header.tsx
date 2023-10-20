import React from "react";
import './header.css';

import appLogo from '../../assets/pink-panther-logo.png';

function Header() {
    return (
        <header className='header'>
            <img src={appLogo} className='logo' alt='the pink panther logo' />
        </header>
    );

}

export default Header;