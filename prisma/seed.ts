import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialProducts: Prisma.ProductCreateInput[] = [
    {
        name: 'Product 1',
        price: 1000,
        description: 'This is product 1',
        image: '/product.jpg',
        category: 'kitchen',
        slug: 'product-1'
    },
    {
        name: 'Product 2',
        price: 2000,
        description: 'This is product 2',
        image: '/product.jpg',
        category: 'kitchen',
        slug: 'product-2'
    },
    {
        name: 'Product 3',
        price: 3000,
        description: 'This is product 3',
        image: '/product.jpg',
        category: 'others',
        slug: 'product-3'

    }
]

// const intialUsers: Prisma.UserCreateInput[] = [
//     {
//         email: 'aziz@gmail.com',
//         username: 'Aziz',
//         password: 'password',
//         phone: '123456',
//         address: 'Tunis, Ben arous'

//     },
//     {
//         email: 'aymen@gmail.com',
//         username: 'aymen',
//         password: 'password',
//         phone: '845214',
//         address: 'Tunis, Ezzahra'
//     }
// ]

async function main() {
    for (const product of initialProducts) {
        await prisma.product.create({
            data: product
        })
    }
    // for (const user of intialUsers) {
    //     await prisma.user.create({
    //         data: user
    //     })
    // }

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })