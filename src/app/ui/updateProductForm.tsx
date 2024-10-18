"use client";
import { updateProduct } from "@/actions/actions";
import { Product } from "@prisma/client";
import React from "react";
import toast from "react-hot-toast";
interface Category {
  id: string;
  name: string;
}

export default function UpdateProductForm({
  product,
  categories,
}: {
  product: Product;
  categories: Category[];
}) {
  async function handleSubmit(formData: FormData) {
    const res = await updateProduct(formData);
    if (res) {
      if (res?.success) {
        toast.success(res.message);
      } else {
        toast.error(res!.message);
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between ">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <button className="self-start text-2xl">&times;</button>
      </div>
      <form
        className="flex flex-col md:grid md:grid-cols-[repeat(2,1fr)] items-center"
        action={handleSubmit}
      >
        <div className="m-4">
          <label htmlFor="id">id</label>
          <input
            value={product.id}
            type="text"
            name="id"
            id="id"
            className="block border"
          />
        </div>
        <div className="m-4">
          <label htmlFor="name">Name</label>
          <input
            defaultValue={product.name}
            type="text"
            name="name"
            id="name"
            className="block border"
          />
        </div>

        <div className="m-4">
          <label htmlFor="price">Price</label>
          <input
            defaultValue={product.price}
            type="number"
            name="price"
            id="price"
            className="block border"
          />
        </div>

        <div className="m-4">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={product.inventory}
            className="block border"
          />
        </div>
        <div className="m-4">
          <label htmlFor="image">Image</label>
          <input
            defaultValue={product.image}
            type="text"
            name="image"
            id="image"
            className="block border"
          />
        </div>

        <div className="m-4">
          <label htmlFor="description">Description</label>
          <textarea
            defaultValue={product.description}
            name="description"
            id="description"
            className="block border"
          ></textarea>
        </div>
        {categories.length > 0 && (
          <div className="m-4">
            <h3>Select Existing Categories</h3>
            {categories.map((category) => (
              <div key={category.id}>
                <input
                  type="checkbox"
                  name="categories"
                  value={category.id}
                  id={category.id}
                  defaultChecked={product.categories.some(
                    (c) => c.id === category.id
                  )}
                />
                <label htmlFor={category.id} className="ml-2">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        )}

        <div className="m-4">
          <label htmlFor="newCategory">Or Add New Category</label>
          <input
            type="text"
            name="newCategory"
            id="newCategory"
            className="block border"
          />
        </div>

        <div className="m-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
