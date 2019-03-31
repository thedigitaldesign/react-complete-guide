import React, { Component } from 'react'

import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

import './App.css'

export default class App extends Component {
    state = {
        UserOutputs: [
            {id: 1, text: 'For an android with no feelings, he sure managed to evoke them in others. Mr. Crusher, ready a collision course with the Borg ship.'},
            {id: 2, text: 'A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you. Well, I\'ll say this for him - he\'s sure of himself. Now we know what they mean by \'advanced\' tactical training.'}
        ]
    }

    userInputHandler = (event) => {
        const joined = this.state.UserOutputs.concat({
            id: this.state.UserOutputs.length + 1, 
            text: event.current.value
        })

        this.setUserOutputState(joined)

        event.current.value = ''
    }

    userOutputHandler = (event) => {
        //const update = this.state.UserOutputs
        //const {UserOutputs} = this.state

    }

    setUserOutputState = (blob) => {
        this.setState({ UserOutputs: blob })
    }

    render() {
        return (
            <div className="App">
                <UserInput content={this.userInputHandler} />
                {this.state.UserOutputs.map((output) => {
                    return (
                        <UserOutput key={output.id} dataKey={output.id} text={output.text} />
                    )
                })}
            </div>
        )
    }
}
