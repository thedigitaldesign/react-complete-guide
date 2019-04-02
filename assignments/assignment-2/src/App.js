import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    state = {
        content: 'We finished our first sensor sweep of the neutral zone. Could someone survive inside a transporter buffer for 75 years? You enjoyed that. Why don\'t we just give everybody a promotion and call it a night - \'Commander\'?',
        contentLength: 0
    }

    contentLengthOutput = (event) => {
        let contentLength = event.target.value.length
        console.log(contentLength)

        //contentLength = event
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>Assignment 2</h1>

                    <label>
                        <strong>Content</strong>
                        <textarea defaultValue={this.state.content} onLoad={() => this.contentLengthOutput} onChange={this.contentLengthOutput} />
                        <span>{ this.state.contentLength }</span>
                    </label>
                </div>
            </div>
        );
    }
}

