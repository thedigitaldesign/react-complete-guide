import React, { Fragment } from 'react';

// Components
import Backdrop from '../Backdrop/Backdrop'

// CSS
import css from './Modal.module.scss'

const Modal = (props) => {
    const style = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }

    return (
        <Fragment>
            <div className={css.Modal} style={style}>
                {props.children}
            </div>
            <Backdrop show={props.show} clicked={props.closeModal} />
        </Fragment>
    )
}

export default Modal
