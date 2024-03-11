import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../type";

const Cart = () => {
  const { productData, favoriteData } = useSelector(
    (state: stateProps) => state.next
  );
  const [hydrationLoad, setHydrationLoad] = useState(true);

  useEffect(() => {
    setHydrationLoad(false);
  }, []);
  return (
    <>
      <div className="text-orange">Cart</div>
      {hydrationLoad ? (
        <> loading</>
      ) : (
        <>
          {productData.map((items: StoreProduct) => (
            <p key={items._id}>{items.title}</p>
          ))}
        </>
      )}
    </>
  );
};

export default Cart;
