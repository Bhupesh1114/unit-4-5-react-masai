import React from "react";
import styles from "./CardUpperPart.module.css";
const CardUpperPart = ({ date, btn, image }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>{date}</p>
        <button>{btn}</button>
      </div>
      <img src={image} alt="pic" />
    </div>
  );
};

export default CardUpperPart;
