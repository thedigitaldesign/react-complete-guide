import React, { Component } from 'react'

// Packages
import { Route, Switch } from 'react-router-dom'

// Components
import Home from '../components/Home/Home'
import Movies from '../components/Movies/Movies'
import MovieDetails from '../components/Movies/MovieDetails/MovieDetails'
import Actors from '../components/Actors/Actors'

const _routes = () => {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Switch>
                <Route path="/movies" exact component={Movies} />
                <Route path="/actors" exact component={Actors} />
                <Route path="/movie/:id" exact component={MovieDetails} />
            </Switch>
        </>
    )
}

export default _routes

