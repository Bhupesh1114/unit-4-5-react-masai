// use axios for api call
import axios from "axios";
import { ALL_DATA ,SORTED_DATA ,FILTER_DATA } from "./actionTypes";
const getProductsData = () => (dispatch) => {
    axios.get("https://movie-fake-server.herokuapp.com/products")
  .then(function (response) {
      console.log(response.data);
      dispatch({type : ALL_DATA,payload : response.data})
  })
  .catch(function (error) {
    console.log(error);
  })
}

const sortProducts = (data, check) => (dispatch) => {
    let newStateData;
    if (check === "asc") {
      newStateData = data.sort((a, b) => {
            return a.price- b.price;
        }) 
    } else {
        newStateData = data.sort((a, b) => {
            return b.price- a.price;
        }) 
    }
    dispatch({type : SORTED_DATA , payload : newStateData})
};

const filterProducts = (data,req) => (dispatch) => {
    let newStateData = data.filter(elem => {
        return elem.category === req;
    })
    console.log(newStateData)
    dispatch({ type: FILTER_DATA, payload: newStateData });
};

export { getProductsData, sortProducts, filterProducts };
