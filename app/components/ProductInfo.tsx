import React from "react";

import ProductTitle from "./ProductTitle";

type ProductInfoProps = {
    name: string,    
    treadwear: number,
    traction: string,
    temperature: string,
    pattern: string,
    loadIndex: string,
    speedRating: string,
}

const ProductInfo = ({loadIndex, name,pattern,speedRating,temperature,traction,treadwear}: ProductInfoProps) => {
  return (
   
      <div className="flex-1 border-t-2 md:border-l-2 md:border-t-0 border-black pt-4 md:pt-0 md:pl-6 w-full">
        <ProductTitle title={name} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Durabilidade:</span> <p>{treadwear}</p>
          </div>
          <div>
            <span className="font-semibold">Tração:</span> <p>{traction}</p>
          </div>
          <div>
            <span className="font-semibold">Temperatura:</span> <p>{temperature}</p>
          </div>
          <div>
            <span className="font-semibold">Índice de velocidade:</span> <p>{speedRating}</p>
          </div>
          <div>
            <span className="font-semibold">Capacidade de Carga:</span> <p>{loadIndex}</p>
          </div>
          <div>
            <span className="font-semibold">Desenho:</span> <p>{pattern}</p>
          </div>
        </div>
      </div>
  );
};

export default ProductInfo;
