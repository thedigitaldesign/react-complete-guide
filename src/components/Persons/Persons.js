import React, { PureComponent } from 'react'
import Person from './Person/Person'

//-- NOTE:  PureComponent is a normal component that already implements shouldComponentUpdate 
//--        with a complete props check and checks for any change on that component
export default class Persons extends PureComponent {
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return prevState
    // }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log('[Persons.js] shouldComponentUpdate')

    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked) {
    //         return true
    //     }

    //     return false
    // }
    
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
