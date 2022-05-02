import React, { useEffect } from "react";
import { Select } from "./Styled";
import { Grid } from "./Styled";
import { ProductCard } from "./ProductCard";
import { useDispatch,useSelector } from "react-redux";
import { getProductsData,sortProducts } from "../Redux/actions.js";
export const Products = () => {
  const myState = useSelector((state) => state.reducer);
  console.log(myState);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    dispatch(getProductsData());
    myState.isLoading = true;
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
    let value = e.target.value;
     dispatch(sortProducts(myState.products,value))
  };
  return (
    <>
      {myState.isLoading ? <div>
        <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {myState.products.map(elem => {
          return <ProductCard key={elem.id} {...elem}/>
        })}
      </Grid>
      </div>
      : <h1>Loding.....</h1>}
      
    </>
  );
};
