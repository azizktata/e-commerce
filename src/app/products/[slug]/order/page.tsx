import Header from "@/app/ui/header";
import OrderForm from "@/app/ui/orderForm";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProductOrder({
  params,
}: {
  params: { slug: string };
}) {
  const product = await prisma.product.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      images: true,
    },
  });
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
      <Header />
      <div className="2xl:w-[96%] 2xl:mx-auto lg:py-8 lg:px-16 md:py-12 md:px-6 py-9 px-4  flex flex-col">
        <div className=" flex flex-col items-start sm:w-96 sm:self-center md:w-8/12 lg:w-full  lg:self-start">
          <div className="text-gray-500 mb-8">
            <Link href={"/"}>Accueil </Link> /{" "}
            <Link href={"/products"}>Products</Link> /{" "}
            <span>{product?.name}</span>
          </div>

          <nav className="flex gap-8 text-xl mb-8">
            <Link href={`/products/${params.slug}`}>Details</Link>
            <Link href={`/products/${params.slug}/order`}>Order</Link>
          </nav>
        </div>
        <div className="flex justify-center sm:items-start  lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <OrderForm
              userInfo={userInfo}
              product={product}
              showSelectQuantity={true}
            />
          </div>

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <Image
                className="relative w-40"
                src={product.images[0].url || "/fallback.png"}
                alt=""
                width={160}
                height={160}
              />
            </div>
            {/* <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
              <div className="bg-gray-100 flex justify-center items-center py-4">
                <Image
                  className="relative w-40"
                  src={product.image}
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
              <div className="bg-gray-100 flex justify-center items-center py-4">
                <Image
                  className="relative w-40"
                  src={product.image}
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
              <div className="bg-gray-100 flex justify-center items-center py-4">
                <Image
                  className="relative w-40"
                  src={product.image}
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
