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
      {hydrationLoad ? (
        <> loading</>
      ) : (
        <div className="max-w-screen-2xl mx-auto py-6 grid grid-cols-5 gap-10">
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex item-center justify-between border-b-[1px] border-b-gray-400 pb-1  ">
              <p className="text-amazon_blue text-2xl font-semibold">
                Shoping Cart
              </p>
              <p className="text-amazon_blue text-2xl font-semibold">
                Subtitle
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
