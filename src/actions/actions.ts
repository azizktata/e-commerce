"use server";

import { Item } from "@/app/types";
import prisma from "@/lib/db";

import { revalidatePath } from "next/cache";

export async function createOrder(
  formData: FormData,
  totaPrice: number,
  products: Item[]
) {
  try {
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
      revalidatePath("/checkout");
      return {
        success: true,
        message: "Order Created Successfully!",
        redirect: "/",
      };
    }
  } catch  {
    return { success: false, message: "Error creating your order" };
  }
  revalidatePath("/checkout");
}

// export async function createUser(formData:FormData) {
//     try {
//         if (formData.get("password") !== formData.get("confirmPassword")) {
//             return { success: false, message: "Passwords do not match" };
//         }
//         const res = await prisma.user.create({
//             data: {
//                 email: formData.get("email") as string,
//                 username: formData.get("username") as string,
//                 password: formData.get("password") as string,
//                 phone: formData.get("phone") as string,
//                 address: formData.get("address") as string,
//             }
//         })
//         if (res) {
//             revalidatePath("/register");
//             return { success: true, message: "User Created Successfully!", redirect: "/login" };
//         }
//     } catch (error) {
//         if(error instanceof Prisma.PrismaClientKnownRequestError) {
//             if(error.code === "P2002") {
//                 return { success: false, message: "Email already in use" };

//             }
//         }
//         return { success: false, message: "Error creating user" };
//     }

// }
// export async function loginUser(formData:FormData) {
//     try {
//         const user = await prisma.user.findFirst({
//             where: {
//                 email: formData.get("email") as string,
//                 password: formData.get("password") as string
//             }
//         })
//         if (user) {

//             return { success: true, message: "User Logged in Successfully!", redirect: "/" };
//         }
//         return { success: false, message: "Invalid Credentials" };
//     } catch  {
//         return { success: false, message: "Error logging in" };
//     }

// }
