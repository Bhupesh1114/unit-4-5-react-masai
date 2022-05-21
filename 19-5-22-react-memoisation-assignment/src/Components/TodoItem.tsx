import React, { memo } from "react";
import { TodoType } from "../App";
import styled from "styled-components";

type propType = {
  handleStatus: (id:string | undefined) => void;
}

const TodoItem = ({ id, title, body, verify, color ,handleStatus}: TodoType & propType) => {
  console.log("TodoItem", title);

  return (
    <TODODIV>
      <div style={{ color: color }}>
        <h3>Title:{title}</h3>
        <p>Body:{body}</p>
      </div>
      <p>{verify ? "Done" : "Not Done"}</p>
      <button onClick={() => handleStatus(id)}>Verify</button>
    </TODODIV>
  );
};

export default memo(TodoItem);


export const TODODIV = styled.div`
border:1px solid #000 ;
width:50%;
display:flex ;
flex-direction:column;
align-items:center;
margin:auto ;
padding:10px ;
div{ 
display:flex ;
flex-direction:column; ;
justify-content:center ;
align-items:center;
justify-content:space-evenly ;
width:30%;
border:1px solid #000;
padding:10px ;
margin-bottom:10px ;
h3{
  margin:10px 0px ;
}
}
p{
  margin-bottom:10px ;
}
`;