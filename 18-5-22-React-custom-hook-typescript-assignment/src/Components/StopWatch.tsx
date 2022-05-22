import React from 'react';
import UseStopWatch  from "../Hooks/UseStopWatch";


const StopWatch = () => {
    const { hour,second, startTimer, stopTimer, resetTimer ,minute} = UseStopWatch ();
  return (
    <div>
      <h1>STOPWATCH</h1>
      <div>
        <h1>{hour} : {minute} : { second}</h1>
      </div>
      
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default StopWatch;