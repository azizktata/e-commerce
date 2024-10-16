"use client";

import { productss } from "@/app/types";
import Header from "@/app/ui/header";
import OrderForm from "@/app/ui/orderForm";
import Image from "next/image";

import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default function ProductOrder({ params }: { params: { id: string } }) {
  const product = productss.find(
    (product) => product.id === parseInt(params.id)
  );
  if (!product) {
    notFound();
  }
  return (
    <>
      <Header />
      <div className="2xl:w-[96%] 2xl:mx-auto lg:py-8 lg:px-16 md:py-12 md:px-6 py-9 px-4  flex flex-col">
        <div className=" flex flex-col items-start sm:w-96 sm:self-center md:w-8/12 lg:w-full  lg:self-start">
          <div className="text-gray-500 mb-8">
            <Link href={"."}>Accueil </Link> /{" "}
            <Link href={"../products"}>Products</Link> /{" "}
            <span>{product?.name}</span>
          </div>

          <nav className="flex gap-8 text-xl mb-8">
            <Link href="/products/1">Details</Link>
            <Link href="/products/1/order">Order</Link>
          </nav>
        </div>
        <div className="flex justify-center sm:items-start  lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <OrderForm version={2} />
          </div>

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <Image
                className="relative w-40"
                src="/test.png"
                alt=""
                width={160}
                height={160}
              />
            </div>
            <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
              <div className="bg-gray-100 flex justify-center items-center py-4">
                <Image
                  className="relative w-40"
                  src="/test.png"
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
              <div className="bg-gray-100 flex justify-center items-center py-4">
                <Image
                  className="relative w-40"
                  src="/test.png"
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
              <div className="bg-gray-100 flex justify-center items-center py-4">
                <Image
                  className="relative w-40"
                  src="/test.png"
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
