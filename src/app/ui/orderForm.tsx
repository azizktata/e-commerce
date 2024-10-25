"use client";
import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { createOrder } from "@/actions/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import toast from "react-hot-toast";
import { clearCart } from "../store/slices/cartSlice";
import { Prisma } from "@prisma/client";
type ProductWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;
export default function OrderForm({
  showSelectQuantity,
  userInfo,
  product,
}: {
  showSelectQuantity?: boolean;
  userInfo?: {
    username: string;
    email: string;
    phone: string;
    address: string;
  };
  product?: ProductWithImages;
}) {
  const [countt, setCountt] = React.useState(1);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const addCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (product) {
    //   if (countt >= 1) {
    //     dispatch(addQuantity({ id: product.id }));
    //   } else {
    //     dispatch(addToCart({ item: product, quantity: countt + 1 }));
    //   }
    // } else {
    //   toast.error("Product information is missing.");
    // }
    setCountt((prev) => prev + 1);
  };

  const minusCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (countt > 1) {
      setCountt((prev) => prev - 1);
      // if (product) {
      //   if (countt == 1) {
      //     dispatch(removeFromCart({ id: product.id }));
      //   } else {
      //     dispatch(reduceQuantity({ id: product.id }));
      //   }
      // } else {
      //   toast.error("Product information is missing.");
      // }
    }
  };
  async function handleSubmit(formData: FormData) {
    let res;

    if (product) {
      res = await createOrder(formData, cart.total, [product]);
    } else {
      res = await createOrder(formData, cart.total, cart.items);
    }
    if (res) {
      if (res.success) {
        toast.success(res.message);
        dispatch(clearCart());
        setCountt(1);
      } else {
        toast.error(res.message);
      }
    }
  }

  return (
    <form
      className="flex flex-col gap-4 mt-4 lg:grid lg:grid-cols-[repeat(2,1fr)]"
      action={handleSubmit}
    >
      <input
        defaultValue={userInfo?.username || ""}
        placeholder="Your Full Name"
        type="text"
        name="name"
        required
      />

      <input
        defaultValue={userInfo?.email || ""}
        placeholder="Your Email"
        type="text"
        name="email"
        required
      />

      <input
        defaultValue={userInfo?.phone}
        placeholder="Phone number"
        type="number"
        name="phone"
        required
      />

      <input
        defaultValue={userInfo?.address}
        placeholder="Your Address"
        type="text"
        name="address"
        required
      />

      {showSelectQuantity && (
        <div className="col-span-full lg:mt-11 mt-10">
          <div className="flex flex-row justify-between">
            <p className=" font-medium text-base leading-4 text-gray-600">
              Select quantity
            </p>
            <div className="flex gap-4 mt-auto border  border-gray-300 p-1">
              <button onClick={minusCount}>
                <MinusIcon className="h-4 w-4 text-black-500" />
              </button>
              <span>{countt}</span>
              <button onClick={addCount}>
                <PlusIcon className="h-4 w-4 text-black-500" />
              </button>
            </div>
          </div>
          <hr className=" bg-gray-200 w-full my-2" />
          {product && (
            <div className="flex justify-between">
              <p>Total: </p>
              <p>{product?.price * countt}DT</p>
            </div>
          )}
        </div>
      )}

      <button
        type="submit"
        className="md:col-span-full focus:outline-none focus:ring-2 hover:bg-darker-secondary focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-secondary w-full py-5 lg:mt-12 mt-6 focus:translate-x-[1px] focus:translate-y-[1px] hover:translate-x-[1px] hover:translate-y-[1px]"
      >
        Purchase
      </button>
    </form>
  );
}
