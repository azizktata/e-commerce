"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addQuantity,
  reduceQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";
import { Item } from "../types";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const addCount = (item: Item) => {
    dispatch(addQuantity({ id: item.id }));
  };

  const minusCount = (item: Item) => {
    if (item.quantity! > 1) {
      dispatch(reduceQuantity({ id: item.id }));
    }
  };

  return (
    <div
      id="sidebar"
      className="fixed z-20 sm:w-[75%] md:w-[33%] h-screen top-0 right-0 bg-gray-100 transform translate-x-full  transition-transform duration-300"
    >
      <div className="flex flex-col gap-8 p-8">
        <div className="flex justify-between border-b border-gray-300 pb-4">
          <h4>
            Cart <span className="">{cart.items.length}</span>
          </h4>
          <a href="#">
            <button id="toggleSidebar" className="close-btn">
              &times;
            </button>
          </a>
        </div>

        {cart.items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <Image src={item.images[0].url} alt="" width={150} height={150} />
            <div className="flex flex-col gap-2">
              <h5>{item.name}</h5>
              <p className="cart-section-price">
                ${item.price} x {item.quantity}
              </p>
              <div className="flex items-center self-start gap-4 mt-auto border  border-gray-300 p-1">
                <button onClick={() => minusCount(item)}>
                  <MinusIcon className="h-4 w-4 text-black-500" />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addCount(item)}>
                  <PlusIcon className="h-4 w-4 text-black-500" />
                </button>
              </div>
            </div>
            <p
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
              className="ml-auto cursor-pointer"
            >
              &times;
            </p>
          </div>
        ))}

        <div className="flex justify-between">
          <p>Total: </p>
          <p>${cart.total}</p>
        </div>

        <Link className="w-[100] " href="/checkout">
          <button className="w-full inline-block px-8 py-4 uppercase bg-[#242020] text-white transition-colors duration-250 hover:bg-[#4f4f4f] hover:translate-x-[1px] hover:translate-y-[1px] focus:bg-[#4f4f4f] focus:translate-x-[1px] focus:translate-y-[1px]">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
