import { useState } from 'react'

const UseCounter = () => {
    const [value, setValue] = useState(0);

    const inc = (num:number) => {
        setValue((value) => value + num);
    }
    const dec = (num:number) => {
        setValue((value) => value - num);
    }

    const set = () => {
        setValue(100);
    }

    return { value, inc, dec, set };
}

export default UseCounter;