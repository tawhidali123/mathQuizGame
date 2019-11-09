import React, { Component } from 'react'
import AdditionCard from './AdditionCard'
import Score from './Score'
import Timer from "./Timer"

export default class GameContainer extends Component {

    state = {
        points: 0,
        
    }
    

    correctAnswer = (point) => {
        let newPoint = this.state.points
        let finalPoint = point + newPoint 
        this.setState({
            points: finalPoint
        })
        
    }

    render() {
        
        return (
            <div>
                <Timer/>
                <AdditionCard correct ={this.correctAnswer}/>
                <Score total = {this.state.points}/>
            </div>
        )
    }
}
