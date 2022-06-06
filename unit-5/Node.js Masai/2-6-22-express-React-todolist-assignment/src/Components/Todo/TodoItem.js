import React from 'react';
import styled from "styled-components";

const TodoItem = ({id,title,handleDelete}) => {
  return (
      <TODOITEM>
          <h3>{title}</h3>
          <button onClick={() => handleDelete(id)}>Delete</button>
    </TODOITEM>
  )
}

export default TodoItem;

export const TODOITEM = styled.div`
display:flex ;
box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 24px;
justify-content:space-between ;
padding:20px 10px;
background-color:#fff;
margin:10px 0px ;
font-size: 20px;
border-radius:5px ;
h3{

    text-transform:capitalize;
}
button{
    background-color:black ;
    border-radius:5px ;
    color:white ;
    cursor: pointer;
    padding:5px ;
}
`;