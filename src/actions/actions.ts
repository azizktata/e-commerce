"use server";

import { Item } from "@/app/types";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createOrder(
  formData: FormData,
  totaPrice: number,
  products: Item[]
) {
  try {
    if (products.length <= 0) {
      return { success: false, message: "No items in cart" };
    }
    const res = await prisma.order.create({
      data: {
        userName: formData.get("name") as string,
        userEmail: formData.get("email") as string,
        userPhone: formData.get("phone") as string,
        userAddress: formData.get("address") as string,

        totalPrice: totaPrice,
        items: {
          create: products.map((product) => ({
            quantity: product.quantity || 0,
            product: {
              connect: {
                id: product.id,
              },
            },
          })),
        },
        user: {
          connectOrCreate: {
            where: { email: formData.get("email") as string },
            create: {
              username: formData.get("name") as string,
              phone: formData.get("phone") as string,
              address: formData.get("address") as string,
              email: formData.get("email") as string,
            },
          },
        },
      },
    });
    if (res) {
      
      return {
        success: true,
        message: "Order Created Successfully!",
      };
    }
  } catch  {
    return { success: false, message: "Error creating your order" };
  }
  
}

export async function addProduct(formData: FormData) {
  const { isAuthenticated, getPermission } = await getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/");
  }
  const requieredPermission = await getPermission("admin");
  if (!requieredPermission) {
    return redirect("/");
  }
  try {
    const name = formData.get('name') as string;
    const slug = name.toLowerCase().replace(/\s+/g, '-')
    const image = formData.get('image') as string;
    const price = Number(formData.get('price'));
    const inventory = Number(formData.get('quantity'));
    const description = formData.get('description') as string;
    const newCategory = formData.get('newCategory') as string;
    const selectedCategories = formData.getAll('categories') as string[];
  
    const categoryIds = [...selectedCategories];
  
    // Create a new category if provided
    if (newCategory) {
      const createdCategory = await prisma.category.create({
        data: { name: newCategory, slug: newCategory.toLowerCase().replace(/\s+/g, '-') },
      });
      categoryIds.push(createdCategory.id);
    }
  
    // Create the product with associated categories
    const res = await prisma.product.create({
      data: {
        name,
        slug,
        price,
        inventory,
        description,
        image,
        categories: {
          connect: categoryIds.map((id) => ({ id })),
        },
      },
    });
    if (res) {
      revalidatePath('/admin/inventory');
      return { success: true, message: 'Product added successfully!' };
    }
  } catch  {
    return { success: false, message: 'Error adding product' };
    
  }

  // Revalidate the products page to show the updated data
 
}

export async function updateProduct(formData: FormData) {
  const { isAuthenticated, getPermission } = await getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/");
  }
  const requieredPermission = await getPermission("admin");
  if (!requieredPermission) {
    return redirect("/");
  }
  try {
    const name = formData.get('name') as string;
    const slug = name.toLowerCase().replace(/\s+/g, '-')
    const image = formData.get('image') as string;
    const price = Number(formData.get('price'));
    const inventory = Number(formData.get('quantity'));
    const description = formData.get('description') as string;
    const newCategory = formData.get('newCategory') as string;
    const selectedCategories = formData.getAll('categories') as string[];
  
    const categoryIds = [...selectedCategories];
  
    // Create a new category if provided
    if (newCategory) {
      const createdCategory = await prisma.category.create({
        data: { name: newCategory, slug: newCategory.toLowerCase().replace(/\s+/g, '-') },
      });
      categoryIds.push(createdCategory.id);
    }
  
    // Create the product with associated categories
    const res = await prisma.product.update({
      where: { id: formData.get('id') as string },
      data: {
        name,
        slug,
        price,
        inventory,
        description,
        image,
        categories: {
          connect: categoryIds.map((id) => ({ id })),
        },
      },
    });
    if (res) {
      revalidatePath('/admin/inventory');
      return { success: true, message: 'Product updated successfully!' };
    }
  } catch  {
    return { success: false, message: 'Error updating product' };
    
  }

  // Revalidate the products page to show the updated data
 
}