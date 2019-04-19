import React, { Component } from 'react'

// Components
import Header from './Header/Header'
import MobileNavigation from './Mobile/Navigation/Navigation'

export default class Layout extends Component {
    state = {
        showMobileNav: false
    }

    mobileNavToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showMobileNav: !prevState.showMobileNav
            }
        })
    }

    render() {
        return (
            <>
                <Header openMobileNav={this.mobileNavToggleHandler} />
                <MobileNavigation 
                    open={this.state.showMobileNav} 
                    closed={this.mobileNavToggleHandler} />
                <main className="container">
                    {this.props.children}
                </main>
            </>
        )
    }
}
