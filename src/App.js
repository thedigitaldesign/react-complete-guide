import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person'

//-- NOTE:  Stateful components, smart or container components because they contain state
export default class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Josh', age: 38},
            {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
        ],
        otherState: 'Some other value'
    }

    updateTableHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = 'Joshua'
        this.setState({
            persons: [
                {id: 1, name: newName, age: 38},
                {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
            ]
        })
    }

    nameChangeHandler = (event) => {
        console.log(event.target.value)

        this.setState({
            persons: [
                {id: 1, name: 'Ariah', age: 3},
                {id: 2, name: event.target.value, age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'transparent',
            border: 'solid 1px #333',
            padding: '8px 12px',
            fontSize: '1em',
            cursor: 'pointer'
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App! Woo?</h1>

                <button style={style} onClick={this.updateTableHandler.bind(this, 'Joshua')}>Update table</button>
                
                {this.state.persons.map((person) => {
                    return (
                        //<Person key={person.id} id={person.id} name={person.name} age={person.age} click={this.updateRowHandler.bind(this, person.id)} changed={this.nameChangeHandler}>
                        <Person key={person.id} id={person.id} name={person.name} age={person.age} changed={this.nameChangeHandler}>
                            {person.hobbies}
                        </Person>
                    )
                })}
            </div>
        );
    }
}
