import React, {  } from 'react'

// Components
import Ingredient from './Ingredient/Ingredient'

// CSS
import css from './Burger.module.scss'

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map((key) => {
        return [...Array(props.ingredients[key])].map((_, index) => {
            return <Ingredient key={key + index} type={key} />
        })
    }).reduce((prev, current) => {
        //-- NOTE:  .reduce transforms an array into something else. This will loop through
        //--        the elements and return them to the initial value, in this case []. This
        //--        will flatten the array. Without this we would have, [[], [], [], []]. If
        //--        we did, ingredients.length we would get back 4, but still not have values
        //--        our code needs to show the burger.
        return prev.concat(current)
    }, [])
    
    if (!ingredients.length) {
        ingredients = (
            <p>
                Get crackin on some burger makin!
            </p>
        )
    }

    return (
        <div className={css.Burger}>
            <Ingredient type="bread-top" />
            {ingredients}
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger
