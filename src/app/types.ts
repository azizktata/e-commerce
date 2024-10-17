import { Product } from "@prisma/client";

export interface Item extends Product{
    quantity?: number;


  }


  