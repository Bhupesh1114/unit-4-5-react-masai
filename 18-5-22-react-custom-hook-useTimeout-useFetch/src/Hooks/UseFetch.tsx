import { useEffect, useState } from "react";
import axios from "axios";
import { productType } from "../Components/FetchComp";

const UseFetch = (url:string) => {
    const [data, setData] = useState<productType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(true);
     
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                setIsLoading(false);
                setData(response.data);
            })
            .then(error => {
                console.log(error);
        })
    }, []);

    return { isLoading, data };
    
}

export default UseFetch;