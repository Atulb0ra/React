import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)


  function cubeNum(num){
    console.log('calculation done!')
    return num ** 3
  }

  // const result = cubeNum(number)
  // without use Mmo we can see whenever we change the count the cubeNum is called again
  // which prints the calculation done in the console which is inefficient

  // to avoid this we use useMemo where we pass the dependency array and
  // the function we want to memoize by doing this we ensure that the function is only 
  // called when the dependency changes so in this 
  // the cubeNum function is only called once when the number changes

  const result = useMemo(() => {
    return cubeNum(number)
  },[number])

  return (
    <>
    <input type = "number" value = {number} onChange = {e => setNumber(e.target.value)} />
    <h1>cube of the number : {result}</h1>
    <button onClick = {() => setCount(count+1)}>count++</button>
    <h1>count : {count}</h1>
    </>
  )
}

export default App
