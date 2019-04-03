import React, { Component } from 'react'
import './Char.css'

export default class Char extends Component {
    render() {
        return (
            <li className="char-box" onClick={this.props.click}>
                {this.props.character}
            </li>
        )
    }
}