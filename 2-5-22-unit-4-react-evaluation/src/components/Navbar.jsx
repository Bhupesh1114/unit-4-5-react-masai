import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 , display:"flex" , justifyContent: "center"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link style={{color: "#fff",textDecoration:"none", margin: "0px 20px"}}to="/">Home</Link>
      <Link style={{color: "#fff",textDecoration:"none", margin: "0px 20px"}}to="/about">About</Link>
      <Link style={{color: "#fff",textDecoration:"none", margin: "0px 20px"}} to="/products">Products</Link>
      <Link style={{color: "#fff",textDecoration:"none", margin: "0px 20px"}}to="/products/men">Men</Link>
      <Link style={{color: "#fff",textDecoration:"none", margin: "0px 20px"}}to="/products/women">Women</Link>
      <Link style={{color: "#fff",textDecoration:"none", margin: "0px 20px"}}to="/products/kids">Kids</Link>
      <Link style={{color: "#fff",textDecoration:"none", margin: "0px 20px"}}to="/products/homedecor">Home Decor</Link>
    </nav>
  );
};
