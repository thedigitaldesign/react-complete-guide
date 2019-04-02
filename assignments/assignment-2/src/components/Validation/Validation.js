import React, { Component } from 'react'
import './Validation.css'

export default class Validation extends Component {
    render() {
        let warning = (
            <span className="pull-right small">Total length: { this.props.length }</span>
        )

        if (this.props.length < 5) {
            warning = (
                <span className="pull-right small warning">
                    <em>Content needs to be 5 characters or longer.</em><br />
                    Total length: { this.props.length }
                </span>
            )
        }

        return (
            <div>
                { warning }
            </div>
        )
    }
}