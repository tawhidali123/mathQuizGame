import React, { Component } from 'react'
import AdditionCard from './AdditionCard'
import MultiplicationCard from './MultiplicationCard'
import SubtractionCard from './SubtractionCard'
import Score from './Score'
import Timer from "./Timer"
import Grid from '@material-ui/core/Grid';


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
            <Grid>
                <Timer/>
                
                <AdditionCard  correct ={this.correctAnswer}/>
                <SubtractionCard correct = {this.correctAnswer}/>
                <MultiplicationCard correct ={this.correctAnswer}/>
                
                <Score total = {this.state.points}/>
            </Grid>
        )
    }
}
