import React, { useState } from 'react'
import './main.css'

export default function Timer() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleChange = (e) => {
    setTime(e.target.value);
  }

  const handleStart = () => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    setTimerId(id);
  }

  const handleStop = () => {
    clearInterval(timerId);
    setTimerId(null);
  }

  const handleReset=()=>{

    setTime(0);
  }

  return (
    <div className='container' id='timer'>
      <input type="number" value={time} onChange={handleChange} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Time Remaining: {time} seconds</h2>
    </div>
  );
}