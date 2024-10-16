import Link from "next/link";
import Header from "../ui/header";
import Card from "../ui/card";
import Select from "../ui/select";
import { productss } from "../types";

export default async function Products() {
  const categories: string[] = ["tables", "chairs", "accessories"];
  return (
    <>
      <Header />

      <div className="w-[100%] pt-8">
        <div className="w-[90%] mx-auto flex flex-col gap-2">
          <div className="text-gray-500 mb-8">
            <Link href={"."}>Accueil /</Link> <span> Voyages</span>
          </div>
          <div className=" mb-4">
            <Select options={categories} />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-8">
            {productss.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
