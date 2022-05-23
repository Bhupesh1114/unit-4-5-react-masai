import React from 'react';
import UseCounter from "../Hooks/UseCounter";

const CounterComp = () => {
    const { value, inc, dec, set } = UseCounter();
  return (
      <div>
          <button onClick={() => inc(1)}>Add 1</button>
          <button onClick={() => inc(3)}>Add 3</button>
          <button onClick={() => dec(1)}>Sub 1</button>
          <button onClick={() => dec(3)}>Add 3</button>
          <button onClick={set}>Set counter to 100</button>
          <h3>Counter: {value}</h3>

    </div>
  )
}

export default CounterComp