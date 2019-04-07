import React, { Component } from 'react'

import css from './Person.module.scss'

//-- NOTE:  Argument 'props' could be named anything, but the standard is to use props
//-- NOTE:  Stateless components are called dumb (because they have no internal object) 
//--        or presentational components because they present something or output content
export default class Person extends Component {
    render() {
        console.log('-> [Person.js] rendering...')

        return (
            <li className={css.Person}>
                <span>
                    I am {this.props.name}! My human age is {this.props.age} cycles.... err.... years old!
                </span>

                <input type="text" onChange={this.props.changed} defaultValue={this.props.name} />

                { this.props.children ? <p>{this.props.children}</p> : '' }

                <button onClick={this.props.click}>Remove</button>
            </li>
        )
    }
}
