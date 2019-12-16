import React, { Component } from 'react'

export default class HighScoreBttn extends Component {
 


    handleTheClickHigh = () => {
        this.props.clickThingy(this.props.passState)
    }

    handleClickLow = () => {
        this.props.clickThingy2(this.props.passState)
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.handleTheClickHigh}>
                    Highest score
                </button>
                <button onClick={this.handleClickLow}>
                    Lowest Score
                </button>
            </div>
        )
    }
}
