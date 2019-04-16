import React, {  } from 'react'

// Components
import NavigationItem from './NavigationItem/NavigationItem'

const Navigation = (props) => {
    const links = [
        { 
            name: 'Burger Builder', 
            link: '/', 
            active: true 
        }, 
        { 
            name: 'Checkout', 
            link: '/checkout' 
        }
    ]

    return (
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                { links.map((item) => {
                    return <NavigationItem link={item.link} active={item.active}>{item.name}</NavigationItem>
                }) }
            </ul>
        </div>
    )
}

export default Navigation
