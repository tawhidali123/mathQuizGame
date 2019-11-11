import React, { Component } from 'react'
import AdditionCard from './AdditionCard'
import MultiplicationCard from './MultiplicationCard'
import SubtractionCard from './SubtractionCard'
import Score from './Score'
import Timer from "./Timer"
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';


export default class GameContainer extends Component {

    state = {
        points: 0,
        time: 5
        
    }
    

    correctAnswer = (point) => {
        let newPoint = this.state.points
        let finalPoint = point + newPoint 
        this.setState({
            points: finalPoint
        })
        
        
    }

    isTimerDone = () => {
        
    }

    

    render() {
        
        return (
            <Grid justify="center">
            <Timer time={this.state.time} done={this.isTimerDone}/>
            
                
            <Grid container spacing={6}  justify="center" >
                
                
                <Grid container item md={2}>
                <AdditionCard  correct ={this.correctAnswer}/>
                </Grid>
                <Grid container item md={2}>
                <MultiplicationCard correct ={this.correctAnswer}/>
                </Grid>
                <Grid container item md={2}>
                <SubtractionCard correct = {this.correctAnswer}/>
                </Grid>
                
            </Grid>
            <Score total = {this.state.points}/>
            </Grid>
        )
    }
}
