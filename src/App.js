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

    updateTableHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = 'Joshua'
        this.setState({
            persons: [
                {id: 1, name: newName, age: 38},
                {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
            ]
        })
    }

    updateRowHandler = (id) => {
        const personBlob = {
            persons: [
                {id: 1, name: 'Ariah', age: 3},
                {id: 2, name: '[5421] Robot V6', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
            ]
        }
    }

    render() {
        //console.log(this.state)

        return (
            <div className="App">
                <h1>Hi, I'm a React App! Woo?</h1>

                <button onClick={this.updateTableHandler.bind(this, 'Joshua')}>Update table</button>
                
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Message</td>
                            <td>Update</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map((person) => {
                            return (
                                <Person key={person.id} id={person.id} name={person.name} age={person.age} click={this.updateRowHandler.bind(this, person.id)}>
                                    {person.hobbies}
                                </Person>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
