import React from "react";
import Link from "next/link";
import Details from "@/app/ui/details";

import { notFound } from "next/navigation";
import prisma from "@/lib/db";
import Nav from "@/app/ui/nav";

export default async function ProductDetails({
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
  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="w-full  flex flex-col py-16 bg-primary">
        <div className=" w-[70%] mx-auto">
          <div className="text-gray-500 mb-8">
            <Link href={".."}>Accueil </Link> /{" "}
            <Link href={"../products"}>Products</Link> /{" "}
            <span>{product?.name}</span>
          </div>
          <Nav slug={product.slug} />
        </div>
        <div className="flex w-screen">
          {/* <!-- Description Div --> */}

          <Details product={product} />
        </div>
      </div>
    </>
  );
}
