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
    user_id: 0
  }

<<<<<<< HEAD:frontend/src/login/Login.js
  onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  
}

=======
export default function Login() {
  const classes = useStyles();
>>>>>>> tawhid:frontend/src/login/Login.js

 
  render(){
  return (
    <div>
        <Grid container spacing={1} alignItems="flex-end">
            <Paper>
                <Typography>LOGIN</Typography>
                <br></br>
                <form onSubmit={console.log()}>
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