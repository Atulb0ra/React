// import { useState, useEffect } from 'react' //remove when custom hook is used if it is included in sutom hook and not needed here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseLocalStorageq from './Hooks/UseLocalStorage'

function App() {

  // doing without custom hook
  // const [name, setName] = useState(
  //   localStorage.getItem('name')?localStorage.getItem('name') : ''
  // )
  // useEffect(()=>{
  //   localStorage.setItem('name', name)
  // },[name])

  const [name, setName] = UseLocalStorageq('name', '')
//  for another input
  const [age, setAge] = UseLocalStorageq('age', '')
  return (
    <>
    <input type ="text" placeholder='Enter ur name' value = {name}
    onChange={(e) => setName(e.target.value)} />
    <h2>Hello {name}!</h2>
    <input type="number" placeholder='Enter ur age' value={age}
    onChange={(e) => setAge(e.target.value)} />
    <h2>Age: {age}</h2>
    </>
  )
}

export default App
