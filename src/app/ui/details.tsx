"use client";

import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Item } from "../types";

export default function Details({ product }: { product: Item }) {
  const [count, setCount] = React.useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">
          {product.name}
        </h2>

        <div className=" flex flex-row justify-between  mt-5">
          <div className=" flex flex-row space-x-3">{"⭐".repeat(4)}</div>
          <p className=" font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
            22 reviews
          </p>
        </div>

        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using. Lorem Ipsum is that it has a more-or-less normal distribution
          of letters.
        </p>
        <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
          $ {product.price}
        </p>

        <div className="lg:mt-11 mt-10">
          <div className="flex flex-row justify-between">
            <p className=" font-medium text-base leading-4 text-gray-600">
              Select quantity
            </p>
            <div className="flex items-center gap-4 mt-auto border  border-gray-300 p-1">
              <button onClick={minusCount}>
                <MinusIcon className="h-4 w-4 text-black-500" />
              </button>
              <input
                id="counter"
                aria-label="input"
                className=" h-full text-center w-14 pb-1"
                type="text"
                value={count}
                onChange={(e) => e.target.value}
              />
              <button onClick={addCount}>
                <PlusIcon className="h-4 w-4 text-black-500" />
              </button>
            </div>
          </div>
          <hr className=" bg-gray-200 w-full my-2" />
        </div>

        <a href="#sidebar">
          <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
            Add to cart
          </button>
        </a>
      </div>

      <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
        <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
          <img
            src="https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png"
            alt="Wooden Chair Previw"
          />
        </div>
        <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
          <div className="bg-gray-100 flex justify-center items-center py-4">
            <img
              src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
              alt="Wooden chair - preview 1"
            />
          </div>
          <div className="bg-gray-100 flex justify-center items-center py-4">
            <img
              src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png"
              alt="Wooden chair - preview 2"
            />
          </div>
          <div className="bg-gray-100 flex justify-center items-center py-4">
            <img
              src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
              alt="Wooden chair- preview 3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
