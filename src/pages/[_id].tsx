import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Dynamic = () => {
  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(router);
  }, [router, setProduct]);
  return (
    <div className="bg-white">
      <h1></h1>
    </div>
  );
};

export default Dynamic;
