import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from './H5.module.css'

function Header() {


    const calculateClassForNavLink = ({isActive}: {isActive: boolean}) => {
        return isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
    };

    return (
        <div className={styles.header}>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <NavLink
                        className={calculateClassForNavLink}
                        to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        className={calculateClassForNavLink}
                        to={PATH.JUNIOR}>junior</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        className={calculateClassForNavLink}
                        to={PATH.JUNIOR_PLUS}>junior+</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Header
