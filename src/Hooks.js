import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person/Person'

//-- NOTE:  Hooks do not merge state like state/setState when updating the state.
//--        Hooks will replace the current state.
const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 1, name: 'Josh', age: 38},
            {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
        ],
        otherState: 'Some other value'
    })

    //-- NOTE:  Hooks can use multiple useState functions. This is the preferred way to manage
    //--        multiple states, but creating their own useState
    //const [otherState, setOtherState] = useState('Some other value')

    console.log(personsState)

    const switchStateHandler = () => {
        // DON'T DO THIS: this.state.persons[0].name = 'Joshua'
        setPersonsState({
            persons: [
                {id: 1, name: 'Joshua', age: 38},
                {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'}
            ]
        })
    }

    return (
        <div className="App">
            <h1>HOOKS! ARRR! Hi, I'm a React App! Woo?</h1>

            <button onClick={switchStateHandler}>Switch name</button>

            {personsState.persons.map((person) => {
                return (
                    <Person key={person.id} name={person.name} age={person.age}>
                        {person.hobbies}
                    </Person>
                )
            })}
        </div>
    );
}

export default app;
