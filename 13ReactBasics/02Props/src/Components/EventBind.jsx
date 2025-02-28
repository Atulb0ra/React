import React,{Component} from "react";

class EventBind extends Component{
    constructor(){
        super();
        this.state = {
            message : 'Hello Atul'
        }

        // this.changeMessage =  this.changeMessage.bind(this) 
        {/* type 3 */}
    }
    // changeMessage(){
    //     this.setState({
    //         message : 'Hello Atul! Welcome in America'
    //     })
    //     console.log(this)
    // }

    // tupe 4
    changeMessage = () => {
        this.setState({
            message : 'Hello Atul! Welcome in America'
            })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            {/* <button onClick = {this.changeMessage.bind(this)}>Click Me!</button>   Type 1*/}
            {/* <button onClick = {() => this.changeMessage()}>Click Me!</button> type 2*/}
            <button onClick = {this.changeMessage}>Click Me!</button>  {/* defined in constructor */}
            </>
        )
    }
}

export default EventBind;