"use client";

import React from "react";
import Header from "../ui/header";
import { useAppSelector } from "../store/hooks";
import OrderForm from "../ui/orderForm";

export default function Checkout() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row md:items-baseline gap-8  border-t border-solid">
        <div className="w-[90%] mx-auto md:w-[65%] md:px-4">
          <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-400 mb-8">
            Home / Products / Wooden Stool
          </p>
          <h3 className="text-bold mb-4 text-2xl">Checkout</h3>
          {/* <form className="flex flex-col gap-4 mt-4 sm:grid sm:grid-cols-[repeat(2,1fr)]  "> */}
          <OrderForm />
        </div>
        <div className="w-[100%] md:w-[45%] bg-gray-100 border-l border-solid h-screen">
          <div className="w-[90%] mx-auto  py-8">
            <h4 className="text-bold text-xl mb-4">Order summary</h4>
            <div className="flex flex-col gap-2">
              {cart.items.length > 0 &&
                cart.items.map((item) => (
                  <div key={item.id} className="flex justify-between mb-8">
                    <p className="font-medium">{item.name}</p>
                    <p>
                      {item.price}${" "}
                      <span className="dt"> x {item.quantity}</span>
                    </p>
                  </div>
                ))}
              <div className="flex justify-between">
                <p className="font-normal">
                  Subtotal ({cart.items.length} items){" "}
                </p>
                <p>
                  {0} <span className="text-gray-400 font-light"> DT</span>
                </p>
              </div>

              <div className="flex justify-between">
                <p className="font-normal">Shipping</p>
                <p>
                  0 <span className="text-gray-400 font-light">DT</span>
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  <strong>Total </strong>
                </p>
                <p>
                  <strong> {cart.total}</strong>
                  <span className="text-gray-400 font-light"> DT</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
