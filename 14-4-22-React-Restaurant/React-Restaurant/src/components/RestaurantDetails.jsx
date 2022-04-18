import React from 'react';
import styles from './RestaurentDetails.module.css'


const RestaurantDetails = ({name,image,category,cost,payment,rating,votes,reviews}) => {
    return (
        <div className={styles.mainContainer}>
             <div className={styles.container}>
          <div>
          <img src={image} alt="" />
          </div>
          
          <div>
              <h2>{name}</h2>
              <p>{category}</p>
              <p>{`Cost ${cost} for two`}</p>
              <div>
                  <p>Min 50</p>
                    <p>• Up to 30 min</p>
              </div>
              <p>{payment}</p>
          </div>
          <div>
              <h4>{rating}</h4>
              <p>{`${votes} votes`}</p>
              <p>{`${reviews} reviews`}</p>
          </div>
         
            </div>
            <form onSubmit={(event)=> event.preventDefault()}>
                <input type="text" disabled/>
                <input type="Submit" defaultValue="Order"/>
            </form>
      </div>
     
  )
}

export default RestaurantDetails