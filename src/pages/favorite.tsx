import React from "react";
import { StoreProduct, productProps, stateProps } from "../../type";
import { useSelector } from "react-redux";
import Image from "next/image";
import FavoriteProduct from "@/components/FavoriteProduct";
import ResetFavorite from "@/components/ResetFavorite";

const Favorite = () => {
  const { productData, favoriteData } = useSelector(
    (state: stateProps) => state.next
  );

  return (
    <>
      {favoriteData.length > 0 ? (
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 gap-10 py-4">

          <div className="bg-white col-span-4 p-4 rounded-lg ">
            {favoriteData.map((item: StoreProduct) => (
              <div key={item._id}>
                <FavoriteProduct productData={productData} item={item} />
              </div>
            ))}
            <ResetFavorite />
          </div>
        </div>
      ) : (
        <h1>empty</h1>
      )}
    </>
  );
};

export default Favorite;
