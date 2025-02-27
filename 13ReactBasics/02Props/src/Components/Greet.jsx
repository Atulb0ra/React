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

export default Greet
