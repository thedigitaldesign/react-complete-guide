import React, { Component } from 'react'

// Packages
import axios from '../../../_api/axios-omdbapi-data'

export default class MovieDetails extends Component {
    state = {
        movieDetails: {}
    }

    componentDidMount() {
        axios.get('', { params: { i: this.props.match.params.id, plot: 'full' } })
            .then(response => {
                console.log(response)
                this.setState({
                    movieDetails: response.data
                })
            })
            .catch(error => {

            })
    }

    render() {
        const details = this.state.movieDetails;

        return (
            <article className={`row`}>
                <div className={`col-sm-4`}>
                    <img src={details.Poster} alt={details.Title} />
                    <ul className={`list-unstyled mt-2`}>
                        <li>
                            <label><strong>Actors:</strong> {details.Actors}</label>
                        </li>
                        <li>
                            <label><strong>Director:</strong> {details.Director}</label>
                        </li>
                        <li>
                            <label><strong>Awards:</strong> {details.Awards}</label>
                        </li>
                        <li>
                            <label><strong>Rated:</strong> {details.Rated}</label>
                        </li>
                        <li>
                            <label><strong>Runtime:</strong> {details.Runtime}</label>
                        </li>
                    </ul>
                </div>

                <div className={`col-sm-5`}>
                    <h1>{details.Title}</h1>
                    <p>
                        {details.Plot}
                    </p>
                </div>

                <div className={`col-sm-3`}>
                    <ul className={`list-unstyled`}>
                        <li>
                            <label><strong>Genre:</strong> {details.Genre}</label>
                        </li>
                        <li>
                            <label><strong>Metascore:</strong> {details.Metascore}</label>
                        </li>
                        <li>
                            <label><strong>Released:</strong> {details.Released}</label>
                        </li>
                    </ul>
                </div>
            </article>
        )
    }
}

