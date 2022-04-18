import React from 'react';
import styles from "./Buttons.module.css"

const StarButtons = ({filterStar,allStores,handlePayment ,costForTwoHigh,costForLowHigh}) => {
  return (
    <div className={styles.container}>
      <div>
      <h3>Sort Restaurants With Ratings</h3>
      <button onClick={allStores}>All</button>
          <button onClick={()=> filterStar("4")}>4 star</button>
          <button onClick={()=> filterStar("3")}>3 star</button>
          <button onClick={()=> filterStar("2")}>2 star</button>
          <button onClick={()=> filterStar("1")}>1 star</button>
      </div>
      <div>
        <h3>Set Payment Mode</h3>
        <button onClick={allStores}>All</button>
        <button onClick={()=>handlePayment("online")}>Card</button>
        <button onClick={()=>handlePayment("cash")}>Cash</button>
      </div>
      <div>
        <h3>Cost For Two Persons</h3>
        <button onClick={costForTwoHigh}>Sort High To Low</button>
        <button onClick={costForLowHigh}>Sort Low To High</button>
      </div>
    </div>
  )
}

export default StarButtons