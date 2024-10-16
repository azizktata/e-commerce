"use server";

import prisma from "@/lib/db";

import { revalidatePath } from "next/cache";

export async function createOrder(formData:FormData, totaPrice: number, products) {
    
    await prisma.order.create({
        data: {
            userName: formData.get("name") as string,
            userEmail: formData.get("email") as string,
            userPhone: formData.get("phone") as string,
            userAddress: formData.get("address") as string,
            // productName: productName,
            totalPrice: totaPrice,
            products: {
                connect: products.map((product) => ({ id: product.id })) // Correctly connecting products
              },
            user: {
                connect: {
                    email: formData.get("email") as string
                }
            }

        }
    })
    revalidatePath("/checkout")
}