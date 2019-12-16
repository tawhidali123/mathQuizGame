import React, { Component } from 'react'
import AdditionCard from './AdditionCard'
import MultiplicationCard from './MultiplicationCard'
import SubtractionCard from './SubtractionCard'
import Score from './Score'
import Timer from "./Timer"
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import {Animated} from "react-animated-css"
import Button from '@material-ui/core/Button';

let interval;
export default class GameContainer extends Component {

    state = {
        points: 0,
<<<<<<< HEAD
        time: 60
=======
        time: 60,
        difficulty_id: null,
        pointArr: [],
        ongoing: false
>>>>>>> refs/remotes/origin/tawhid
        
    }
    

    correctAnswer = (point) => {
        let newPoint = this.state.points
        let finalPoint = point + newPoint 
        this.setState({
            points: finalPoint,
            pointArr: [finalPoint]
        })
        
        
    }

    isTimerDone = () => {
        fetch('http://localhost:3000/scores', {
            method: 'POST',
            body: JSON.stringify({
             user_id: this.props.userObj.id,
             points: this.state.points,
<<<<<<< HEAD
             difficulty_id: 1
=======
             difficulty_id: this.state.difficulty_id
>>>>>>> refs/remotes/origin/tawhid
            }),

            headers: {
              'Content-Type':'application/json',
              'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
<<<<<<< HEAD
=======
        .then(this.setState({ongoing: false}))
>>>>>>> refs/remotes/origin/tawhid
    }

    handleDifficulty = (event) => {
      event.preventDefault()
      console.log(event.target.name)
        this.props.difficultyObj.map(difficulty => {
        if(event.target.name == difficulty.level){
            // console.log(difficulty.time)
            this.setState({time: difficulty.time, difficulty_id: difficulty.id})
         
        }})
    }


    
        countDown = () => {
            this.setState({time: this.state.time-1})
        }

        startTimer = () => {
            interval =  setInterval(() => {
                this.countDown();
                console.log(this.state.time);
              }, 1000);
              this.setState({ongoing: true})
            }



        handleReverse = () => {
           this.props.getDifficultyObj()
           
            
        }



    render() {
<<<<<<< HEAD
        console.log(this.props.userObj)
        return (
            <Grid justify="center">
            <Timer time={this.state.time} done={this.isTimerDone}/>
=======
        console.log(this.props.difficultyObj)

            if(this.state.time === 0)  {
                console.log(this.state.points)
            this.isTimerDone()
            clearInterval(interval)
            return <Redirect to='/main' />

>>>>>>> refs/remotes/origin/tawhid
            
        } 

        return (
            <Grid id="henrykim" justify="center">
              
               {this.props.difficultyObj.map(difficulty => {
                   return <button name={difficulty.level} onClick={this.handleDifficulty}>{difficulty.level}</button>
               })}     

                <button onClick={this.handleReverse}> Reverse</button>
                
                
                
                
                
                {/* <button name="easy" onClick={this.handleDifficulty}>
                    Easy
                </button>
                <button name="medium" onClick={this.handleDifficulty}>
                    Medium
                </button>
                <button name="hard" onClick={this.handleDifficulty}>
                    Hard
                </button>
                     */}
                    <h1>
             <Button onClick={this.startTimer} >Start</Button>
             <br></br>
             
            Timer: {this.state.time}
            </h1>
                {this.state.ongoing ? 
               
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
                
            </Grid >
                :
                <h2 className="gamecolor">Press Start</h2> 

                }
                <Score total = {this.state.points}/>
            
            </Grid>
        
        )
    }
}
