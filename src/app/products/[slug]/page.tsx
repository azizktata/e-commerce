import React from "react";
import Details from "@/app/ui/details";
import { notFound } from "next/navigation";
import getProduct from "@/utils/product";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }
  return <Details product={product} />;
}
