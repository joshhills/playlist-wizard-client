import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    return (
        <header>
            <h1>
                { props.title }
            </h1>
            <nav>
                <NavLink to="/about">
                    <div>
                    About
                    </div>
                </NavLink>
                <a href="https://ko-fi.com/joshmarcushills" target="_blank" rel="noopener noreferrer">
                    Donate
                </a>
            </nav>
        </header>
    )
}