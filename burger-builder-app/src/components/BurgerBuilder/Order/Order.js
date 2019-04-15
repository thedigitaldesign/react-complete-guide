import React, { Fragment } from 'react'

const Order = (props) => {
    const summary = Object.keys(props.ingredients).map((key, index) => {
        return (
            <li key={key + index}>
                <strong style={{ textTransform: 'capitalize' }}>{key}: </strong>
                {props.ingredients[key]}
            </li>
        )
    })

    return(
        <Fragment>
            <h3>Your Order</h3>
            <p>
                A delicious burger with the following ingredients:
            </p>
            <ul>
                {summary}
            </ul>
            <p>
                Continue to checkout?
            </p>
        </Fragment>
    )
}

export default Order
