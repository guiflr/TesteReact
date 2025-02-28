import React from "react";

import ProductTitle from "./ProductTitle";
import ProductInfo from "./ProductInfo";
import { ProductType } from "../api/products/route";

const ProductCard = ({ image, name, ...productInfo}: ProductType) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-contain"
        />
         <ProductTitle  title={name} mobile/>
      </div>
      <ProductInfo {...productInfo} name={name} />
    </div>
  );
};

export default ProductCard;
