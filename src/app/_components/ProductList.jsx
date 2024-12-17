"use client";
import React from "react";
import { useEffect, useState } from "react";
import ProductApis from "../_utils/ProductApis";
import ProductCard from "./ProductCard";
function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await ProductApis.getAllProducts();
      console.log(data);
      setProduct(data.data);
    };
    getAllProducts();
  }, []);
  return (
    <div
      key={product.id}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xc"
    >
      {product.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
