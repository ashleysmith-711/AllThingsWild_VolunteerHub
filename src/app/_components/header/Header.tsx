import React from "react";
import TopNav from './TopNav';
import styles from './Header.module.scss'

const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <a href="/">
                <img src="/assets/ATW_Logo.svg" alt="All Things Wild Logo" className={styles.logo} />
            </a>
            <TopNav />
            {/* TODO: Mobile Nav */}
        </header>
    )
};

export default Header;