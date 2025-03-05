import { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useEffect(callback, dependencies array)
  const[count, setCount] = useState(0);

  // without dependencies array
  useEffect(() => {
    setTimeout(() => {
      // setCount(count => count + 1);   this is updating value by 1 in every case except o it directly update it to 2after 2 seconds
      // to correct this we remove strictmode from main.jsx

      // NOTE:  setCount(count + 1); this will update the value by 1 in every case because it is not dependent on previous state
    }, 2000)
  })
  // here the count is updating every time because it does not have any dependencies array so whenever the state is updated in this 
  // component it will run the effect an din this component count is changing every 2 seconds
  // so it will run the effect every 2 seconds

  // with empty dependency array
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);   
    }, 2000)
  }, []) // here the count is not updating every time because it has a dependency array and the dependency array is empty
  // so it will run the effect only once


  // with 1 dependency array
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);   
    }, 2000)
  }, [count]) // here the count is updating every time because it has a dependency array and the dependency array is not empty
  //  it have a dependency array which is count so whenever the count is updated in this component it will run the effect
  // so it will run the effect every time
  
  return (
    <>
    <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default App
