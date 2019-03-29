import React, { Component } from 'react'

import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

import './App.css'

class App extends Component {
    state = {
        UserOutputs: [
            {text: 'For an android with no feelings, he sure managed to evoke them in others. Mr. Crusher, ready a collision course with the Borg ship.'},
            {text: 'A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you. Well, I\'ll say this for him - he\'s sure of himself. Now we know what they mean by \'advanced\' tactical training.'}
        ]
    }

    render() {
        return (
            <div className="App">
                <UserInput />
                {this.state.UserOutputs.map((output) => {
                    <UserOutput text={output.text} />
                })}
            </div>
        );
    }
}

export default App;
