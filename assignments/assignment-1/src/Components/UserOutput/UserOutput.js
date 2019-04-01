import React, { Component } from 'react'
import './UserOutput.css'

export default class UserOutput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserOutputs: [
                {id: '', text: ''}
            ],
            showhide: true
        }
    }

    showhideHandler = () => {
        this.setState({
            showhide: !this.state.showhide
        })

        return this.state.showhide
    }

    textareaHandler = (event) => {
        this.setState({
            UserOutputs: [
                {id: event.target.getAttribute('data-id'), text: event.target.value}
            ]
        })
    }

    updateStateHandler = (props) => {
        this.showhideHandler()
        this.props.click(this.state.UserOutputs)
    }

    render() {
        const style = {
            display: 'block',
            width: '400px',
            height: '200px',
            verticalAlign: 'top'
        }

        return (
            <li className="user-output-field">
                { this.state.showhide 
                    ? <p onClick={this.showhideHandler}>{this.props.text}</p> 
                    : <textarea style={style} onChange={this.textareaHandler} data-id={this.props.dataId} defaultValue={this.props.text} /> }

                { !this.state.showhide 
                    ? <button onClick={this.updateStateHandler}>Update state</button>
                    : null }
            </li>
        )
    }
}