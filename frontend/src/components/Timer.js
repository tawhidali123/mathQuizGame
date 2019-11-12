import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

// const DEFAULT_STATE = {
//     counter: 60
// }
let interval;
export default class Timer extends Component {

    state = {
        counter: null,
        toMain: false
    }
    


    
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

    countDown = () => {
        this.setState({counter: this.state.counter-1})
    }
    startTimer = () => {
    interval =  setInterval(() => {
        this.countDown();
        console.log(this.state.counter);
      }, 1000);
    }
    
    componentDidMount(){
    this.setState({counter: this.props.time})
    }
  
      
    componentDidUpdate(){
        
    }
    
    render() {
        if(this.state.counter === 0)  {
            this.props.done()
            clearInterval(interval)
            return <Redirect to='/main' />

            
        } 
     

        return (
            <div>
               <h1>
                   <Button onClick={this.startTimer} >Start</Button>
                   
                   <br></br>
                    Timer: {this.state.counter}
                    
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
