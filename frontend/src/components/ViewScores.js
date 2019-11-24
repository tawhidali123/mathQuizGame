import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class ViewScores extends Component {

    state={
        scores: [],
        users: [],
        search: []
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

    // onChange = (event) => {
    //     this.setState({
    //         search: event.target.value
    //     })
      
    // }
    keyPress = (event) => {
        
        if (event.key === "Enter"){
            let scores = this.state.scores
           scores = scores.filter((score) => {
            if(score.difficulty_id === 1){
                score.difficulty_id = "Easy"
              } else if(score.difficulty_id === 2){
                score.difficulty_id = "Medium"
              } else if(score.difficulty_id === 3){
                score.difficulty_id = "Hard"
              }
                return score.difficulty_id.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
            })
            this.setState({search: scores})
        }

    }

    // title, searchTerm

    

    render() {
        console.log(this.state.search)
        return (
            <div>
                <Grid>
                <TextField 
                label="SEARCH BY DIFFICULTY" 
                name="search"
                variant="outlined"
                // onChange={this.onChange}
                onKeyPress= {this.keyPress}
                />
                <br></br>
                <Typography color='textPrimary' variant="h2">High Scores</Typography>
                
                    {this.state.search.map(search => {
                    if(search.difficulty_id === 1){
                        search.difficulty_id = "Easy"
                      } else if(search.difficulty_id === 2){
                        search.difficulty_id = "Medium"
                      } else if(search.difficulty_id === 3){
                        search.difficulty_id = "Hard"
                      }
                return <ul> 
                    <Typography variant="h5" color="primary">
                    Difficulty:
                    </Typography>
                    {search.difficulty_id } 
                    <Typography variant="h5" color="primary">
                    Score:
                    </Typography>
                    { search.points }
                    <Typography variant="h5" color="primary">
                    Player:
                    </Typography>
                    {this.state.users.map(user => {
                        if(user.id === search.user_id){
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
