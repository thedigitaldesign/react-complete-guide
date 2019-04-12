import React, { Fragment } from 'react'

const Layout = (props) => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-4">
                <span className="h5 m-0 navbar-brand">
                    <a className="nav-link text-white" href="#">Burger Builder</a>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="container">
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
