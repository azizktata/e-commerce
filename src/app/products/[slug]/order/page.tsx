import OrderForm from "@/app/ui/orderForm";
import prisma from "@/lib/db";
import getProduct from "@/utils/product";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProductOrder({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);
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
  if (!product) {
    notFound();
  }
  return (
    <>
      <div className="mb-8 col-span-2">
        <OrderForm
          userInfo={userInfo}
          product={product}
          showSelectQuantity={true}
        />
      </div>
    </>
  );
}
