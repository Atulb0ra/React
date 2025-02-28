import React from 'react'

function Child(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>submit</button> */}
      {/* to pass a variable in parent */}
      <button onClick={() => props.greetHandler('child')}>submit</button>
    </div>
  )
}

export default Child
