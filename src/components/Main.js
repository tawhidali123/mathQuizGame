import React from 'react';

// imported from material UI DOCS
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import AdditionCard from './AdditionCard';
import GameContainer from './GameContainer';
// END MATERIAL UI IMPORTS



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

        {/* NAVIGATION BAR */}
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            NAV BAR
          </Typography>
          {/* <Button variant="contained" color="primary"> Main Menu </Button> */}
          <Button variant="contained" color="primary"> Logout </Button>
          
        </Toolbar>
      </AppBar>


      <main>

        {/* TITLE SECTION */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Are You Smarter Than Eric?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Rules and FAQS
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" >
                    PLAY GAME
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    VIEW HIGH SCORES
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* END TITLE SECTION */}

        <Grid>
            <GameContainer/>


      </main>
    
    </React.Fragment>
  );
}

