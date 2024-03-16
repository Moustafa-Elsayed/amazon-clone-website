import React, { useEffect, useState } from "react";
import { StoreProduct, productProps, stateProps } from "../../type";
import { useSelector } from "react-redux";
import Image from "next/image";
import FavoriteProduct from "@/components/FavoriteProduct";
import ResetFavorite from "@/components/ResetFavorite";
import Link from "next/link";
import { BeatLoader } from "react-spinners";

const Favorite = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { productData, favoriteData } = useSelector(
    (state: stateProps) => state.next
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    favoriteData;
  }, [favoriteData]);
  return (
    <>
  {isLoading ? (
    <div className="w-full flex flex-col gap-6 items-center justify-center py-20">
      <p>Your product is loading...</p>
      <BeatLoader color="#131921" size={40} />
    </div>
  ) : (
    favoriteData.length > 0 ? (
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 gap-10 py-4">
        <div className="bg-white col-span-4 p-4 rounded-lg ">
          <div className="mb-5 border-b border-black p-2">
            <p className="text-2xl font-semibold text-amazon_blue">
              Favorite List
            </p>
          </div>
          <Link href={"/"}>
            <button className=" mb-3 w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300">
              Continue shopping
            </button>
          </Link>
          {favoriteData.map((item:StoreProduct) => (
            <div key={item._id}>
              {/* Assuming FavoriteProduct is a component */}
              <FavoriteProduct item={item} />
            </div>
          ))}
          {/* Assuming ResetFavorite is a component */}
          <ResetFavorite />
        </div>
      </div>
    ) : (
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 gap-10 py-4">
        <div className="bg-white h-64 col-span-4 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">
            Your Favorite List is empty!
          </h1>
          <Link href={"/"}>
            <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
              Go to shopping
            </button>
          </Link>
        </div>
      </div>
    )
  )}
</>

  );
};

export default Favorite;
