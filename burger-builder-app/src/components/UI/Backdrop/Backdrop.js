import React, {  } from 'react';

// CSS
import css from './Backdrop.module.scss'

const Backdrop = (props) => {
    return (
        props.show ? <div className={css.Backdrop} onClick={props.clicked}></div> : null
    )
}

export default Backdrop
