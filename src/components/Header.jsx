import React from 'react'
import { ReactComponent as GalaxyLogo } from '../assets/galaxy.svg';

const Header = () => {
    return (
        <header>
            <a href="#" className="logo">
                <GalaxyLogo />
                <span>Galaxy Explorer</span>
            </a>
        </header>
    )
}

export default Header
