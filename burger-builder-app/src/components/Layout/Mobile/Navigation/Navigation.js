import React, { } from 'react'

// Components
import Logo from '../../../UI/Logo/Logo'
import HeaderNavigation from '../../Header/Navigation/Navigation'

// CSS
import css from './Navigation.module.scss'

const Navigation = (props) => {
    return (
        <div className={css.side_navigation}>
            <Logo />
            <HeaderNavigation />
        </div>
    )
}

export default Navigation
