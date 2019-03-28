import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person'

//-- NOTE:  Stateful components, smart or container components because they contain state
class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Josh', age: 38},
            {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
        ],
        otherState: 'Some other value'
    }

    switchStateHandler = () => {
        // DON'T DO THIS: this.state.persons[0].name = 'Joshua'
        this.setState({
            persons: [
                {id: 1, name: 'Joshua', age: 38},
                {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
            ]
        })
    }

    render() {
        console.log(this.state)

        return (
            <div className="App">
                <h1>Hi, I'm a React App! Woo?</h1>

                <button onClick={this.switchStateHandler}>Switch name</button>

                {this.state.persons.map((person) => {
                    return (
                        <Person key={person.id} name={person.name} age={person.age} click={this.switchStateHandler}>
                            {person.hobbies}
                        </Person>
                    )
                })}
            </div>
        );
    }
}

export default App;
