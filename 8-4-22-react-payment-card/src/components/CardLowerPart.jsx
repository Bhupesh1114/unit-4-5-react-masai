import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./CardLowerPart.module.css";
const CardLowerPart = ({ name, type, pay }) => {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <h1>{pay}</h1>
      <div>
        <p>{type}</p>
        <h1>
          <BsArrowRight />
        </h1>
      </div>
    </div>
  );
};

export default CardLowerPart;
