import React from 'react';
import UseTimmer from "../Hooks/UseTimer";

const CountDown = () => {
    const { second, minute, reset, stopTimer, startTimer } = UseTimmer();
  return (
      <div>
          <h1>COUNTDOWN</h1>
          <h1>{minute} : {second}</h1>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CountDown