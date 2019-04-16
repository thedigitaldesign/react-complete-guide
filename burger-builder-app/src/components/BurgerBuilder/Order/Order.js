import React, { Fragment } from 'react'

// Components
import Button from '../../UI/Button/Button'

const Order = (props) => {
    const summary = Object.keys(props.ingredients).map((key, index) => {
        return (
            <li key={key + index}>
                <strong style={{ textTransform: 'capitalize' }}>{key}: </strong>
                {props.ingredients[key]}
            </li>
        )
    })

    const style = {
        borderTop: 'solid 1px #ccc'
    }

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
            <p>
                <strong>Total Price: ${props.price.toFixed(2)}</strong>
            </p>
            <div style={style}>
                <Button type="Danger" clicked={props.cancel}>Cancel</Button>
                <Button type="Success" clicked={props.continue}>Continue</Button>
            </div>
        </Fragment>
    )
}

export default Order
