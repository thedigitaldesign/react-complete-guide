import React, { Component } from 'react'
import './UserInput.css'

export default class UserInput extends Component {
    constructor(props) {
        super(props)

        this.textarea = React.createRef()
    }
    
    render() {
        const style = {
            display: 'block',
            width: '400px',
            height: '200px',
            verticalAlign: 'top'
        }

        return (
            <div className="user-input-field">
                <label>
                    <strong>New content</strong>
                    <textarea style={style} value={this.props.text} ref={this.textarea} />
                </label>
                <button onClick={this.props.content.bind(this, this.textarea)}>{!this.props.text ? 'Add to state' : 'Update state'}</button>
            </div>
        )
    }
}
