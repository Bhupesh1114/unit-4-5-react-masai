import { useState } from "react";
import styles from "./CartButtons.module.css";

// keep the add to cart component here
const CartButton = () => {
  //manage state of the count
  const [count, setCount] = useState(0);
  const handleCount = (value) => {
    setCount((prevState) => prevState + value);
  };
  return (
    <div className={styles.container}>
      {count === 0 ? (
        <div onClick={() => handleCount(1)}>
          <p>Add To Cart</p>
          <p>+</p>
        </div>
      ) : (
        <div>
          <button onClick={() => handleCount(-1)}>-</button>
          <p className="count-item">{count}</p>
          <button onClick={() => handleCount(1)}>+</button>
        </div>
      )}
    </div>
  );
};
export default CartButton;
