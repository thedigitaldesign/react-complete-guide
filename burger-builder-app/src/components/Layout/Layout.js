import React, { Fragment } from 'react'

// Components
import Header from './Header/Header'
import MobileNavigation from './Mobile/Navigation/Navigation'

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <MobileNavigation />
            <main className="container">
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
