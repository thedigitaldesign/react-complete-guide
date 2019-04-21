import React, { Component } from 'react'

// CSS
import css from './Ingredient.module.scss'

export default class Ingredient extends Component {
    render() {
        let ingredient = null

        switch (this.props.type) {
            case 'bread-bottom':
                ingredient = (
                    <div className={css.BreadBottom}></div>
                )
                break;
            case 'bread-top':
                ingredient = (
                    <div className={css.BreadTop}>
                        <div className={css.Seeds1}></div>
                        <div className={css.Seeds2}></div>
                    </div>
                )
                break;
            case 'meat':
                ingredient = (
                    <div className={css.Meat}></div>
                )
                break;
            case 'cheese':
                ingredient = (
                    <div className={css.Cheese}></div>
                )
                break;
            case 'salad':
                ingredient = (
                    <div className={css.Salad}></div>
                )
                break;
            case 'bacon':
                ingredient = (
                    <div className={css.Bacon}></div>
                )
                break;
            default:
                ingredient = (
                    <p>
                        Get crackin on some burger makin!
                    </p>
                )
                break;
        }

        return ingredient
    }
}
