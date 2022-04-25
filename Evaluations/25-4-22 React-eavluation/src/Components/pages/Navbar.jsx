import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";


const Nav = styled.nav`
background-color: #FD9B95;
padding:20px;
a{
  text-decoration:none;
  color: blue;
  font-weight: bold;
  margin:0px 20px;
  
}
`
export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/books">Books</Link>
        {token ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Nav>
    </>
  );
};
