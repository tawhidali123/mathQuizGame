import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

// const DEFAULT_STATE = {
//     counter: 60
// }

export default class Timer extends Component {

<<<<<<< HEAD
    state = {
        counter: null,
        toMain: false
    }
    
=======
   
>>>>>>> refs/remotes/origin/tawhid


    
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

    
<<<<<<< HEAD
    componentDidMount(){
    this.setState({counter: this.props.time})
    }
  
      
    
    render() {
        if(this.state.counter === 0)  {
            this.props.done()
            clearInterval(interval)
            return <Redirect to='/main' />

            
        } 
     
=======
   
    

    
    render() {
       
       
>>>>>>> refs/remotes/origin/tawhid

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
