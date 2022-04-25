import React from "react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";

const Grid = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
width: 80%;
margin:auto ;
div{
border:1px solid #000;
margin:10px;
}
`;

const Books = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let res = await fetch("http://localhost:8080/books");
      let resData = await res.json();
      console.log(resData);
      setData(resData);
    } catch (error) {
      console.log("error:", error);
    }
  }
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
        
        {data.map(elem => {
          return <BookCard key={elem.id} {...elem}/>
        })}
      </Grid>
      <Outlet/>
    </>
  );
};
export default Books;
