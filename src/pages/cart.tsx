import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../type";
import Link from "next/link";
import ResetCart from "@/components/ResetCart";
import CartProduct from "@/components/CartProduct";

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
        <>jdhkfhf</>
      ) : (
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
          {productData.length > 0 ? (
            <>
              <div className="bg-white col-span-4 p-4 rounded-lg">
                <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
                  <p className="text-2xl font-semibold text-amazon_blue">
                    Shopping Cart
                  </p>
                  <p className="text-lg font-semibold text-amazon_blue">
                    Subtitle
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                <Link href={"/"}>
                <button className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300">
                  Complete shopping
                </button>
              </Link>
                  {productData.map((item: StoreProduct) => (
                    <div key={item._id}>
                      <CartProduct item={item} />
                    </div>
                  ))}
                  <ResetCart />
                </div>
              </div>
              <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
                {/* <CartPayment /> */}
              </div>
            </>
          ) : (
            <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
              <h1 className="text-lg font-medium">Your cart is empty!</h1>
              <Link href={"/"}>
                <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
                  go to shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
