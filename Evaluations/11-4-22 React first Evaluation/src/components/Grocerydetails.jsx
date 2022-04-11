import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import styles from "./GroceryDetails.module.css"

const GroceryDetails = ()=>{
    return(
        <div>
        <h1>Groceries</h1>
        <div className={styles.container}>
                {/* map through the data and display the cards */}
                {data.map((elem, imdex, arr) => {
                    return <GroceryItem key={elem.id} value={elem}/>
              })}
        </div>
        </div>
    )
}
export default GroceryDetails