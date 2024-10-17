"use client";

import Image from "next/image";
import React from "react";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";
// import { Item } from "../types";
import Link from "next/link";

export default function Card({ product }) {
  const dispatch = useAppDispatch();
  return (
    // <div className="min-w-[250px]  relative overflow-hidden bg-gray-300 rounded-lg max-w-base shadow-lg group">
    //   <svg
    //     className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
    //     viewBox="0 0 375 283"
    //     fill="none"
    //     style={{ opacity: 0.1 }}
    //   >
    //     <rect
    //       x="159.52"
    //       y="175"
    //       width="152"
    //       height="152"
    //       rx="8"
    //       transform="rotate(-45 159.52 175)"
    //       fill="white"
    //     />
    //     <rect
    //       y="107.48"
    //       width="152"
    //       height="152"
    //       rx="8"
    //       transform="rotate(-45 0 107.48)"
    //       fill="white"
    //     />
    //   </svg>
    //   <Link href={`../products/${product.slug}`}>
    //     <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
    //       <div
    //         className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
    //         style={{
    //           background: "radial-gradient(black, transparent 60%)",
    //           transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
    //           opacity: 0.2,
    //         }}
    //       ></div>
    //       <Image
    //         className="relative w-40"
    //         src={product.image || "/test.png"}
    //         alt=""
    //         width={160}
    //         height={160}
    //       />
    //     </div>
    //   </Link>
    //   <div className="relative text-white px-6 pb-6 mt-6">
    //     <span className="block opacity-75 -mb-1">{product.category}</span>
    //     <div className="flex justify-between">
    //       <span className="block font-semibold text-xl">{product.name}</span>
    //       <span className="block bg-white rounded-full text-gray-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
    //         ${product.price}
    //       </span>
    //     </div>
    //     <a
    //       onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))}
    //       href="#sidebar"
    //     >
    //       <span className="block bg-white rounded-full text-gray-900 text-xs font-bold px-3 py-2 leading-none flex justify-center mt-4 cursor-pointer">
    //         {/* <ShoppingCartIcon className="  text-gray-900 h-5 w-5   text-black-500 " /> */}
    //         add to cart
    //       </span>
    //     </a>
    //   </div>
    // </div>

    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`../products/${product.slug}`}>
        <Image
          className="p-8 rounded-t-lg"
          src={product.image || "/test.png"}
          alt=""
          width={1000}
          height={786}
        />
      </Link>
      {/* <img
          className="p-8 rounded-t-lg"
          src="/docs/images/products/apple-watch.png"
          alt="product image"
        /> */}

      <div className="px-5 pb-5">
        <Link href={`../products/${product.slug}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <a
            onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))}
            href="#sidebar"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
