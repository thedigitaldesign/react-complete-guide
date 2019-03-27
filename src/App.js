import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Josh', age: 38},
            {name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App! Woo?</h1>

                <button>Switch name</button>

                {this.state.persons.map((person) => {
                    return (
                        <Person name={person.name} age={person.age}>
                            {person.hobbies}
                        </Person>
                    )
                })}
            </div>
        );
    }
}

export default App;
