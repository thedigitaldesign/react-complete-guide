import React, { Component } from 'react'
import './Char.css'

export default class Char extends Component {
    render() {
        let element = (
            <li className="char-box">
                {this.props.character}
            </li>
        )

        if (!this.props.character) {
            element = (
                <li>
                    No characters
                </li>
            )
        }

        return (
            <div>
                { element }
            </div>
        )
    }
}