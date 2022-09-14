import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from './H5.module.css'

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR}>junior</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Header
