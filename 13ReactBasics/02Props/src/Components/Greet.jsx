import React from 'react'

function Greet(props) {
  return (
    // <div>
    //   <h1>welcome {Props.name} in {Props.city}</h1>
    // </div>


    // 2nd type
    <div>
    <h1>welcome {props.name} in {props.city}</h1>
    {props.children}
  </div>
  )
}


// Destructuring props


// function Greet({name, city}) { // method1 to destructor
//    const[name, city] = props; // method 2 to destructor
//   return (
//     // 2nd type
//     <div>
//     <h1>welcome {name} in {city}</h1>
//     {props.children}
//   </div>
//   )
// }


export default Greet
