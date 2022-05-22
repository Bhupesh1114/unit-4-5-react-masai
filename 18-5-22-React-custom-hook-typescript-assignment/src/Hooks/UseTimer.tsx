import React, { useEffect, useRef, useState } from 'react'

const UseTimer = () => {
    const [second, setSecond] = useState(59);
    const [minute, setMinute] = useState(5);

    const value = useRef<any>();
    
    const startTimer = () => {
        value.current = setInterval(() => {
            setSecond((second) => second - 1);
      },1000)
    }

    const stopTimer = () => {
        clearInterval(value.current);
    }
    useEffect(() => {
        if (second === 0) {
            setSecond(59);
            setMinute((minute) => minute - 1);
        }
        if (minute === 0 && second === 0) {
            clearInterval(value.current);
            setSecond(0);
            setMinute(0)
        }
    },[second,minute])

    const reset = () => {
        setSecond(59);
        setMinute(5);
    }
    return { second, minute, reset, stopTimer, startTimer };
}

export default UseTimer;