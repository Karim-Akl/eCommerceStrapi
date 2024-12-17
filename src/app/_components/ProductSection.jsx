import React from "react";
import ProductList from "./ProductList";
import { ArrowRight } from "lucide-react";

function ProductSection() {
  return (
    <div className="px-10 md:px-20">
      <h2 className="font-bold text-[20px] my-3">
        Brand New
        <span
          className="font-normal text-[14px]
         float-right text-primary flex 
         items-center cursor-pointer hover:text-teal-600"
        >
          View All Collection <ArrowRight className="h-4" />{" "}
        </span>
      </h2>{" "}
      <ProductList />
    </div>
  );
}

export default ProductSection;
