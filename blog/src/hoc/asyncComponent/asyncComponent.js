/* 
    NOTE: This was used prior to React 16.6. Suspense is the new way to lazy load.
*/

import React, { Component } from 'react'

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({
                        component: cmp.default
                    })
                })
        }

        render() {
            const C = this.state.component

            return C ? <C {...this.props} /> : null
        }
    }
}

export default asyncComponent
