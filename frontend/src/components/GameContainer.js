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
        fetch('http://localhost:3000/scores', {
            method: 'POST',
            body: JSON.stringify({
             user_id: this.props.userObj.id,
             points: this.state.points,
             difficulty_id: 1
            }),

            headers: {
              'Content-Type':'application/json',
              'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
    }

    // componentDidMount(){
    //     fetch('http://localhost:3000/difficulties')
    //     .then(resp => resp.json())
    //     .then(difficulty => {
    //         this.setState({time: difficulty.time})
    //     })
    // }

    render() {
        console.log(this.props.userObj)
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
