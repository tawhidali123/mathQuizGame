import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class ViewScores extends Component {

    state={
        scores: [],
        users: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/scores`)
        .then(resp => resp.json())
        .then(scores => {
            this.setState({scores: scores})
        })

        fetch(`http://localhost:3000/users`)
        .then(resp => resp.json())
        .then(users => {
            this.setState({users: users})
        })
        
    }


    render() {
        console.log(this.state.users)
        return (
            <div>
                <Grid>
                    {this.state.scores.map(score => {
                    if(score.difficulty_id === 1){
                        score.difficulty_id = "Easy"
                      } else if(score.difficulty_id === 2){
                        score.difficulty_id = "Medium"
                      } else if(score.difficulty_id === 3){
                        score.difficulty_id = "Hard"
                      }
                return <ul> 
                    <Typography>
                    Difficulty:
                    </Typography>
                    {score.difficulty_id } 
                    <Typography>
                    Score:
                    </Typography>
                    { score.points }
                    <Typography>
                    Player:
                    </Typography>
                    {this.state.users.map(user => {
                        if(user.id === score.user_id){
                            return <div>{user.username}</div>
                        } 
                    })}
                    </ul>})}
                </Grid>
            </div>
        );
    }
}

export default ViewScores;
