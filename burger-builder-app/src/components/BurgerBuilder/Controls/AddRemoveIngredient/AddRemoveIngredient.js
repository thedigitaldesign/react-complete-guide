import React, {  } from 'react'

// CSS
import css from './AddRemoveIngredient.module.scss'

const AddRemoveIngredient = (props) => {
    return (
        <div className={css.add_remove_ingredient}>
            <div className={css.label}>{props.label}</div>
            <button className={css.less} onClick={props.removed} disabled={props.disabled}>- Less</button>
            <button className={css.more} onClick={props.added}>+ More</button>
        </div>
    )
}

export default AddRemoveIngredient
