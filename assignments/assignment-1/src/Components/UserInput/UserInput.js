import React, { Component } from 'react'

export default class UserInput extends Component {
    render() {
        return (
            <div className="user-input-field">
                <label>Username: <input type="text" /></label>
            </div>
        )
    }
}