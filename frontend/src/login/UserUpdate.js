import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

class UserUpdate extends Component {

    state={
        username: "stuff",
        password: "",
        phrase: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      
    }

    render() {
        return (
            <div>
                <Grid container spacing={1} justify="center" alignItems="flex-end">
            <Paper>
                <form>
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
                </form>
            </Paper>
        </Grid>
            </div>
        );
    }
}

export default UserUpdate;