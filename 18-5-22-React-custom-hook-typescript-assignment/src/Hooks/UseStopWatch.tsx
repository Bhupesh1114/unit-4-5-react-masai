import {useState,useRef, useEffect} from 'react'


const UseStopWatch = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    
    const value = useRef<any>()

    const startTimer = () => {
        value.current = setInterval(() => {
            setSecond((second) => second +1);  
        }, 1000);
    }
  
    useEffect(() => {
        if (second === 59) {
            setSecond(0);
            setMinute((minute) => minute + 1);
        }
        if (minute > 59) {
            setSecond(0);
            setMinute(0);
            setHour((hour) => hour + 1);
        }
    },[second,minute])
    const stopTimer = () => {
        clearInterval(value.current)
    }
   
    const resetTimer = () => {
        setSecond(0);
        setMinute(0);
        setHour(0);
    }

    return { second, startTimer, stopTimer, resetTimer,minute,hour };
}

export default UseStopWatch ;