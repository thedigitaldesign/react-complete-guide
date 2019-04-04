import React, { Component } from 'react'
import Person from './Person/Person'

export default class Persons extends Component {
    render() {
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
