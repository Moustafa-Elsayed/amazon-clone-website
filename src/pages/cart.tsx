import React from "react";
import { useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../type";

const Cart = () => {
  const { productData, favoriteData } = useSelector(
    (state: stateProps) => state.next
  );
  console.log(productData);

  return (
    <>
      
      <div className="text-orange">Cart</div>
      {productData.map((items: StoreProduct) => (
        <p key={items._id}>{items.title}</p>
      ))}
    </>
  )
};

export default Cart;
