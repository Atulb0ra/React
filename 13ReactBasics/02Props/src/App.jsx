import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'

function App() {

  return (

    //Props use
    // <>
    //     {/* <Greet name = "atul" city = "USA"/>
    //     <Greet name = "atul" city = "Russia"/>
    //     <Greet name = "atul" city = "Saudi Arabia"/> */}

    //     {/* 2ndtype */}
    //     <Greet name = "atul" city = "USA">
    //       <p>This is children props</p>
    //     </Greet>
    //     <Greet name = "atul" city = "Russia">
    //       <button>click</button>
    //     </Greet>
    //     <Greet name = "atul" city = "Saudi Arabia"></Greet>


    //     //class based
    //     <Welcome name = "atul" city = "USA"/>
    //     <Welcome name = "atul" city = "Russia"/>
    //     <Welcome name = "atul" city = "Saudi Arabia"/>
    // </>



    // // State use
    // <Message />

    // setState brief use
    <Counter />
  )
}

export default App
