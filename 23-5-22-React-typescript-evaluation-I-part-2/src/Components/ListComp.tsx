import React from 'react';
import UseList from "../Hooks/UseList";

const ListComp = () => {
    const { list, push, pop, clear, reset, map } = UseList([1,2,3,4])
  return (
      <div>
          <button onClick={push}>Append</button>
          <button onClick={pop}>Pop</button>
          <button onClick={clear}>Clear</button>
          <button onClick={reset}>Reset</button>
          <button onClick={map}>Double every element</button>
          {list.map((elem,ind) => {
              return <p key={ind}>{elem}</p>
          })}
    </div>
  )
}

export default ListComp