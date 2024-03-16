import { addToCart } from "@/store/nextSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

const Dynamic = () => {
    const dispatch = useDispatch();

  const router = useRouter();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    setProduct(router.query);
  }, [router, setProduct]);
  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 gap-10 py-4">
      <div className="bg-white col-span-4  rounded-lg ">
        {/* <div className="flex flex-row justify-evenly items-center">
          <Image src={product.image} alt="kldf" width={300} height={500} />
          <div>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.title}</p>
            <p>{product.title}</p>
          </div>
        </div> */}
         <div className="bg-gray-100 rounded-lg  flex flex-col md:flex-row items-center gap-6 relative mb-3 ">
         <Image src={product.image} alt="kldf" width={300} height={500} />

        <div className="flex items-center px-2 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-amazon_blue">
              {product.title}
            </p>
            <p className="text-sm text-gray-600 w-10/12">{product.description}</p>
            <p className="text-sm text-gray-600">
              {/* Unit Price : ${product.price.toFixed(2)} */}
              <span className="font-semibold text-amazon_blue"></span>
            </p>
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    _id:product._id,
                    brand: product.brand,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    isNew: product.isNew,
                    oldPrice: product.oldPrice,
                    price: product.price,
                    title: product.title,
                  })
                );
              }}
              className="bg-black hover:bg-amazon_yellow hover:text-black duration-300 mt-2 text-white h-10 rounded-md w-[20%] font-medium"
            >
              add to cart
            </button>
            <div className="flex items-center gap-6">
              <div className="absolute top-5 right-5 flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300">
                
              </div>
            </div>
          </div>
          <div className="text-lg font-semibold text-amazon_blue"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dynamic;
