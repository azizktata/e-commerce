import Image from "next/image";
import Header from "./ui/header";

import Link from "next/link";
import {
  TruckIcon,
  PhoneIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import Slider from "./ui/slider";
import Card from "./ui/card";
import prisma from "@/lib/db";
import Carousel from "./ui/carousel";
// import { productss } from "./types";

export default async function Home() {
  const products = await prisma.product.findMany({
    include: {
      categories: true,
      images: {
        select: {
          url: true,
        },
      },
    },
  });
  return (
    <>
      <Header />
      <main>
        <div className="relative w-[100%] mx-auto  rounded-lg mb-1 ">
          <Carousel>
            <Image
              src="/carousel-1.webp"
              width={1000}
              height={760}
              alt="carousel"
              className="object-cover w-full h-full overflow-hidden object-bottom"
            />
            <Image
              src="/carousel-2.png"
              width={1000}
              height={760}
              alt="carousel"
              className="object-cover w-full h-full"
            />
            <Image
              src="/carousel-3.png"
              width={1000}
              height={760}
              alt="carousel"
              className="object-cover w-full h-full"
            />
          </Carousel>
          {/* <div className="absolute inset-0 items-center justify-center flex flex-col gap-4">
            <h1 className="text-white text-4xl">Shop the Best.</h1>
            <p className="text-white">Get the best deals on our products</p>
            <Link href="/products">
              <button className="text-base bg-white text-gray-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </Link>{" "}
          </div> */}
        </div>

        <div className="w-[100%] flex flex-col gap-1  md:grid md:grid-cols-[repeat(3,1fr)] mb-20">
          <div className=" bg-gray-100 relative">
            <Image
              src="/cat-2.jpg"
              width={1000}
              height={400}
              alt="carousel"
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 items-start text-white pl-8 pb-16 justify-end flex flex-col gap-4">
              <p className="uppercase">must have</p>
              <h4 className="text-3xl text-gray-800 font-bold mb-7">
                For Cats
              </h4>
              <button className="text-base bg-gray-900 text-white-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </div>
          </div>
          <div className=" bg-gray-100 relative">
            <Image
              src="/dog-2.jpg"
              width={1000}
              height={400}
              alt="carousel"
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 items-start text-white pl-8 pb-16 justify-end flex flex-col gap-4">
              <p className="uppercase">must have</p>
              <h4 className="text-3xl text-gray-800 font-bold mb-7">
                For Dogs
              </h4>
              <button className="text-base bg-gray-900 text-white-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </div>
          </div>
          <div className="relative bg-">
            <Image
              src="/toys.jpg"
              width={1000}
              height={400}
              alt="carousel"
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 items-start text-white pl-8 pb-16 justify-end flex flex-col gap-4">
              <p className="uppercase">must have</p>
              <h4 className="text-3xl mb-7">Toys</h4>
              <button className="text-base bg-gray-900 text-white-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center text-2xl font-bold mb-8">
            Browse By Category
          </h2>

          <div className="flex gap-4  items-center justify-center mb-20">
            {/* Dog Card */}
            <div className="flex flex-col bg-gray-50 items-center gap-4 border p-6 px-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-full p-4">
                <span className="text-3xl">🐶</span>
              </div>
              <h4 className="service-title text-lg font-semibold">Dogs</h4>
            </div>

            {/* Cat Card */}
            <div className="flex flex-col bg-gray-50 items-center gap-4 border p-6 px-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-full p-4">
                <span className="text-3xl">🐱</span>
              </div>
              <h4 className="service-title text-lg font-semibold">Cats</h4>
            </div>

            {/* All Animals Card */}
            <div className="flex flex-col bg-gray-50 items-center gap-4 border p-6 px-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-full p-4">
                <span className="text-3xl">🐾</span>
              </div>
              <h4 className="service-title text-lg font-semibold">All</h4>
            </div>
          </div>
        </div>

        {/* <div className="mb-20 w-[100%]">
          <h2 className="text-center text-2xl font-bold mb-8">
            Featured Products
          </h2>
          <Slider
            id="slider"
            sliderClass="flex gap-1 overflow-x-auto custom-scrollbar  justify-around"
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </Slider>
        </div> */}
        <div className="mb-20  ">
          <h2 className="text-center text-2xl font-bold mb-8">
            Explore Products
          </h2>
          <div className=" flex flex-col justify-center items-center gap-8 md:gap-2 md:grid md:grid-cols-[repeat(2,minmax(280px,1fr))] lg:grid-cols-[repeat(3,minmax(280px,1fr))] w-[70%] mx-auto ">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="mb-20 w-[90%] mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8">
            Featured Products
          </h2>
          <Slider
            id="slider"
            sliderClass="flex gap-4 overflow-x-auto custom-scrollbar  "
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </main>
      {/* <footer>
        <p>&copy; 2024, #SOKOON Shop</p>
      </footer> */}
    </>
  );
}
