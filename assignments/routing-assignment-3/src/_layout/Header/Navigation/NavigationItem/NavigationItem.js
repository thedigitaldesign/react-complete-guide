import React, {  } from 'react'

// Packages
import { NavLink } from 'react-router-dom'

// CSS
import css from './NavigationItem.module.scss'

const NavigationItem = (props) => (
    <li className="nav-item">
        <NavLink
            to={props.link}
            className={`nav-link ${ css.nav_item_link }`}
            exact>
            {props.children}
        </NavLink>
    </li>
)

export default NavigationItem
