import React from "react";
import CardLowerPart from "./CardLowerPart";
import CardUpperPart from "./CardUpperPart";
import styles from "./Card.module.css";
const Card = ({ color, name, pay, button, date, image, type }) => {
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: color }}>
        <CardUpperPart date={date} btn={button} image={image} />
        <CardLowerPart name={name} pay={pay} type={type} />
      </div>
    </div>
  );
};

export default Card;
