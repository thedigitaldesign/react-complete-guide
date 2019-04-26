import React, { Component, Fragment } from 'react'
import AuthContext from '../../Context/auth-context'

import PropTypes from 'prop-types'

//-- HOC
import Aux from '../../../containers/hoc/Auxiliary'
import DIWithClass from '../../../containers/hoc/di-WithClass'

import css from './Person.module.scss'

//-- NOTE:  Argument 'props' could be named anything, but the standard is to use props
//-- NOTE:  Stateless components are called dumb (because they have no internal object) 
//--        or presentational components because they present something or output content
class Person extends Component {
    constructor(props) {
        super(props)

        this.input_element_ref = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        //this.input_element.focus()
        this.input_element_ref.current.focus()

        console.log(this.context.authenticated)
        //console.log(contextType)
    }

    render() {
        console.log('-> [Person.js] rendering...')

        //-- NOTE:  Aux is just being used as an example, the <li> was a fine containing element
        //-- NOTE:  As of 16.2 React has a built in component called React.Fragment that does the same thing
        //-- NOTE:  ref={(var_name) => { this.class_property = var_name }}
        return (
            <Fragment>
                <>
                    <li className={css.Person}>
                        { this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }

                        <span>
                            I am {this.props.name}! My human age is {this.props.age} cycles.... err.... years old!
                        </span>

                        <input 
                            //ref={(input_name) => { this.input_element = input_name }}
                            ref={this.input_element_ref}
                            type="text" 
                            onChange={this.props.changed} 
                            defaultValue={this.props.name} />

                        { this.props.children ? <p>{this.props.children}</p> : '' }

                        <button onClick={this.props.click}>Remove</button>
                    </li>
                </>
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default DIWithClass(Person, css.Person)
