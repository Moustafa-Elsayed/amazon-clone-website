import Head from "next/head";
import React from "react";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="Super product with free shipping."
          key="desc"
        />
      </Head>
      <div className="text-orange">Cart</div>;
    </>
  );
};

export default Cart;
