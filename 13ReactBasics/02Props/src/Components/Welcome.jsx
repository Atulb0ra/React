import React,{Component} from "react";

class Welcome extends Component{
    //props are immutable
    //this.props.name = bora; not possible
    render(){
        return <h1>Welcome {this.props.name} in {this.props.city}</h1>
    }
}

export default Welcome;