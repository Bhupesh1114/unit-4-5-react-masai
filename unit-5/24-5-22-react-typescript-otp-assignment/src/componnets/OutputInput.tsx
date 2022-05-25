import React, { useRef, useState } from 'react';
import "./OutputInput.css";
type propsTypes = {
    input: number;
}
const OutputInput = ({ input }: propsTypes) => {
    const inputRef = useRef<HTMLInputElement[]>([]);
    const [isDisable,setIsDisable] = useState<boolean>(false)
  return (
      <div className="input">
          {new Array(input).fill(1).map((_, index) => {
              return <input className={isDisable ? "green" : undefined} disabled={isDisable} onKeyUp={(e) => {
                  if (index === inputRef.current.length - 1) {
                      setIsDisable(true);
                    }
                  if (index >= 0 && index < inputRef.current.length-1) {
                      console.log("inside");
                    if (e.code === "Backspace") {
                        inputRef.current[index - 1].focus();
                        inputRef.current[index - 1].select();
                      } else {
                        inputRef.current[index + 1].focus();
                      } 
                  }
              }} ref={(element) => {
                  if (inputRef.current && element) {
                    inputRef.current[index] = element;
                  }
                   
              }} maxLength={1} key={index} type="text"/>
          })}
    </div>
  )
}

export default OutputInput;