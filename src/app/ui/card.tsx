"use client";

import Image from "next/image";
import React from "react";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";
import { Item } from "../types";
import Link from "next/link";

export default function Card({ product }: { product: Item }) {
  const dispatch = useAppDispatch();
  return (
    <div className="min-w-[250px]  relative overflow-hidden bg-gray-300 rounded-lg max-w-base shadow-lg group">
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283"
        fill="none"
        style={{ opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <Link href={`../products/${product.id}`}>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <Image
            className="relative w-40"
            src="/test.png"
            alt=""
            width={160}
            height={160}
          />
        </div>
      </Link>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{product.category}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{product.name}</span>
          <span className="block bg-white rounded-full text-gray-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
            ${product.price}
          </span>
        </div>
        <a
          onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))}
          href="#sidebar"
        >
          <span className="block bg-white rounded-full text-gray-900 text-xs font-bold px-3 py-2 leading-none flex justify-center mt-4 cursor-pointer">
            {/* <ShoppingCartIcon className="  text-gray-900 h-5 w-5   text-black-500 " /> */}
            add to cart
          </span>
        </a>
      </div>
    </div>
  );
}
