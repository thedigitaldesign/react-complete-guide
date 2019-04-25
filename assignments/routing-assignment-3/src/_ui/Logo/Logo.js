import React, {  } from 'react'

// Packages
import { Link } from 'react-router-dom'

// Assets
import MovieLogo from '../../assets/images/movie-logo-white.png'

// CSS
import css from './Logo.module.scss'

const Logo = (props) => (
    <span className={`h5 m-0 navbar-brand ${css.logo}`}>
        <Link className={`nav-link text-white`} to="/">
            <img src={MovieLogo} alt="Burger Builder" />
        </Link>
    </span>
)

export default Logo