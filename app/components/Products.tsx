'use client';

import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import useSWR from 'swr';

import { Skeleton } from "./Skeleton";
import ProductCard from "./ProductCard";
import { ProductType } from "../api/products/route";
import { productFilter } from "../utils/products-filter";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, error, isLoading } = useSWR<ProductType[]>('/api/products', async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  useEffect(() => {
    if (!data) return;

    const filteredProducts = data.filter((product) => {
      const searchLower = searchTerm.toLowerCase();    
      return productFilter(product, searchLower)
    });

    setProducts(filteredProducts);
  }, [searchTerm, data]);  

  return (
    <div className="w-full flex justify-center flex-col h-full">
      <div className="border-gray-500 w-1/2 mx-auto mb-4">
        <label htmlFor="search" className="block text-sm/6 font-medium text-gray-900">
          Pesquisa
        </label>
        <div className="mt-2 grid grid-cols-1">
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Pesquisar produtos"
            onChange={event => setSearchTerm(event.target.value)}
            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        </div>
      </div>
      <div className="mb-4 border-b border-1"></div>      
      <div className="space-y-4">
      {isLoading && <Skeleton />}
        {products.length > 0 && (
          products.map((product) => (
            <div key={product.name} data-testid="product">
              <ProductCard {...product} />
            </div>
          ))
        )}
      </div>
      {! isLoading && !products?.length && <p className="text-center text-gray-500">Nenhum produto encontrado</p>}
    </div>
  );
}