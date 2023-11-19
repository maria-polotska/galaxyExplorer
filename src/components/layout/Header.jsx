import React from 'react'
import { ReactComponent as GalaxyLogo } from 'assets/galaxy.svg';
import styles from 'components/layout/Header.module.css';

const Header = () => {
    return (
        <header>
            <a href="/#" className={styles.logo}>
                <GalaxyLogo />
                <span>Galaxy Explorer</span>
            </a>
        </header>
    )
}

export default Header
