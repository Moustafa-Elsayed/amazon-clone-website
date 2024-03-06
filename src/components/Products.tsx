import React from "react";
import { productProps } from "../../type";
import Image from "next/image";

const Products = ({ productData }: any) => {
  console.log(productData);

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
            <div
              key={_id}
              className="w-full bg-white p-4 text-black rounded-lg border border-gray-300 group overflow-hidden  "
            >
              <div className="w-full object-cover scale-90 hover:scale-100 duration-300 transition-transform">
              <Image
                width={300}
                height={300}
                alt="productmage"
                src={image}
                className=""
              />
              </div>
              <div>{category}</div>
              <div>{title}</div>
              <div className="flex flex-row gap-3">
                <span className="line-through text-gray-500">{oldPrice}$</span>
                <span>{price}$</span>
              </div>
              <div>{description}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Products;
