'use client';

import React, { useState } from "react";
import TopNav from './TopNav';
import styles from './Header.module.scss'
import SidebarNav from "./SidebarNav";

const Header = (): JSX.Element => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div>
        <header className={styles.header}>
            <a href="/">
                <img src="/assets/ATW_Logo.svg" alt="All Things Wild Logo" className={styles.logo} />
            </a>
            <TopNav isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />  
        </header>
        <SidebarNav isSidebarOpen={isSidebarOpen}/>
        </div>
    )
};

export default Header;