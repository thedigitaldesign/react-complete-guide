import React, {  } from 'react'

// CSS
import css from './NavigationItem.module.scss'

const NavigationItem = (props) => (
    <li className="nav-item">
        <a className={`nav-link ${ [css.nav_item_link, props.active ? css.active : null].join(' ') }`} href={props.link}>{props.children}</a>
    </li>
)

export default NavigationItem
