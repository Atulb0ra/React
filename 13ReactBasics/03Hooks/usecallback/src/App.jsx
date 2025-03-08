import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { useCallback } from 'react'
function App() {
  const [count, setCount] = useState(0)

  // const newFn = () =>{}

  const newFn = useCallback(()=>{},[])
  // the callback function is memoizing the function 
  // so it will only be created once
  // and the reference will be stored in the component
  // so it will not be recreated on every render


  // to make it a new function everytime we increase count we can pass count as a dependency
  // const newFn = useCallback(()=>{},[count]) like this this function will be recreated on every render
  // and the reference will be updated in the component
  
  return (
    <>
    {/* without a function memo works fine and when the compoennt is rerendered 
    the header rendered is observed only once in console */}
    
    {/* <Header /> */}



    {/* with passing a function as props*/}
    {/* by doing this memo does not work as expected because of refrential equality means that the function is not the same even if the props are the same
    i.e. the function is recreated on every render every time newFn is called it is a new function */}

    {/* to avoid this we can use useCallback hook */}
    <Header newfn = {newFn}/>
    <h1>{count}</h1>
    <button onClick={() => setCount(prev => prev + 1)}>Count is {count}</button>
    </>
  )
}

export default App
