import React, {  } from 'react'

import css from './Ingredient.module.scss'

const Ingredient = (props) => {
    let ingredient = null

    switch (props.type) {
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
        case 'Bacon':
            ingredient = (
                <div className={css.Bacon}></div>
            )
            break;
        default: 
            ingredient = (
                <div>
                    Get crackin on some burger makin!
                </div>
            )
            break;
    }

    return ingredient
}

export default Ingredient
