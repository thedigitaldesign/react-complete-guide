import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

import css from './App.module.scss';

//-- NOTE:  Stateful components, smart or container components because they contain state
export default class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Josh', age: 38},
            {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'},
            {id: 3, name: 'Ariah', age: 3},
            {id: 4, name: 'Marissa', age: 14},
        ],
        otherState: 'Some other value',
        showPersons: false
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id
        })

        const person = {
            ...this.state.persons[personIndex]
        }

        // Alternative
        // const person = Object.assign({}, this.state.persons[personIndex])

        person.name = event.target.value

        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({
            persons: persons
        })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice()
        const persons = [...this.state.persons] // More modern approach, ES6+
        persons.splice(personIndex, 1)
        
        this.setState({ persons: persons })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({ showPersons: !doesShow })
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: '#fff',
            border: 'solid 1px #333',
            padding: '8px 12px',
            fontSize: '1em',
            cursor: 'pointer'
        }

        let persons = null

        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons} changed={this.nameChangeHandler} clicked={this.deletePersonHandler} />
            )

            style.backgroundColor = '#f00'
        }

        return (
            <div className={css.App}>
                <Cockpit persons={this.state.persons.length} style={style} click={this.togglePersonHandler} />
                {persons}
            </div>
        );
    }
}

//-- NOTE:  This is called a "Higher Order Component." This is a component wrapping your component
//--        giving your application additional functionality 

