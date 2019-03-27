import React from 'react'

//-- NOTE: Argument 'props' could be named anything, but the standard is to use props
const person = (props) => {
    return (
        <div>
            <p>I am {props.name}! My human age is {props.age} cycles.... err.... years old!</p>
            {props.children ? <p>{props.children}</p> : ''}
        </div>
    )
}

export default person