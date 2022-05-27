import React, { useState } from 'react';

let questionData = [
    {
        id: 1,
        question: "Why to use Reactjs?"
    },
    {
        id: 2,
        question: "Why to use Redux"
    },
    {
        id:3,
        question: "what is Hoisting,closure?"
    }
];

const Slider = () => {
    const [index, setIndex] = useState(0);
  return (
      <div>
          <h1 data-testid="question">{questionData[index].question}</h1>
          <button onClick={()=> setIndex((index)=> index-1)} disabled={index === 0 && "True"}>prev</button>
          <button onClick={()=> setIndex((index)=> index+1)} disabled={index === questionData.length-1 && "True"}>next</button>
    </div>
  )
}

export default Slider