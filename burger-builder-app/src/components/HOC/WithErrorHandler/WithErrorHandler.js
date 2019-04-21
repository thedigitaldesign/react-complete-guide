import React, { Component } from 'react'

// Components
import Modal from '../../UI/Modal/Modal'

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use((request) => {
                this.errorConfirmedHandler()
                //-- NOTE:  When sending a request, we have to return the request config so the 
                //--        request can continue.
                return request
            })

            this.responseInterceptor = axios.interceptors.response.use(response => response, (error) => {
                this.setState({
                    error: error
                })
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.response.eject(this.responseInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        }

        render () {
            return (
                <>
                    <Modal 
                        show={this.state.error}
                        closeModal={this.errorConfirmedHandler}>
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default WithErrorHandler
