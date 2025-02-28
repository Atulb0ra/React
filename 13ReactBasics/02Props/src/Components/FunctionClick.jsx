import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button clicked");
    }
  return (
    <div>
      <button onClick = {clickHandler}>click</button>
      {/* <button onClick = {clickHandler()}>click</button> note thiss will automatically call clickhandler without clicking on button so avoid it. */}
    </div>
  )
}

export default FunctionClick
