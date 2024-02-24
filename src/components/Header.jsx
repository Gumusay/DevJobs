import React from 'react'
import Switch from "../darkMod/Switch.jsx"
import SunIcon from '/img/sun.png'
import MoonIcon from '/img/moon.png'
import { Link } from 'react-router-dom'
export default function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header-content">
                        <h1><a href="/">devjobs</a></h1>
                    <div className="sun-moon">
                        <img src={SunIcon} alt="Sun Icon" />
                        <Switch />
                        <img src={MoonIcon} alt="Moon Icon" />
                    </div>
                    
                </div>
            </div>
        </header>
    )
}