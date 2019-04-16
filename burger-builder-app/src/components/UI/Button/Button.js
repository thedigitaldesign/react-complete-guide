import React, { } from 'react'

// CSS
import css from './Button.module.scss'

const Button = (props) => (
    <button 
        className={[css.Button, css[props.type]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
)

export default Button
