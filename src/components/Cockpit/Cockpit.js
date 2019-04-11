import React, { useEffect, useRef, useContext } from 'react'
import AuthContext from '../Context/auth-context'

import css from './Cockpit.module.scss'

//-- NOTE: Functional component lifecycle hooks. this is new in React 16
const Cockpit = (props) => {
    const toggleButtonRef = useRef(null)
    const authContext = useContext(AuthContext)

    useEffect(() => {
        //-- Mounted
        //-----------------------------
        //-- NOTE: Runs for every render and update cycle. Combines componentDidMount and componentDidUpdate
        console.log('[Cockpit.js] useEffect')
        
        //-- ... HTTP Requests ...

        const timer = setTimeout(() => {
            console.log('----> Saved data to cloud! <----')
        }, 1000);

        toggleButtonRef.current.click()

        //-- Unmounted
        //-----------------------------
        //-- NOTE: Fired when component gets destroyed
        return () => {
            clearTimeout(timer)
            console.log('[Cockpit.js] cleanup work in useEffect')
        }

    }, [])
    //-- NOTE: [] run it once, [props.persons, ..., ...] when persons is updated

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')

        //-- NOTE: Because we are not passing in a second parameter, this return will get fired every time
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })

    let classes = []

    if (props.length <= 2) {
        classes.push(css.red) // classes = ['red']
    }
    if (props.length <= 1) {
        classes.push(css.bold) // classes = ['red', 'bold']
    }

    return (
        <div className={css.Cockpit}>
            <h1>Hi, I'm a React App! Woo?</h1>

            <p className={classes.join(' ')}>
                Dynamic classes! woo!
            </p>

            <button 
                style={props.style} 
                onClick={props.click}
                ref={toggleButtonRef}>
                    Toggle persons
            </button>
            <button onClick={authContext.login}>
                Log in
            </button>
        </div>
    )
}

//-- NOTE:  It's a good idea to wrap functional components in React.memo if the component
//--        might not need to update
export default React.memo(Cockpit)