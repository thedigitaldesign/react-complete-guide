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

    getUserInput = (event) => {
        console.log(event.current.value)
    }

    render() {
        return (
            <div className="App">
                <UserInput addToState={this.getUserInput} />
                {this.state.UserOutputs.map((output) => {
                    return (
                        <UserOutput key={output.id} text={output.text} />
                    )
                })}
            </div>
        )
    }
}
