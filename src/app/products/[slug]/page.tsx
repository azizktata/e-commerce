import Header from "@/app/ui/header";
import React from "react";
import Link from "next/link";
import Details from "@/app/ui/details";

import { notFound } from "next/navigation";
import prisma from "@/lib/db";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  // const product = productss.find(
  //   (product) => product.id === parseInt(params.id)
  // );
  const product = await prisma.product.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      images: true,
    },
  });
  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="2xl:w-[96%] 2xl:mx-auto lg:py-8 lg:px-16 md:py-12 md:px-6 py-9 px-4  flex flex-col">
        <div className=" flex flex-col items-start sm:w-96 sm:self-center md:w-8/12 lg:w-full  lg:self-start">
          <div className="text-gray-500 mb-8">
            <Link href={".."}>Accueil </Link> /{" "}
            <Link href={"../products"}>Products</Link> /{" "}
            <span>{product?.name}</span>
          </div>
          <nav className="flex gap-8 text-xl mb-8">
            <Link href={`/products/${params.slug}`}>Details</Link>
            <Link href={`/products/${params.slug}/order`}>Order</Link>
          </nav>
        </div>
        <div className="flex justify-center items-center lg:items-start lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <Details product={product} />
        </div>
      </div>
    </>
  );
}
