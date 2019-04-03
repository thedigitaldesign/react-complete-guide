import React, { Component } from 'react';

import Validation from './components/Validation/Validation'
import Char from './components/Char/Char'

import './App.css';

export default class App extends Component {
    constructor() {
        super()

        const content = 'We finished our first sensor sweep of the neutral zone. Could someone survive inside a transporter buffer for 75 years? You enjoyed that. Why don\'t we just give everybody a promotion and call it a night - \'Commander\'?'
        const length = content.length

        this.state = {
            content: content,
            contentLength: length
        }
    }

    contentLengthOutput = (event) => {
        let content = event.target.value
        let length = event.target.value.length

        this.setState({ 
            content: content,
            contentLength: length 
        })
    }

    deleteChar = (charIndex) => {
        const content = [...this.state.content]
        content.splice(charIndex, 1)
        const join = content.join('')

        this.setState({
            content: join,
            contentLength: join.length
        })
    }

    render() {
        let id = 0

        return (
            <div className="App">
                <div className="container">
                    <h1>Assignment 2</h1>

                    <label>
                        <strong>Content</strong>
                        <textarea value={this.state.content} onChange={this.contentLengthOutput} />
                        <Validation length={this.state.contentLength} />
                    </label>

                    <br />

                    <h5>Character list</h5>
                    <ul className="inline-list">
                        { [...this.state.content].map((char, index) => {
                            return (
                                <Char key={id += 1} character={char} click={() => this.deleteChar(index)} />
                            )
                        }) }
                    </ul>
                </div>
            </div>
        )
    }
}

