import React, {  } from 'react'

// Components
import AddRemoveIngredient from './AddRemoveIngredient/AddRemoveIngredient'

// CSS
import css from './Controls.module.scss'

const ingredients = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const Controls = (props) => {
    return (
        <div className={css.builder_controls}>
            <strong className={css.label}>Price: ${props.price.toFixed(2)}</strong>

            {ingredients.map((value, index) => {
                return (
                    <AddRemoveIngredient 
                        key={index} 
                        label={value.label} 
                        added={() => props.addIngredient(value.type)}
                        removed={() => props.removeIngredient(value.type)}
                        disabled={props.disabled[value.type]} />
                )
            })}

            <button 
                className={css.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.purchasing}>Order now</button>
        </div>
    )
}

export default Controls
