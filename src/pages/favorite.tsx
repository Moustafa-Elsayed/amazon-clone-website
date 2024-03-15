import React from "react";
import { StoreProduct, productProps, stateProps } from "../../type";
import { useSelector } from "react-redux";
import Image from "next/image";
import FavoriteProduct from "@/components/FavoriteProduct";
import ResetFavorite from "@/components/ResetFavorite";
import Link from "next/link";

const Favorite = () => {
  const { productData, favoriteData } = useSelector(
    (state: stateProps) => state.next
  );

  return (
    <>
      {favoriteData.length > 0 ? (
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 gap-10 py-4">
          <div className="bg-white col-span-4 p-4 rounded-lg ">
            <div className="mb-5 border-b border-black p-2">
              <p className="text-2xl font-semibold text-amazon_blue ">
                Favorite List
              </p>
            </div>
            <Link href={"/"}>
              <button className=" mb-3 w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300">
                Continue shopping
              </button>
            </Link>
            {favoriteData.map((item: StoreProduct) => (
              <div key={item._id}>
                <FavoriteProduct item={item} />
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
