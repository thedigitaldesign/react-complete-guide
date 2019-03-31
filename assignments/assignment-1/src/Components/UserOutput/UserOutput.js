import React, { Component } from 'react'

export default class UserOutput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showhide: true
        }

        console.log(this.state)
    }

    showhideHandler = () => {
        console.log(this.state.showhide)
        this.setState({
            showhide: !this.state.showhide
        })
        console.log(this.state.showhide)

        return this.state.showhide
    }

    render() {
        const style = {
            display: 'block',
            width: '400px',
            height: '200px',
            verticalAlign: 'top'
        }

        return (
            <div data-key={this.props.dataKey} className="user-output-field">
                { this.state.showhide 
                    ? <p onClick={this.showhideHandler}>{this.props.text}</p> 
                    : <textarea style={style} onClick={''} value={this.props.text} /> }

                { !this.state.showhide 
                    ? <button onClick={this.showhideHandler}>Update state</button>
                    : null }                        
            </div>
        )
    }
}