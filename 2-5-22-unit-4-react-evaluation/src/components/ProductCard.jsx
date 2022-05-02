import { Flex } from "./Styled";

export const ProductCard = ({ brand,
category,
id,
image,
price,
title}) => {
  return (
    <>
      <Flex data-testid="single-product-item" >
        {/* display item info here  */}
        <div>
        <h3>{title}</h3>
        <img src={image} alt="product_image" />
        <h2>{brand}</h2>
        <h3>Price:{price}</h3>
        </div>
        
      </Flex>
    </>
  );
};
