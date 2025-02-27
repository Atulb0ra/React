import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : 'Hello Atul'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Hello Atul! Welcome in America'
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick = {() => this.changeMessage()}>Click Me!</button>
            </>
        )
    }
}

export default Message;