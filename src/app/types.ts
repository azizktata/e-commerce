import { Prisma } from "@prisma/client";
type ProductWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;
export interface Item extends ProductWithImages{
    quantity?: number;


  }


  