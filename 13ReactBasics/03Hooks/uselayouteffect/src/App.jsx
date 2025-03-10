import { useState, useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // EXAMPLE - 1

  useEffect(() => {
    console.log('useEffect')
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })

  // In above use LayoutEffect and useEffect are same 
  // but useLayoutEffect is called before paint the dom
  // useEffect is called after paint the dom i.e, useLayoutEffect
  // is called before rendering test message and array(ui element) in dom
  // useEffect is called after rendering test message and array(ui element) in dom


  return (
    <>
    <h2>Test Message</h2>
    {Array(40000).fill('').map((item, index) => (
      <li key = {index}>{Math.pow(Math.random(), 10)}</li>
    ))}
    </>
  )
}

export default App
