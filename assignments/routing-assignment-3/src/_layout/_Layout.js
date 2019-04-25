import React, { Component } from 'react'

// Components
import Header from './Header/Header'


export default class _Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="container">
                    {this.props.children}
                </main>
            </>
        )
    }
}
