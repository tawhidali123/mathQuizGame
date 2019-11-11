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

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(35),
  },
  root: {
    padding: theme.spacing(10, 10),
  }
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
            <Paper className={classes.root}>
                <Typography>LOGIN</Typography>
                <br></br>
                <TextField label="Username" />
                <br></br>
                <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                />
            </Paper>
        </Grid>
      </div>

    </div>
  );
}