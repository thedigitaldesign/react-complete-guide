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
        <div className="navbar-collapse" id="collapsibleNavbar">
            <ul className={`navbar-nav`}>
                { links.map((item, index) => {
                    return <NavigationItem key={index} link={item.link} active={item.active}>{item.name}</NavigationItem>
                }) }
            </ul>
        </div>
    )
}

export default Navigation