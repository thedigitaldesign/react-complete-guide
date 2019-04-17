import React, {  } from 'react'

const NavigationItem = (props) => (
    <li className="">
        <a className={`nav-link ${ props.active ? 'active' : null }`} href={props.link}>{props.children}</a>
    </li>
)

export default NavigationItem
