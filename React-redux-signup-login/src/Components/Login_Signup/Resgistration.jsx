import React, { useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { postData } from "./Login_Signup_Actions";
import { useNavigate ,Link} from 'react-router-dom';
import styled from "styled-components";

const Resgistration = () => {
  const myState = useSelector((state) => state.Login_Signup_Reducer.message)
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
   const dispatch = useDispatch();
    const handleChange = (e) => {
        let name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      dispatch(postData(formData,"register"));
     
  }

  useEffect(() => {
    if (myState) {
      navigate("/login");
    }
  },[myState])
  


  return (
    <Form>
      <h3>{myState}</h3>
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="name">Enter Name</label><br />
              <input type="text" name="name" required onChange={handleChange}/><br />
              <label htmlFor="email">Enter Email</label><br />
              <input type="email" name="email" required onChange={handleChange}/><br />
              <label htmlFor="password">Enter Password</label><br />
              <input type="password" name="password" required onChange={handleChange}/><br />
              <label htmlFor="username">Enter Username</label><br />
              <input type="text" name="username" required onChange={handleChange}/><br />
              <label htmlFor="mobile">Enter Mobile Number</label><br />
              <input type="number" name="mobile" required onChange={handleChange}/><br />
              <label htmlFor="description">Description</label><br />
              <textarea name="description" placeholder="Enter description" required onChange={handleChange}/><br />
              <input type="submit" value="Register" />
      </form>
      <p>Already have account <Link to="/login">Login</Link></p>
    </Form>
  )
}

export default Resgistration;
// "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!"

export const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height:100vh ;
h3{
  margin-bottom:10px ;
}
form{
background-color:blueviolet;
width:400px;
padding: 20px;
border-radius:5px;
input{
    width:99%;
    padding:5px;
    font-size:20px;
    margin: 10px 0px;
    outline:none;
}
textarea{
    width:99%;
    outline:none;
    margin-top:10px;
    height:100px;
    padding:10px ;
}
label{
    color:white;
}
input[type="submit"]{
width:100%;
cursor: pointer;
border-radius:5px;
border:none ;
padding:10px 0px;
transition: transform 0.2s ease-in-out; ;
}
input[type="submit"]:active{
  transform: scale(0.95); ;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

}

`;