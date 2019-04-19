import React, { Component } from 'react'

// Components
import Button from '../../UI/Button/Button'

export default class Order extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('====================================');
        console.log('[Order] componentDidUpdate');
        console.log('====================================');
    }

    render() {
        const summary = Object.keys(this.props.ingredients).map((key, index) => {
            return (
                <li key={key + index}>
                    <strong style={{ textTransform: 'capitalize' }}>{key}: </strong>
                    {this.props.ingredients[key]}
                </li>
            )
        })
    
        const style = {
            borderTop: 'solid 1px #ccc'
        }

        return(
            <>
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
                    <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
                </p>
                <div style={style}>
                    <Button type="Danger" clicked={this.props.cancel}>Cancel</Button>
                    <Button type="Success" clicked={this.props.continue}>Continue</Button>
                </div>
            </>
        )
    }    
}
