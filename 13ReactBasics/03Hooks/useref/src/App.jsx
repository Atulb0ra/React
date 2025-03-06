import { useState, useRef , useEffect } from 'react';
import './App.css'

function App() {

  // example of using useref to avoid re-rendering of the component

  // const [value, setValue] = useState(0)
  // // const [count, setCount] = useState(0)


  // // useEffect(() => {
  // //   setCount(prev => prev + 1)
  // // });  // this will cause an infinite loop because it's updating the state in the effect
  // // due to which the component will re-render and the effect will run again

  // // to avoid this we will use useref hook
  // const countRef = useRef(0)
  // // console.log(countRef);

  // useEffect(() => {
  //   countRef.current = countRef.current + 1
  // })

  // // here we are using the countRef.current to update the state 
  // // which will not re-render the component when count value change
  // // hence useRef hook is used to avoid re-rendering of the component when
  // // the state is updated in the effect




  // example to access the dom element
  const inputElm = useRef(null)

  const btnClick = () =>{
    console.log(inputElm.current)
    // console.log(inputElm.current.style.background = "blue")
    inputElm.current.style.background = "blue"
  }

  // so like this we can use useref to access the dom element and modify it
  return (
    <>
      {/* case 1 */}

      {/* <button onClick={() => {setValue(prev => prev -1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => {setValue(prev => prev +1)}}>+1</button>
      <h1 >Render Count : {countRef.current}</h1> */}

      {/* case 2 */}
      <input type="text" ref = {inputElm}/>
      <button onClick = {btnClick}>click here!</button>
    </>
  )
}

export default App
