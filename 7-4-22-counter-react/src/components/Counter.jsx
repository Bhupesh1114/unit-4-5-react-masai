import React, { useState ,useEffect} from "react";
import style from "./Counter.module.css";

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const [disableButton, setButtonDisable] = useState(true);
  const increaseCounter = () => {
    setCounter((prevState) => prevState + 1);
    setButtonDisable(false);
  };
  const decreaseCounter = () => {
    counter !== 0
      ? setCounter((prevState) => prevState - 1)
      : setButtonDisable(true);
  
  };

  const doubleCounter = () => {
    counter !== 0
      ? setCounter((prevState) => prevState * 2)
      : setButtonDisable(true);
  };

  useEffect(() => {
    if (counter === 0) {
      setButtonDisable(true);
     }
  },[counter])
  return (
    <div id={style.counter}>
      <div>
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>+</button>
        <button disabled={disableButton} onClick={decreaseCounter}>
          -
        </button>
        <button disabled={disableButton} onClick={doubleCounter}>
          Doubble
        </button>
      </div>
    </div>
  );
};

export default Counter;
