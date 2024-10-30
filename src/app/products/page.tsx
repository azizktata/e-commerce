import Link from "next/link";
import Card from "../ui/card";
import Select from "../ui/select";
import prisma from "@/lib/db";

export default async function Products({
  searchParams,
}: {
  searchParams: { category: string; sort: "asc" | "desc" };
}) {
  const categories: string[] = ["Cats", "dogs", "toys"];

  const products = await prisma.product.findMany({
    include: {
      categories: true,
      images: true,
    },
    where: { categories: { some: { name: searchParams.category } } },
    orderBy: {
      price: searchParams.sort,
    },
  });
  const productsCount = await prisma.product.count();
  return (
    <>
      <div className="w-[100%] min-h-screen bg-primary pt-8">
        <div className="w-[70%] mx-auto flex flex-col gap-2">
          <div className="text-gray-500 mb-8">
            <Link href={"/"}>Accueil /</Link> {"Products"}
          </div>
          <div className="flex mb-4 justify-between flex-wrap items-center ">
            <Select options={categories} />
            <p className="py-2">
              <strong>
                {productsCount > 1
                  ? `${productsCount} Products`
                  : `${productsCount} Product`}{" "}
              </strong>
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-8">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
