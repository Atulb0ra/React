import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //CONCEPT 1

  // without useState

  // let color = "red";
  // const changeColor = () =>{
  //   color = "blue";
  //   console.log(color);
  // }


  //with useState single state variable

  // const[color, setColor] = useState("red");
  // const changeColor = () =>{
  //   setColor("blue");
  // }


  // CONCEPT 2

  // useState with multiple state variable
  // const [brand, setBrand] = useState("ferrari");
  // const [model, setModel] = useState("Roma");
  // const [year, setYear] = useState(2023);
  // const [color, setColor] = useState("red");


  // here above insetad using multiple state variable we can use state object
  const [car, setCar] = useState({
    brand: "ferrari",
    model: "Roma",
    year: 2023,
    color: "red"
  })

  const changeModel = () =>{
    // setCar({
    //   model: "Portofino",
    //   year: 2024,
    //   color: "blue"
    // })
    // this is not correct way to update object since the values which are not given
    // will be lost

    // so wee will do it by other way
    setCar(prev =>{
      return {...prev,color: "blue", year: 2024, model: "Portofino"}
    })
  }


  return (
    <>
      {/* for single state variable */}

      {/* <h1>my favourite color is {color}!</h1>
      <button onClick = {changeColor}>blue</button> */}


      {/* for multiple state variables */}

      {/* using multiple state variable */}
      {/* <h1>my {brand}!</h1>
      <h2>it is a {color} {model} from {year}</h2> */}

      {/* using state object */}
      <h1>my {car.brand}!</h1>
      <h2>it is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={() => changeModel()}>Change</button>
    </>
  )
}

export default App
