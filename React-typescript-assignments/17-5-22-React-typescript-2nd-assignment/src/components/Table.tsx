import React from 'react';
import styled from "styled-components";
import TableRow from './TableRow';


type propsType = {
    data: {
        id: number;
        model: string;
        manufacturing_year: string;
        operating_system: string;
        screen_height: number;
        screen_width: number;
        price: number;
    }[];
   
}
const Table= (props:propsType) => {
  return (
      <>
          <TableData>
              <thead>
                  <tr>
                      <td>Id</td>
                      <td>Model</td>
                      <td>Manufacture Year</td>
                      <td>Operating System</td>
                      <td>Screen Width</td>
                      <td>Screen Height</td>
                      <td>Price</td>
               </tr>
              </thead>
              <tbody>
                  {props.data.map(elem => {
                      return <TableRow key={elem.id} value={elem}/>
              })}
              </tbody>
          </TableData>
      </>
  )
}

export default Table;
export const TableData = styled.table`
border: 1px solid #000;
margin:10px 0px ;
thead{
  td{
      border: 1px solid #000;
      padding:5px 10px ;
      font-weight:600;
  }

}
tbody{
    td{
      border: 1px solid #000;
    }
  }

`;