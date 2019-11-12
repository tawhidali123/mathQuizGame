import React, { Component } from 'react'
import AdditionCard from './AdditionCard'
import MultiplicationCard from './MultiplicationCard'
import SubtractionCard from './SubtractionCard'
import Score from './Score'
import Timer from "./Timer"
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

let interval;
export default class GameContainer extends Component {

    state = {
        points: 0,
        time: 60,
        difficulty_id: null
        
        
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
             difficulty_id: this.state.difficulty_id
            }),

            headers: {
              'Content-Type':'application/json',
              'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
    }

    handleDifficulty = (event) => {
    //   event.preventDefault()
        this.props.difficultyObj.map(difficulty => {
        if(event.target.name === difficulty.level){
            console.log(difficulty.time)
            this.setState({time: difficulty.time, difficulty_id: difficulty.id})
         
        }})}

    
        countDown = () => {
            this.setState({time: this.state.time-1})
        }

        startTimer = () => {
            interval =  setInterval(() => {
                this.countDown();
                console.log(this.state.time);
              }, 1000);
            }

    render() {
            if(this.state.time === 0)  {
            this.props.done()
            clearInterval(interval)
            return <Redirect to='/main' />

            
        } 
        return (
            <Grid justify="center">
              
                    
                    
                <button name="easy" onClick={this.handleDifficulty}>
                    Easy
                </button>
                <button name="medium" onClick={this.handleDifficulty}>
                    Medium
                </button>
                <button name="hard" onClick={this.handleDifficulty}>
                    Hard
                </button>
                    
             
            <Timer time={this.state.time} done={this.isTimerDone} startTimer={this.startTimer}/>
            
                
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
