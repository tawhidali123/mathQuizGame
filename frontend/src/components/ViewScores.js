import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import HighScoreBttn from './HighScoreBttn';
=======
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
>>>>>>> refs/remotes/origin/tawhid

class ViewScores extends Component {

    state={
        scores: [],
<<<<<<< HEAD
        users: []
=======
        users: [],
        search: []
>>>>>>> refs/remotes/origin/tawhid
    }

    componentDidMount(){
        fetch(`http://localhost:3000/scores`)
        .then(resp => resp.json())
        .then(scores => {
<<<<<<< HEAD
            console.log(scores, "scores")
=======
>>>>>>> refs/remotes/origin/tawhid
            this.setState({scores: scores})
        })

        fetch(`http://localhost:3000/users`)
        .then(resp => resp.json())
        .then(users => {
<<<<<<< HEAD
            console.log(users, "users")
=======
>>>>>>> refs/remotes/origin/tawhid
            this.setState({users: users})
        })
        
    }

<<<<<<< HEAD



    handleClickHighest = (passState) => {
        // console.log(passState, "from view score")
        let blahh = [...passState]

        blahh.sort((a, b) => {
            return b.points - a.points
            
        })

        this.setState({
            scores: blahh
        })
    }

    handleClickLowest = (passState) => {
        // console.log(passState, "from view score")
        let blahh = [...passState]

        blahh.sort((a, b) => {
            return a.points - b.points
            
        })

        this.setState({
            scores: blahh
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

                        <HighScoreBttn clickThingy={this.handleClickHighest} clickThingy2={this.handleClickLowest} passState={this.state.scores} />
=======
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
                <Button >
            <Link to="/main">Main Page</Link>
            </Button>
                <Typography color='textPrimary' variant="h3">High Scores</Typography>
                
                    {this.state.search.map(search => {
                    if(search.difficulty_id === 1){
                        search.difficulty_id = "Easy"
                      } else if(search.difficulty_id === 2){
                        search.difficulty_id = "Medium"
                      } else if(search.difficulty_id === 3){
                        search.difficulty_id = "Hard"
                      }
                return <Grid> 
                    <Typography variant="h5" color="textPrimary">
                    Difficulty:
                    </Typography>
                    {search.difficulty_id } 
                    <Typography variant="h5" color="textPrimary">
                    Score:
                    </Typography>
                    { search.points }
                    <Typography variant="h5" color="textPrimary">
                    Player:
                    </Typography>

                    {this.state.users.map(user => {
                        if(user.id === search.user_id){
                            return <div>{user.username}</div>
                        } 
                    })}
                    </Grid>})}
>>>>>>> refs/remotes/origin/tawhid
                </Grid>
            </div>
        );
    }
}

export default ViewScores;
<<<<<<< HEAD



=======
>>>>>>> refs/remotes/origin/tawhid
