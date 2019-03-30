import React, { Component } from 'react'
import UserInput from '../UserInput/UserInput';

export default class UserOutput extends Component {
    constructor(props) {
        super(props)

        this.show = false;
    }

    showhide = (show) => {
        console.log(this.show)
        this.show = !this.show
        console.log(this.show)

        return this.show
    }

    render() {
        let show = this.showhide

        return (
            //{show ? <p onClick={this.showhide}>{this.props.text}</p> : <UserInput text={this.props.text} />}
            <div>
                {/* {show 
                    ? <p onClick={this.showhide}>{this.props.text}</p> 
                    : <UserInput text={this.props.text} />} */}
                {show 
                    ? <p onClick={this.showhide}>{this.props.text}</p> 
                    : <textarea value={this.props.text} /> }
            </div>
        )
    }
}