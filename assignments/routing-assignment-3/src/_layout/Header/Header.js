import React, {  } from 'react'

// Components
import Logo from '../../_ui/Logo/Logo'
import Navigation from './Navigation/Navigation'

// CSS
import css from './Header.module.scss'

const Header = (props) => (
    <nav className={`navbar navbar-expand-sm bg-dark navbar-dark mb-4`}>
        <Logo />
        {/* <button className="navbar-toggler" type="button" onClick={props.openMobileNav}>
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <Navigation />
    </nav>
)

export default Header
