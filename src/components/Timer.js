import React, { Component } from 'react'

// const DEFAULT_STATE = {
//     counter: 60
// }

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


    timer = ()=> {
        let num = this.state.counter
        let newNum = num - 1
        setInterval(function(){
           return newNum
        }, 1000)
        this.setState({counter: newNum})
       
    }
    
   
    componentDidMount(){
        this.timer()
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
