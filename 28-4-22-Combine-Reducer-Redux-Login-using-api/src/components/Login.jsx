import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Action";
import styles from "./Login.module.css"
const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = React.useState({});
  const myState = useSelector((state) => state.Reducer.token);
  const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };
    
    React.useEffect(() => {
        if (myState) {
        navigate("home")
        }
    },[myState])
  const handleChange = (e) => {
    let name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };
  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} placeholder="Enter Email" required/>
        <br />
        <input type="password" name="password" onChange={handleChange} placeholder="Enter Password" required/>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
