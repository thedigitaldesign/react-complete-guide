import React, { Fragment } from 'react'

// Components
import Header from './Header/Header'

const Layout = (props) => {
    return (
        <Fragment>
            <Header />

            <main className="container">
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
