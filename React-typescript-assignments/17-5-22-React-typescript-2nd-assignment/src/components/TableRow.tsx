import React from 'react';

type propsType = {
  value: {
    id: number;
    model: string;
    manufacturing_year: string;
    operating_system: string;
    screen_height: number;
    screen_width: number;
    price : number;
  }
  
  }
const TableRow = (props:propsType) => {
    const { id, model, manufacturing_year, operating_system, screen_height, screen_width, price } = props.value;
  return (
      <>
          <tr>
              <td>{id}</td>
              <td>{model}</td>
              <td>{manufacturing_year}</td>
              <td>{operating_system}</td>
              <td>{screen_height}</td>
              <td>{screen_width}</td>
              <td>{price}</td>
          </tr>   
    </>
  )
}

export default TableRow