import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // with useState
  // const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':{
        return { count: state.count + 1 }
      }
      case 'decrease':{
        return { count: state.count - 1 }
      }
      case 'input':{
        return { count: action.payload}
      }
      default:{
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, {count : 0}) // count object is the initial state

  return (
    <>
    {/* <h1>{count}</h1>   // with useState
    <button onClick={() => setCount(prev => prev+1)}>Increase</button>
    <button onClick={() => setCount(prev => prev-1)}>Decrease</button> */}

    <h1>{state.count}</h1 >  {/*with useReducer*/} 
    <button onClick={() => dispatch({type : 'increase'})}>Increase</button>
    <button onClick={() => dispatch({type : 'decrease'})}>Decrease</button>
    <br />
    <input value = {state.count}
    onChange = {(e) => dispatch({type : 'input', payload :Number(e.target.value)})} 
    type = " number" />
    </>

  )
}

export default App
