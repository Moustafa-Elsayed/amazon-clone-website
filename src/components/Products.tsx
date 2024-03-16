import React from "react";
import { productProps } from "../../type";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";
import Link from "next/link";

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
          title,
          _id,
        }: productProps) => {
          return (
            <Link
            href={`/${_id}`}
              key={_id}
              className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden hover:border-[2px] hover:border-amazon_yellow scale-90 hover:scale-100 duration-300 "
            >
              <div className="w-full h-[260px] relative">
                <Image
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  width={300}
                  height={300}
                  src={image}
                  alt="productImage"
                />
                <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                  <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                    <FaShoppingCart />
                  </span>
                  <span
                    onClick={() => {
                      dispatch(
                        addToFavorite({
                          _id: _id,
                          brand: brand,
                          category: category,
                          description: description,
                          image: image,
                          isNew: isNew,
                          oldPrice: oldPrice,
                          price: price,
                          title: title,
                          quantity: 1,
                        })
                      );
                    }}
                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                  >
                    <FaHeart />
                  </span>
                </div>
                {isNew && (
                  <p className="absolute top-0 right-0 text-amazon_blue tracking-wide animate-bounce">
                    !save $
                    {!isNaN(oldPrice - price) && (oldPrice - price).toFixed(2)}
                  </p>
                )}
              </div>
              <hr />
              <div className="px-4 py-3 flex flex-col gap-1">
                <p className="text-xs text-gray-500 tracking-wide">
                  {category}
                </p>
                <p className="text-base font-medium">{title}</p>
                <p className="flex items-center gap-2">
                  <span className="text-sm line-through">${oldPrice}</span>
                  <span className="text-amazon_blue font-semibold">
                    ${price}
                  </span>
                </p>
                <p className="text-xs text-gray-600 text-justify">
                  {description.substring(0, 120)}
                </p>
                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        _id: _id,
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        title: title,
                        quantity: 1,
                      })
                    );
                  }}
                  className="bg-black hover:bg-amazon_yellow hover:text-black duration-300 mt-2 text-white h-10 rounded-md font-medium"
                >
                  add to cart
                </button>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Products;
