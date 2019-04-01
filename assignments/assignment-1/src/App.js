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
        if (event.current.value.length) {
            const state = this.state

            const blob = {
                id: state.UserOutputs.length + 1, 
                text: event.current.value
            }
    
            const concat = {
                UserOutputs: [
                    ...state.UserOutputs,
                    blob
                ]
            }

            this.setUserOutputState(concat)
    
            event.current.value = ''
        }
    }

    userOutputHandler = (blob) => {
        const state = this.state
        const slice = state.UserOutputs.slice()

        const id = parseInt(blob[0].id)
        const index = parseInt(blob[0].id - 1)
        const updatedText = blob[0].text

        slice[index] = {id: id, text: updatedText}

        let merge = []

        slice.forEach((item) => {
            merge.push(item)
        });

        const obj = {
            UserOutputs: merge
        }

        this.setUserOutputState(obj)
    }

    setUserOutputState = (blob) => {
        this.setState(blob)
    }

    render() {
        const state = this.state
        let key = 0

        return (
            <div className="App">
                <UserInput content={this.userInputHandler} />
                
                <br />

                <ol>
                    {state.UserOutputs.map((output) => {
                        return (
                            <UserOutput key={key += 1} dataId={output.id} text={output.text} click={this.userOutputHandler} />
                        )
                    })}
                </ol>
            </div>
        )
    }
}
