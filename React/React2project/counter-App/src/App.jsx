import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter]= useState(0)
  const increment =()=>{
    setCounter(counter + 1)
  }
  const decrement =()=>{
    setCounter(counter - 1)
  }


  return (
    <>
      <div className='box'>
            <h1>{counter}</h1>
            <div className='buttons'>
              <button className='increment'   onClick={increment}>Increment</button>
              <button className='decrement '  onClick={decrement}>Decrement</button>
            </div>
      </div>
    </>
  )
}

export default App
