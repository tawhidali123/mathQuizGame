import React from 'react';

// imported from material UI DOCS
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

const DEFAULT_STATE= {
    sum: 0,
    userInput: 0,
    a: 0,
    b: 0,
    point: 1
}


export default class AdditionCard extends React.Component {

   state ={...DEFAULT_STATE}

   
    mathProblem = () => {
    let random = () => {   
        return Math.round(Math.random()* 100) 
    }

    let a = random()
    let b = random()
    let newSum = a + b

    this.setState({
        sum: newSum,
        a: a,
        b: b
    })
    }
    componentDidMount(){
        this.mathProblem()   
    }
    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
        console.log(this.state.userInput)
    }

    keyPress = (event) => {
        if (event.key === "Enter" && this.state.userInput == this.state.sum){
            this.mathProblem()
            this.props.correct(this.state.point)
            event.target.value = ""
            
        }
        else if(event.key === "Enter"){
            console.log(typeof this.state.userInput)
        }
    }
   
    

     render(){
        
        return (

            
            
            
            
                
                <Card className="cardclassName">

                    <CardContent className="cardContentclassName">
                        <Typography gutterBottom variant="h5" component="h2">
                        <h1>{this.state.a} + {this.state.b}</h1>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>1 Point</Typography>
                    </CardContent>
                    <CardActions>
                        <Typography>
                            <input 
                                type="text"
                                onChange= {this.handleChange}
                                onKeyPress= {this.keyPress}
                            />
                        </Typography>       
                    </CardActions>

                </Card>
            
           
            
    );
}
}
