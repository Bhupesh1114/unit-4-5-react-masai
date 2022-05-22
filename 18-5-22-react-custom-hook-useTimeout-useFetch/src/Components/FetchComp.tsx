import React from 'react';
import UseFetch from "../Hooks/UseFetch";


export type productType = {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    }
}
const FetchComp = () => {
    const { isLoading, data } = UseFetch("https://fakestoreapi.com/products");
  return (
      <div>
          {isLoading && <h1>Loading....</h1>}
          {data.map(elem => {
              return <div key={elem.id}>
               <img width="200px" height="200px" src={elem.image} alt="" />
              </div>
          })}
    </div>
  )
}

export default FetchComp