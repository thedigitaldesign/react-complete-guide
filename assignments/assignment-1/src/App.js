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
        const blob = {
            id: this.state.UserOutputs.length + 1, 
            text: event.current.value
        }

        console.log('userInputHandler: blob')
        console.log(blob)

        this.setUserOutputState(this.state.UserOutputs.concat(blob))

        event.current.value = ''
    }

    userOutputHandler = (blob) => {
        const slice = this.state.UserOutputs.slice()

        const id = parseInt(blob[0].id)
        const index = parseInt(blob[0].id - 1)
        const updatedText = blob[0].text

        slice[index] = {id: id, text: updatedText}

        const obj = Object.create(slice)

        this.setUserOutputState(obj)
    }

    setUserOutputState = (blob) => {
        console.log('setUserOutputState: blob')
        console.log(blob)

        this.setState({ 
            UserOutputs: blob
        })
    }

    render() {
        let key = 0

        return (
            <div className="App">
                <p>
                    <em>Bug: If you edit, then add, state is replaced with the add</em>
                </p>
                <UserInput content={this.userInputHandler} />
                {this.state.UserOutputs.map((output) => {
                    return (
                        <UserOutput key={key += 1} dataId={output.id} text={output.text} click={this.userOutputHandler} />
                    )
                })}
            </div>
        )
    }
}
