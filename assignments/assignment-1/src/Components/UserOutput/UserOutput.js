import React, { Component } from 'react'

export default class UserOutput extends Component {
    render() {
        return (
            <p>{this.props.text}</p>
        )
    }
}