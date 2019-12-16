import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
// import AccountCircle from '@material-ui/icons/AccountCircle';



export default class Register extends React.Component {

    state={
        username: "",
        password: "",
        phrase: "",
       
      }
    
      onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
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
            console.log(user)
            this.props.getUserObj(user)
            this.props.history.push('/main')
        })
        
    }

   

  render(){
    
   
  return (
    <div>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
            <Paper>
                <form onSubmit={this.handleSubmit}>
                  <Typography>Register</Typography>
                  <br></br>
                  <TextField 
                  label="Username" 
                  name="username"
                  onChange={this.onChange}
                  value={this.state.username}
                  />
                  <br></br>
                  <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  margin="normal"
                  onChange={this.onChange}
                  value={this.state.password}
                  />
                  <br></br>
                  <TextField
                  label="Catch Phrase"
                  name="phrase"
                  onChange={this.onChange}
                  value={this.state.phrase}
                  />
                  <br></br>
                  <input type="submit"/>
                </form>
            </Paper>
        </Grid>
    </div>
  );
}
}