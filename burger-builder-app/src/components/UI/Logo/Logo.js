import React, {  } from 'react'

// Assets
import BBLogo from '../../../assets/images/burger-logo.png'

// CSS
import css from './Logo.module.scss'

const Logo = (props) => (
    <span className={`h5 m-0 navbar-brand ${css.logo}`}>
        <a className={`nav-link text-white`} href="/">
            <img src={BBLogo} alt="Burger Builder" />
        </a>
    </span>
)

export default Logo
