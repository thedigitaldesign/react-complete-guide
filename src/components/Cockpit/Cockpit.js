import React, { Component } from 'react'

import css from './Cockpit.module.scss'

export default class Cockpit extends Component {
    render() {
        let classes = []

        if (this.props.persons <= 2) {
            classes.push(css.red) // classes = ['red']
        }
        if (this.props.persons <= 1) {
            classes.push(css.bold) // classes = ['red', 'bold']
        }

        return (
            <div className={css.Cockpit}>
                <h1>Hi, I'm a React App! Woo?</h1>

                <p className={classes.join(' ')}>
                    Dynamic classes! woo!
                </p>

                <button 
                    style={this.props.style} 
                    onClick={this.props.click}>
                        Toggle persons
                </button>
            </div>
        )
    }
}