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
      <div className="w-screen flex flex-col py-16 bg-primary">
        <div className=" w-[70%] mx-auto">
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
        <div className="flex w-screen">
          {/* <!-- Description Div --> */}

          <Details product={product} />
        </div>
      </div>
    </>
  );
}
