import React, { Component } from 'react'
import Person from './Person/Person'

export default class Persons extends Component {
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return prevState
    // }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('[Persons.js] shouldComponentUpdate')
        return true
    }
    
    //-- NOTE: Save data in state before update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!!' }
    }
    
    //-- NOTE: After getSnapshotBeforeUpdate update the DOM or use the data some other way
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...')

        return (
            <ol>    
                { this.props.persons.map((person, index) => {
                    return (
                        <Person 
                            key={person.id}
                            id={person.id} 
                            name={person.name} 
                            age={person.age} 
                            changed={(event) => this.props.changed(event, person.id)} 
                            click={() => this.props.clicked(index)}>
                            {person.hobbies}
                        </Person>
                    )
                }) }
            </ol>
        )
    }
}
