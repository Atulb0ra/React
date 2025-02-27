import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    // NOTE : this Increment not work for IncrementFive

    // Increment(){
    //     this.setState({
    //         count : this.state.count  +  1
    //     }, () => {
    //         console.log(this.state.count); // Moved console.log to the callback
    //     })
    //     //NOTE :  The console.log statement was moved to a callback function to log the updated state after it has changed.

    //     console.log(this.state.count);
    // }


    // Use of prevState: The Increment method now uses the functional form of setState, which is safer when updating state
    //  based on the previous state. This prevents potential issues with asynchronous state updates.
    Increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1 // Use prevState for safer state updates
        }), () => {
            console.log(this.state.count); // Log updated state
        });
    }
    IncrementFive(){
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            {/* <button onClick = {() => this.Increment()}>Click Me!</button> */}
            <button onClick = {() => this.IncrementFive()}>Click Me!</button>
            </>
        )
    }
}

export default Counter
