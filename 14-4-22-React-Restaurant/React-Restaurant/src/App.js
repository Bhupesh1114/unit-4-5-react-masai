import styles from "./App.module.css";
import RestaurantDetails from "./components/RestaurantDetails";
import data from "./data.json";
import { useState } from "react";
import StarButtons from "./components/Buttons";


function App() {
  const [allData, setAllData] = useState(data);
  const filterStar = (value) => {
    let newData = data.filter((elem) => {
      return +elem.rating >= +value;
    });

    setAllData(newData);
  };
  const allSotres = () => {
    setAllData(data);
  };
  const handlePayment = (value) => {
    let newArr = data.filter((elem) => {
      return elem.payment.includes(value);
    });
    setAllData(newArr);
  };

  const costForTwoHigh = () => {
    let newArr = data.sort((a, b) => {
      return +b.cost - +a.cost;
    });
 
    setAllData([...newArr]);
  };
  const costForLowHigh = () => {
    let newArr = data.sort((a, b) => {
      return +a.cost - +b.cost;
    });
    
    setAllData([...newArr]);
  };
  return (
    <div>
      <StarButtons
        filterStar={filterStar}
        allStores={allSotres}
        handlePayment={handlePayment}
        costForTwoHigh={costForTwoHigh}
        costForLowHigh={costForLowHigh}
      />
      <div className={styles.App}>
        {allData.map((elem, index, arr) => {
          return (
            <RestaurantDetails
              key={index}
              name={elem.name}
              image={elem.image}
              payment={elem.payment}
              category={elem.category}
              cost={elem.cost}
              rating={elem.rating}
              votes={elem.votes}
              reviews={elem.reviews}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
