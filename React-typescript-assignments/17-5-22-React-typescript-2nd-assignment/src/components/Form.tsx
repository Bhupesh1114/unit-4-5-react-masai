import axios ,{AxiosResponse}from 'axios';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';


type formDataType = {
  id: number;
  model: string;
  manufacturing_year: string;
  operating_system: string;
  screen_height: number;
  screen_width: number;
  price : number;
}
const Form = () => {
  const [inputValue, setInputValue] = useState({});
  const [allData, setAllData] = useState<formDataType[]>([]);
  
  const handleChange = (event:any) => {
    let name = event.target.name;
    setInputValue({...inputValue,[name]:event.target.value});
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios.post("http://localhost:8080/allData",inputValue)
      .then(getData)
    .catch((error) =>console.log(error))
  }

  const getData = () => {
    axios.get("http://localhost:8080/allData")
      .then((response: AxiosResponse<formDataType[]>) => {
        console.log(response.data);
        setAllData([...response.data]);
      })
  }

  useEffect(() => {
    getData();
  }, [])
  
  const handleSort = (data:formDataType[]) => {
    data.sort((a, b) => {
      return a.price - b.price;
    })
    setAllData([...data]);
  }
  return (
    <div>
      <button onClick={() => handleSort(allData)}>Sort By Price in Ascending order</button>
  <FormData>
          <form action="" onSubmit={handleSubmit}>
        <label htmlFor="model">Enter Model</label>
        <input type="text" name="model" onChange={handleChange}/>
        <label htmlFor="manufacture year">Manufacture Year</label>
        <input type="date" name="manufacturing_year" onChange={handleChange}/>
        <label htmlFor="operating system">Operating System</label>
        <input type="text" name="operating_system" onChange={handleChange}/>
        <label htmlFor="screen height">Screen Height</label>
        <input type="number" name="screen_height" onChange={handleChange}/>
        <label htmlFor="screen width">Screen Width</label>
        <input type="number" name="screen_width" onChange={handleChange}/>
        <label htmlFor="price">Enter Price</label>
        <input type="number" name="price" onChange={handleChange} />
        <input type="submit" />
      </form>
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
          {allData.map(elem => {
            return <TableRow key={elem.id} {...elem}/>
               })}
              </tbody>
          </TableData>

    </FormData>
    </div>
    
  )
}

export default Form;

// Styled-component
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

export const FormData = styled.div`
display:flex ;
justify-content:center;
form{
  width:30%;
  background-color:#000;
  padding:20px;
  color:white;
  margin:10px 0px ;
  border-radius:5px ;
  margin-right:20px ;
  input{
    width:100%;
    padding:5px;
    font-size:16px ;
    outline:none;
    margin:10px 0px;
  }
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
}
`;