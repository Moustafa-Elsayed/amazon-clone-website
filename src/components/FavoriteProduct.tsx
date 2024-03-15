import { deleteFavorite } from "@/store/nextSlice";
import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
interface cartProductsProps {
  item: Item;
}

const FavoriteProduct = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-100 rounded-lg  flex flex-col md:flex-row items-center gap-6 relative mb-3 ">
        <Image
          className="object-cover"
          width={150}
          height={150}
          src={item.image}
          alt="productImage"
        />
        <div className="flex items-center px-2 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-amazon_blue">
              {item.title}
            </p>
            <p className="text-sm text-gray-600 w-10/12">{item.description}</p>
            <p className="text-sm text-gray-600">
              Unit Price : ${item.price.toFixed(2)}
              <span className="font-semibold text-amazon_blue"></span>
            </p>
            <div className="flex items-center gap-6">
              <div className="absolute top-5 right-5 flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300">
                <IoMdClose
                  onClick={() => dispatch(deleteFavorite(item._id))}
                  className="mt-[2px] text-2xl text-red-700"
                />
              </div>
            </div>
          </div>
          <div className="text-lg font-semibold text-amazon_blue"></div>
        </div>
      </div>
    </>
  );
};

export default FavoriteProduct;
