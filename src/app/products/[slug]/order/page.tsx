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
      <div className="w-screen flex flex-col  py-16 bg-primary">
        {" "}
        <div className="w-[70%] mx-auto">
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
        <div className="w-[70%] xs:w-[80%] sm:flex sm:flex-col  mx-auto gap-8 md:grid md:grid-cols-[repeat(3,1fr)]">
          {/* <!-- Description Div --> */}

          <div className=" col-span-2">
            <OrderForm
              userInfo={userInfo}
              product={product}
              showSelectQuantity={true}
            />
          </div>

          <div className="w-full bg-primary flex">
            <div className="w-full flex justify-center items-center">
              <Image
                className="relative w-60"
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
