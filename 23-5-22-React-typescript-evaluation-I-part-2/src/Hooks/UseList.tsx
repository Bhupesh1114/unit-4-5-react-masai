import { useState } from 'react'



const UseList = (value:number[]) => {
    const [list, setList] = useState(value);
   

    const push = () => {
        setList([...list, ++list[list.length-1]]);
    }
    const pop = () => {
        setList(list.slice(0,list.length-1));
    }

    const clear = () => {
        setList([]);
    }

    const reset = () => {
        setList(value);
    }

    const map = () => {
        let newList = list.map(elem => {
            return elem * 2;
        })
        setList(newList);
    }

    return {list,push, pop, clear, reset, map };
}

export default UseList;