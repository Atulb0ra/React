import React from 'react'
import { useState, useEffect } from 'react'

const UseLocalStorage = (Key, initialValue) => {
    const [name, setName] = useState(
        localStorage.getItem(Key)?localStorage.getItem(Key) : initialValue
    )
    useEffect(()=>{
        localStorage.setItem(Key, name)
    },[name, Key])
  return [name, setName]
}

export default UseLocalStorage
