import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { Grid } from "./Styled";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../Redux/actions.js";
import { ProductCard } from "./ProductCard";
export const CategoryCard = () => {
  const myState = useSelector((state) => state.reducer);
  const [data, setData] = useState([]);
  
  console.log(myState)
  const dispatch = useDispatch();
  const {men} = useParams();
  console.log(men);
  useEffect(() => {
    // dispatch filter Products for every ID change
    dispatch(filterProducts(myState.products, men))
  }, []);
  return (
    <Grid data-testid = "category-container">
      {/* Iterate and print product cards that are of this category */}
      {myState.filterData.map(elem => {
        return <ProductCard key={elem.id} {...elem}/>
      })}
    </Grid>
  );
};
