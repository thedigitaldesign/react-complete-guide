import React, { Component, Fragment } from 'react'

// Packages
import axios from '../../api/axios-orders'

// HOC
import WithErrorhandler from '../HOC/WithErrorHandler/WithErrorHandler'

// Components
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'
import Modal from '../UI/Modal/Modal'
import Order from './Order/Order'
import Spinner from '../UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-burger-builder-96106.firebaseio.com/ingredients.json')
            .then((response) => {
                this.setState({
                    ingredients: response.data
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            })
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key]
        }).reduce((prev, curr) => {
            return prev + curr
        }, 0)

        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })

        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]

        if (!oldCount) {
            return
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })

        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        this.setState({
            loading: true
        })

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Bill and Ted',
                address: {
                    street: '1234 Sesame Street',
                    city: 'HBO',
                    state: 'TV Land',
                    zip: '12345',
                    country: 'USA'
                },
                phone: '(555) 123-4567',
                email: 'helloworld@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(
                (response) => {
                    console.log('[BurgerBuilder] response: ', response);

                    if (response) {
                        this.setState({
                            ingredients: {
                                salad: 0,
                                bacon: 0,
                                cheese: 0,
                                meat: 0
                            },
                            totalPrice: 4
                        })
                    }
                }
            )
            .catch(
                (error) => {
                    console.log('[BurgerBuilder] error: ', error);
                }
            )
            .then(
                () => {
                    this.setState({
                        loading: false,
                        purchasing: false
                    })
                }
            )
    }

    render() {
        let disableInfo = null
        let burger = this.state.error ? <p style={{ textAlign: 'center' }}>Burger and ingredients cannot be loaded</p> : <Spinner />
        let order = <Spinner />

        if (this.state.ingredients) {
            disableInfo = {
                ...this.state.ingredients
            }

            for (let key in disableInfo) {
                disableInfo[key] = disableInfo[key] <= 0
            }

            burger = (
                <>
                    <Burger ingredients={this.state.ingredients} />
                    <Controls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        purchasing={this.purchaseHandler} />
                </>
            )
            order = (
                <Order
                    ingredients={this.state.ingredients}
                    continue={this.purchaseContinueHandler}
                    cancel={this.purchaseCancelHandler}
                    price={this.state.totalPrice} />
            )
        }

        if (this.state.loading) {
            order = <Spinner />
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
                    {order}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}

export default WithErrorhandler(BurgerBuilder, axios)
