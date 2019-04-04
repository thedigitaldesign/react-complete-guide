import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary' 

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
                <div>
                    <ol>    
                        { this.state.persons.map((person, index) => {
                            return (
                                <ErrorBoundary key={person.id}>
                                    <Person 
                                        id={person.id} 
                                        name={person.name} 
                                        age={person.age} 
                                        changed={(event) => this.nameChangeHandler(event, person.id)} 
                                        click={() => this.deletePersonHandler(index)}>
                                        {person.hobbies}
                                    </Person>
                                </ErrorBoundary>
                            )
                        }) }
                    </ol>
                </div>
            )

            style.backgroundColor = '#f00'
        }

        let classes = []

        if (this.state.persons.length <= 2) {
            classes.push(css.red) // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            classes.push(css.bold) // classes = ['red', 'bold']
        }

        return (
            <div className={css.App}>
                <h1>Hi, I'm a React App! Woo?</h1>

                <p className={classes.join(' ')}>
                    Dynamic classes! woo!
                </p>

                <button 
                    style={style} 
                    onClick={this.togglePersonHandler}>
                        Toggle persons
                </button>
                
                {persons}
            </div>
        );
    }
}

//-- NOTE:  This is called a "Higher Order Component." This is a component wrapping your component
//--        giving your application additional functionality 

