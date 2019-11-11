import React, { Component } from 'react'

// const DEFAULT_STATE = {
//     counter: 60
// }
let interval;
export default class Timer extends Component {

    state = {
        counter: 60
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
    
    
    componentDidMount(){
        interval =  setInterval(() => {
            this.countDown();
            console.log(this.state.counter);
          }, 1000);
    }

    componentDidUpdate(){
        if(this.state.counter === 0)  {
            clearInterval(interval)
        } 
    }



       


    render() {
     

        return (
            <div>
               <h1>
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
