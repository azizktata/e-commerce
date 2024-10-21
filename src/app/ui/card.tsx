"use client";

import Image from "next/image";
import React from "react";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";
import Link from "next/link";
import { Prisma } from "@prisma/client";
type ProductWithImagesAndCategories = Prisma.ProductGetPayload<{
  include: { images: true; categories: true };
}>;
export default function Card({
  product,
}: {
  product: ProductWithImagesAndCategories;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full bg-white flex self-stretch flex-col min-w-[280px] border border-gray-200 rounded-lg shadow relative group">
      <Link href={`../products/${product.slug}`}>
        <div className="relative">
          <Image
            className="p-8 rounded-t-lg max-h-[400px] object-cover"
            src={product.images[0]?.url || "/fallback.png"}
            alt={product.name}
            width={1000}
            height={786}
          />
          {/* Add to Cart button (hidden initially, shown on hover) */}
          <a
            onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))}
            href="#sidebar"
            className="absolute inset-0 flex items-center self-end  justify-center bg-[#3cf084] text-[#002a31] text-[20px] leading-[28px] text-center tracking-[-0.2px] 
                   shadow-none py-2 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-t-lg"
          >
            Add to cart
          </a>
        </div>
      </Link>

      <div className="px-3 pb-5 flex-col items-center">
        <div className="flex items-center justify-center mb-3">
          <Link href={`../products/${product.slug}`}>
            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white uppercase">
              {product.name}
            </h5>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-gray-900 dark:text-white">
            {product.price}{" "}
            <span className="text-gray-700 text-sm font-normal">DT</span>
          </span>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="px-5 pb-5">
  <div className="flex items-center">
    <Link href={`../products/${product.slug}`}>
      <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white uppercase">
        {product.name}
      </h5>
    </Link>
    <span className="bg-green-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
      en stock
    </span>

  </div>
</div> */
}
{
  /* <div className="flex flex-col mt-auto  px-5 pb-5">
  <div className="flex justify-between items-center  mt-2.5 mb-2.5 ">
    <span className="text-basel font-normal text-gray-500 dark:text-white">
      {product.categories.map((category) => category.name).join(", ")}
    </span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white">
      {product.price}{" "}
      <span className="text-gray-500 text-xl font-normal">DT</span>
    </span>
  </div>
  <a
    onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))}
    href="#sidebar"
    className=" text-gray-900 bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium border rounded-lg text-sm  px-5 py-2.5 text-center "
  >
    Add to cart
  </a>
</div> */
}
