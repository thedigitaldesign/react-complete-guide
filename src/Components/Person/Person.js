import React from 'react'

//-- NOTE: Argument 'props' could be named anything, but the standard is to use props
//-- NOTE:  Stateless components are called dumb (because they have no internal object) 
//--        or presentational components because they present something or output content
const person = (props) => {
    console.log(props)

    return (
        <tr>
            <td>I am {props.name}! My human age is {props.age} cycles.... err.... years old!</td>
            <td>{props.children ? <p>{props.children}</p> : ''}</td>
            <td><button onClick={props.click}>Update</button></td>
        </tr>
    )
}

export default person