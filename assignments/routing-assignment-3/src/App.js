import React, { Component } from 'react'

// Global
import AppRoutes from './_routes/_routes'

// Packages
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Layout from './_layout/_Layout'
import MovieApp from './components/MovieApp/MovieApp'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <AppRoutes />
                </Layout>
            </BrowserRouter>
        )
    }
}
