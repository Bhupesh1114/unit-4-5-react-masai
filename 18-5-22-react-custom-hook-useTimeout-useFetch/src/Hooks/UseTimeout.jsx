import  { useEffect, useState } from "react";

const UseTimeout = (value) => {
    const [bool, setBool] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            console.log("Timeout")
            setBool(true);
         },value)
    },[])


    return { bool };



}

export default UseTimeout;