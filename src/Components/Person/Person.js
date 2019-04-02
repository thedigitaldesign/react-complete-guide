import React from 'react'
import './Person.css'

//-- NOTE:  Argument 'props' could be named anything, but the standard is to use props
//-- NOTE:  Stateless components are called dumb (because they have no internal object) 
//--        or presentational components because they present something or output content
const person = (props) => {
    return (
        <li className="Person">
            <span>I am {props.name}! My human age is {props.age} cycles.... err.... years old!</span>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
            { props.children ? <p>{props.children}</p> : '' }
            {/* <button onClick={props.click}>Edit</button> */}
            <button onClick={props.click}>Remove</button>
        </li>
    )
}

export default person
