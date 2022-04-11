// reusable card component
import CartButton from "./CartButton";
import styles from "./GroceryItem.module.css"
const GroceryItem = ({ value }) => {
  const {title,imgURL,mrp,sellingPrice} = value
  return (
  <div>
        <div className={styles.container}>
      <div>
        <img src={imgURL} alt="pic" />
      </div>
      <div>
        <p>{title}</p>
        <div>
          <p>{mrp}</p>
          <p>{`MRP ${sellingPrice}`}</p>
        </div>
      </div>
      </div>
      <CartButton />
  </div>
  
  )
};
export default GroceryItem;
