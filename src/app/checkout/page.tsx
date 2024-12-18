import React from "react";
import OrderForm from "../ui/orderForm";
import OrderSummary from "../ui/orderSummary";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

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

  const userInfo = existUser || {
    username: user?.username || "",
    email: user?.email || "",
    phone: "",
    address: "",
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-baseline gap-8 w-[70%] mx-auto border-t border-solid ">
        <div className="md:w-[65%] pt-8">
          <div className="text-gray-500 mb-8">
            <Link href={"/"}>Accueil </Link> /{" Checkout"}
          </div>
          <h3 className="text-bold mb-4 text-2xl">Checkout</h3>
          <OrderForm userInfo={userInfo} />
        </div>
        <OrderSummary />
      </div>
    </>
  );
}
