import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

class UserUpdate extends Component {

    state={
        username: "",
        password: "",
        phrase: "",
        user_id: null,
        // userObject: {},
        // updatedUser: false
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      
    }

    componentDidMount(){
        
        this.setState({
            username: this.props.userObj.username,
            password: this.props.userObj.password,
            phrase: this.props.userObj.phrase,
            user_id: this.props.userObj.id
        })
    }
    
   
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch(`http://localhost:3000/users/${this.state.user_id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
              phrase: this.state.phrase
            }),

            headers: {
              'Content-Type':'application/json',
              'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(user => {
            // this.setState({userObject: user, updatedUser: true})
            this.props.getUserObj(user)
            this.props.history.push('/main')
        })
        
    }
    handleDelete = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/users/${this.state.user_id}`, {
            method: 'DELETE'
        })
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <Grid container spacing={1} justify="center" alignItems="flex-end">
            <Paper>
                <form onSubmit={this.handleSubmit}>
                <Typography>Edit Info</Typography>
                <br></br>
                <TextField 
                label="New Username"
                name="username"
                value={this.state.username}
                
                />
                <br></br>
                <TextField
                id="standard-password-input"
                label="New Password"
                type="password"
                name="password"
                margin="normal"
                onChange={this.onChange}
                value={this.state.password}
                />
                <br></br>
                <TextField
                label="New Catch Phrase"
                name="phrase"
                onChange={this.onChange}
                value={this.state.phrase}
                />
                <br></br>
                <input type="submit"/>
                <button onClick={this.handleDelete}>
                    Delete Account
                    </button>
                </form>
            </Paper>
        </Grid>
            </div>
        );
    }
}

export default UserUpdate;