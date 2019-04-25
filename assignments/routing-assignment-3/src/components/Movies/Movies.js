import React, { Component, Suspense } from 'react'

// Packages
import axios from '../../_api/axios-omdbapi-data'

// Components
import MovieCard from './MovieCard/MovieCard'

export default class Movies extends Component {
    state = {
        IMDb: [
            { id: 'tt2911666' },
            { id: 'tt4425200' },
            { id: 'tt6146586' },
            { id: 'tt0133093' },
            { id: 'tt0086190' },
            { id: 'tt1104001' },
            { id: 'tt0217869' },
            { id: 'tt0093779' }
        ],
        movies: []
    }

    componentDidMount() {
        this.state.IMDb.map((data) => {
            return this.getMovies(data.id)
        })
    }

    getMovies = (id) => {
        axios.get('', { params: { i: id, plot: 'full' } })
            .then(response => {
                this.setState({
                    movies: this.state.movies.concat({
                        Id: response.data.imdbID,
                        Title: response.data.Title,
                        Poster: response.data.Poster
                    })
                })
            })
            .catch(error => {

            })
            .then(() => {
                //console.log(this.state.movies)
            })
    }

    render() {
        let movies = this.state.movies.map(data => {
            return <MovieCard {...this.props} key={data.Id} image={data.Poster} alt={data.Title} imdbId={data.Id} />
        })

        return (
            <>
                <h1>Movies</h1>
                <div className={`row`}>
                    {movies}
                </div>
            </>
        )
    }
}
