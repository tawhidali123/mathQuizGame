import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

// const DEFAULT_STATE = {
//     counter: 60
// }

export default class Timer extends Component {

   


    
    // changeTime = () => {
    //     this.setState({counter: this.state.counter--})
    //     console.log(this.state.counter)
    // }
    
    // startTimer = () => {
    //     setInterval(this.changeTime, 1000);
        
    // }
    
    // componentDidUpdate(){
    //     this.startTimer()
    // }

    
   
    

    
    render() {
       
       

        return (
            <div>
               <h1>
                   <Button onClick={this.props.startTimer} >Start</Button>
                   
                   <br></br>
                    Timer: {this.props.time}
                    
               </h1> 
            </div>
        )
    }
}






// const time = document.querySelector('.timer');
// let counter = 0;
// let interval;

// function timer() {
//     interval = setInterval(function() {
//         counter++;
//         time.innerHTML = counter + ' seconds';

//     }, 1000);
    
// };
