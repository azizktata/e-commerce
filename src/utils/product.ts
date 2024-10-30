import prisma from "@/lib/db";

export default function getProduct(slug:string) {
    return prisma.product.findUnique({
        where: {
        slug: slug,
        },
        include: {
        images: true,
        },
    });
}