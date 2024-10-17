"use server";

import { Item } from "@/app/types";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

import { revalidatePath } from "next/cache";

export async function createOrder(formData:FormData, totaPrice: number, products: Item[]) {
    
    try {
        // :products.map((product) => ({ id: product.id }))
        await prisma.order.create({
            data: {
                userName: formData.get("name") as string,
                userEmail: formData.get("email") as string,
                userPhone: formData.get("phone") as string,
                userAddress: formData.get("address") as string,
                // productName: productName,
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
                    connect: {
                        email: formData.get("email") as string
                    }
                }
    
            }
        })
    } catch (error) {
        console.log(error)
    }
    revalidatePath("/checkout")
}

export async function createUser(formData:FormData) {
    try {
        if (formData.get("password") !== formData.get("confirmPassword")) {
            return { success: false, message: "Passwords do not match" };
        }
        const res = await prisma.user.create({
            data: {
                email: formData.get("email") as string,
                username: formData.get("username") as string,
                password: formData.get("password") as string,
                phone: formData.get("phone") as string,
                address: formData.get("address") as string,
            }
        })
        if (res) {
            revalidatePath("/register");
            return { success: true, message: "User Created Successfully!", redirect: "/login" };
        }
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) { 
            if(error.code === "P2002") {
                return { success: false, message: "Email already in use" };
               
                
            }
        }
        return { success: false, message: "Error creating user" };
    }
    
}
export async function loginUser(formData:FormData) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: formData.get("email") as string,
                password: formData.get("password") as string
            }
        })
        if (user) {
            
            return { success: true, message: "User Logged in Successfully!", redirect: "/" };
        }
        return { success: false, message: "Invalid Credentials" };
    } catch  {
        return { success: false, message: "Error logging in" };
    }
    
}