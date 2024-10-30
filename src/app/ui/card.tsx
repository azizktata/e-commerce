"use client";

import Image from "next/image";
import React from "react";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { PlusIcon } from "@heroicons/react/24/outline";

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
    <div className="min-w-[280px] mx-auto r">
      <div className="bg-white rounded-xl  p-4 relative group ounded-lg  border">
        <Link href={`../products/${product.slug}`}>
          <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-semibold px-2 py-1 rounded">
            Sale
          </span>
          <div className="overflow-hidden rounded-t-lg">
            <Image
              className="p-8 rounded-t-lg w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              src={product.images[0]?.url || "/fallback.png"}
              alt=""
              width={250}
              height={250}
            />
          </div>
        </Link>

        <a
          onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))}
          href="#sidebar"
        >
          <button className="  rounded-full border border-gray-300 flex ml-auto text-gray-500 hover:text-green-400 transition z-50">
            <PlusIcon className="w-6 h-6" />
          </button>
        </a>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-medium text-gray-700">{product.name}</h2>
        <div className="flex items-center justify-center space-x-2 mt-1">
          {/* <span className="text-sm text-gray-400 line-through">$280</span> */}
          <span className="text-xl font-semibold text-gray-900">
            {" "}
            {product.price}
            {" TND "}
          </span>
        </div>
      </div>
    </div>
  );
}
