"use client";
import { addProduct } from "@/actions/actions";
import toast from "react-hot-toast";

interface Category {
  id: string;
  name: string;
}

interface ProductFormProps {
  categories: Category[];
}

export default function ProductForm({ categories }: ProductFormProps) {
  async function handleSubmit(formData: FormData) {
    const res = await addProduct(formData);
    if (res) {
      if (res?.success) {
        toast.success(res.message);
      } else {
        toast.error(res!.message);
      }
    }
  }
  return (
    <form className="flex flex-col" action={handleSubmit}>
      <div className="m-4">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="block border" />
      </div>

      <div className="m-4">
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" className="block border" />
      </div>

      <div className="m-4">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          className="block border"
        />
      </div>
      <div className="m-4">
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" className="block border" />
      </div>

      <div className="m-4">
        <label htmlFor="description">Description</label>
        <textarea
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
          Add Product
        </button>
      </div>
    </form>
  );
}
