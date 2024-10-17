import React from "react";
import Header from "../ui/header";
import OrderForm from "../ui/orderForm";
import OrderSummary from "../ui/orderSummary";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Checkout() {
  const session = await getKindeServerSession();
  const user = await session.getUser();

  const existUser = user?.email
    ? await prisma.user.findFirst({
        where: {
          email: user.email,
        },
      })
    : null;
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
          <OrderForm userInfo={existUser} />
        </div>
        <OrderSummary />
      </div>
    </>
  );
}
