import React, { Component, Fragment } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <div>Toolbar, SideDrawer, and Backdrop</div>
                <main>
                    { this.props.children }
                </main>
            </Fragment>
        )
    }
}
