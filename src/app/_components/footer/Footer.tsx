import React from "react";
import styles from './Footer.module.scss'

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className="constrict-content">
                <p><small>App designed and developed by Ashley Smith using React, TypeScript, SCSS and Vercel for deployment. &copy; 2023</small></p>
            </div>
        </footer>
    )
};

export default Footer;