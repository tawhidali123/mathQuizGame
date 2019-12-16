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


export default class Login extends React.Component {

  state={
    username: "",
    password: "",
    
  }


  onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  
}

handleSubmit = (event) => {
  event.preventDefault()
  fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(users => {
  
    users.map(user => {
      if(this.state.username === user.username && this.state.password === user.password){
        this.props.getUserObj(user)
        this.props.history.push('/main')
      }
    })
  })
}

  render(){
  return (
    <div>
        <Grid container spacing={1} alignItems="flex-end">
            <Paper>
                <Typography>LOGIN</Typography>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                  <TextField 
                  label="Username" 
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  />
                  <br></br>
                  <TextField
                  id="standard-password-input"
                  name="password"
                  type="password"
                  margin="normal"
                  onChange={this.onChange}
                  value={this.state.password}
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
