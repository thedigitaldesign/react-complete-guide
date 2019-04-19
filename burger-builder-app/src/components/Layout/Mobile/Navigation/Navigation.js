import React, { } from 'react'

// Components
import Logo from '../../../UI/Logo/Logo'
import HeaderNavigation from '../../Header/Navigation/Navigation'
import Backdrop from '../../../UI/Backdrop/Backdrop'

// CSS
import css from './Navigation.module.scss'

const Navigation = (props) => {
    let attachedClasses = [css.side_navigation, css.close]

    if (props.open) {
        attachedClasses = [css.side_navigation, css.open]
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo />
                <HeaderNavigation />
            </div>
        </>
    )
}

export default Navigation
