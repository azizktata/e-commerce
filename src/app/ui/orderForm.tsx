"use client";
import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { createOrder } from "@/actions/actions";
import { useAppSelector } from "../store/hooks";

export default function OrderForm({ version = 1 }: { version?: number }) {
  const [countt, setCountt] = React.useState(0);
  const cart = useAppSelector((state) => state.cart);

  const addCount = () => {
    setCountt((prev) => prev + 1);
  };

  const minusCount = () => {
    if (countt > 0) {
      setCountt((prev) => prev - 1);
    }
  };
  async function handleSubmit(formData: FormData) {
    await createOrder(formData, cart.total, cart.items);
  }
  return (
    <form
      className="flex flex-col gap-4 mt-4 md:grid md:grid-cols-[repeat(2,1fr)]"
      action={handleSubmit}
    >
      <input placeholder="Your Full Name" type="text" name="name" />
      <input placeholder="Your Email" type="text" name="email" />
      <input placeholder="Phone number" type="number" name="phone" />
      <input placeholder="Region" type="text" name="region" />

      <input placeholder="Your Address" type="text" name="address" />
      {version === 2 && (
        <div className="col-span-full lg:mt-11 mt-10">
          <div className="flex flex-row justify-between">
            <p className=" font-medium text-base leading-4 text-gray-600">
              Select quantity
            </p>
            <div className="flex gap-4 mt-auto border  border-gray-300 p-1">
              <button onClick={() => minusCount}>
                <MinusIcon className="h-4 w-4 text-black-500" />
              </button>
              <input
                id="counter"
                aria-label="input"
                className=" h-full text-center w-14 pb-1"
                type="text"
                value={countt}
                onChange={(e) => e.target.value}
              />
              <button onClick={() => addCount}>
                <PlusIcon className="h-4 w-4 text-black-500" />
              </button>
            </div>
          </div>
          <hr className=" bg-gray-200 w-full my-2" />
        </div>
      )}

      <button
        type="submit"
        className="md:col-span-full focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
      >
        Purchase
      </button>
    </form>
  );
}
