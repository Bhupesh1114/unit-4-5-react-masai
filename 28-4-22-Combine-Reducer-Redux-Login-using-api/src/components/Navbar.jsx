import React from 'react';
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
      <div className={styles.nav}>
          <Link to='/'>Login</Link>
          <Link to='home'>Home</Link>
    </div>
  )
}

export default Navbar