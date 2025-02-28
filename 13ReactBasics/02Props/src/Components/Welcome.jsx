import React,{Component} from "react";

class Welcome extends Component{
    //props are immutable
    //this.props.name = bora; not possible
    render(){
        return <h1>Welcome {this.props.name} in {this.props.city}</h1>
    }
}


// destructor props and state in class component
// class Welcome extends Component{
//     render(){
//         const[name, city] = this.props;
//         const[state1, state2] = this.state;
//         return <h1>Welcome {name} in {city}</h1>
//     }
// }

export default Welcome;