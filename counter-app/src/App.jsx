import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
// import { Counter } from './Counter';



function App (){
  const [count ,setCount]= React.useState(0)

  const inc = function (){
    setCount(count+1);
  }

    const dec= function (){
    setCount(count-1);
  }

  return(
    <>
    <h1>count:{count+1}</h1>
    <button onClick={inc}>increment</button>
    <br />
    <br />
      <button onClick={dec}>decrement</button>
    </>
   
   

  )
    
      
}

export default App


