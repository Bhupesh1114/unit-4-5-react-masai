import { useState } from 'react';

const UseCounter = (num:number) => {
    const [value, setValue] = useState(num);

    const inc = (num?: number) => {
        if (num) {
            setValue((value) => value + num); 
        } else {
            setValue((value) => value + 1); 
        }
       
    }
    const dec = (num?: number) => {
        if (num) {
            setValue((value) => value - num);
        } else {
            setValue((value) => value - 1);
        }
        
    }

    const set = (num:number) => {
        setValue(num);
    }

    return { value, inc, dec, set };
}

export default UseCounter;