import React from "react";
import { productProps } from "../../type";

const Products = ({ productData }: any) => {
  return (
    <>
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
            <div key={_id}>
              <h1>{title}</h1>
            </div>
          );
        }
      )}
    </>
  );
};

export default Products;
