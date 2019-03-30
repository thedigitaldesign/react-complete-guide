import React, { Component } from 'react'
import './UserInput.css'

export default class UserInput extends Component {
    constructor(props) {
        super(props)

        this.textarea = React.createRef()
    }
    
    render() {
        const style = {
            width: '400px',
            height: '200px',
            verticalAlign: 'top'
        }

        //let textarea = this.textareaUpdate

        return (
            <div className="user-input-field">
                <label>New content: <textarea style={style} ref={this.textarea} /></label>
                <button onClick={this.props.addToState.bind(this, this.textarea)}>Add to state</button>
            </div>
        )
    }
}
