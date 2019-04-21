import React, { Component } from 'react';

// Components
import Backdrop from '../Backdrop/Backdrop'

// CSS
import css from './Modal.module.scss'

export default class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('====================================');
        console.log('[Modal] componentDidUpdate');
        console.log('====================================');
    }

    render() {
        const style = {
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }

        return (
            <>
                <div className={css.Modal} style={style}>
                    {this.props.children}
                </div>
                <Backdrop show={this.props.show} clicked={this.props.closeModal} />
            </>
        )
    }
}
