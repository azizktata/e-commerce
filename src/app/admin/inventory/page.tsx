import ProductForm from "@/app/ui/productForm";
import UpdateProductForm from "@/app/ui/updateProductForm";
import prisma from "@/lib/db";
import React from "react";

export default async function page() {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany({
    include: {
      categories: true,
      _count: {
        select: {
          items: true,
        },
      },
    },
  });

  return (
    <>
      <div className="overflow-x-auto mb-8">
        <h2>Products</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Inventory</th>
              <th className="py-3 px-6 text-left">Count Orders</th>
              <th className="py-3 px-6 text-left">Categories</th>
              <th className="py-3 px-6 text-left">Date Created</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{product.id}</td>
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6">${product.price}</td>
                <td className="py-3 px-6">{product.inventory}</td>
                <td className="py-3 px-6">{product._count.items}</td>
                <td className="py-3 px-6">
                  {product.categories
                    .map((category) => category.name)
                    .join(", ")}
                </td>
                <td className="py-3 px-6">
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex min-h-screen items-start justify-center bg-gray-100 p-4">
        {/* Product Details Card */}
        <div className="w-2/3 mr-2 flex flex-col gap-2  md:grid md:grid-cols-[repeat(3,1fr)] ">
          {products.map((product) => (
            <div key={product.id}>
              <UpdateProductForm product={product} categories={categories} />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 ">
          <h2 className="text-xl font-semibold mb-4">Add or Update Product</h2>
          <ProductForm categories={categories} />
        </div>
      </div>
    </>
  );
}
