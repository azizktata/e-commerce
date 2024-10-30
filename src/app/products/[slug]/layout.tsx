import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Nav from "@/app/ui/nav";
import Link from "next/link";
import getProduct from "@/utils/product";
import Image from "next/image";
export default async function Layout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const product = await getProduct(params.slug);
  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden flex flex-col pt-16 bg-primary">
        <div className=" w-[70%]  mx-auto">
          <div className="text-gray-500 mb-8">
            <Link href={"/"}>Accueil </Link> /{" "}
            <Link href={"/products"}>Products</Link> /{" "}
            <span>{product?.name}</span>
          </div>
          <Nav slug={product.slug} />
        </div>
        <div className="flex w-screen">
          <div className="w-[70%] xs:w-[80%] sm:flex sm:flex-col  mx-auto gap-8 md:grid md:grid-cols-[repeat(3,1fr)]  ">
            <Suspense
              fallback={<div className="col-span-2" id="loading"></div>}
            >
              {children}
            </Suspense>
            <div className="w-full bg-primary flex">
              <div className="w-full flex justify-center items-center">
                <Image
                  className=" relative w-80 self-stretch h-full object-cover p-2"
                  src={product?.images[0].url || "/fallback.png"}
                  alt=""
                  width={80}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
