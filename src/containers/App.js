import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

//-- HOC
import WithClass from './hoc/WithClass'
import DIWithClass from './hoc/di-WithClass'
import Aux from '../containers/hoc/Auxiliary'

import css from './App.module.scss';


//-- NOTE:  Stateful components, smart or container components because they contain state

/*
    Component Lifecycle - Creation
        -> Constructor(props)
        -> getDerivedStateFromProps(props, state) 
        -> render()
        -> [Child Components] 
        -> componentDidMount() [HTTP requests]
*/

/*
    Component Lifecycle - Update
        -> getDerivedStateFromProps(props, state) 
        -> shouldComponentUpdate(nextProps, nextState) 
        -> render 
        -> [Child Components] 
        -> getSnapshotBeforeUpdate(prevProps, prevState)
        -> componentDidUpdate() [HTTP requests]
*/
class App extends Component {
    constructor(props) {
        super(props)
        console.log('[App.js] constructor')
    }

    state = {
        persons: [
            {id: 1, name: 'Josh', age: 38},
            {id: 2, name: 'Human', age: Math.floor(Math.random() * 30), hobbies: 'Hobbies: Shooting pewpew'},
            {id: 3, name: 'Ariah', age: 3},
            {id: 4, name: 'Marissa', age: 14},
        ],
        otherState: 'Some other value',
        showPersons: false,
        changeCounter: 0
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', state)
        return state
    }

    //-- NOTE: These three hooks are the most important, and used, hooks when creating an app
    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('[App.js] shouldComponentUpdate')
        return true
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('[App.js] componentDidUpdate', prevState)
    }
    //-- END --------------------------------------------------------------------------------

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

        //-- NOTE:  This is used if you depend on the old state for value changes.
        //--        setState() is a synchronous call and may not always have the latest state.
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
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
        console.log('[App.js] render')

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
            <WithClass classes={css.App}>
                <Cockpit length={this.state.persons.length} style={style} click={this.togglePersonHandler} />
                {persons}
            </WithClass>
        );
    }
}

//-- NOTE:  This is called a "Higher Order Component." This is a component wrapping your component
//--        giving your application additional functionality 
export default DIWithClass(App, css.App)
