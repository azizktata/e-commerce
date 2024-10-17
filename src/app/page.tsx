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
// import { productss } from "./types";

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <>
      <Header />
      <main>
        <div className="relative mb-1 h-[500px]">
          <Image
            src="/product.jpg"
            width={1000}
            height={760}
            alt="carousel"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 items-center justify-center flex flex-col gap-4">
            <h1 className="text-white text-4xl">Shop the Best.</h1>
            <p className="text-white">Get the best deals on our products</p>
            <Link href="/products">
              <button className="text-base bg-white text-gray-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </Link>{" "}
          </div>
        </div>

        <div className="flex flex-col gap-1  md:grid md:grid-cols-[repeat(3,1fr)] mb-8">
          <div className="relative">
            <Image
              src="/chair1.webp"
              width={1000}
              height={400}
              alt="carousel"
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 items-start text-white pl-8 pb-16 justify-end flex flex-col gap-4">
              <p className="uppercase">must have</p>
              <h4 className="text-3xl mb-7">Chairs</h4>
              <button className="text-base bg-white text-gray-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/table2.webp"
              width={1000}
              height={400}
              alt="carousel"
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 items-start text-white pl-8 pb-16 justify-end flex flex-col gap-4">
              <p className="uppercase">must have</p>
              <h4 className="text-3xl mb-7">Tables</h4>
              <button className="text-base bg-white text-gray-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/decoration.webp"
              width={1000}
              height={400}
              alt="carousel"
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 items-start text-white pl-8 pb-16 justify-end flex flex-col gap-4">
              <p className="uppercase">must have</p>
              <h4 className="text-3xl mb-7">Accessories</h4>
              <button className="text-base bg-white text-gray-800 font-bold px-7 py-2 rounded-sm hover:scale-x-1 hover:scale-y-1 ">
                Shop now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-2 md:flex-row w-[85%] mx-auto justify-between mb-20">
          <div className="flex items-baseline gap-2">
            <TruckIcon className="h-4 w-4 text-black-500" />
            <div className="service-content">
              <h4 className="service-title">Free sipping</h4>
              <p>Get free shipping on orders of $100 or more</p>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <PhoneIcon className="h-4 w-4 text-black-500" />
            <div className="service-content">
              <h4 className="service-title">Customer service</h4>
              <p>A question? Please contact us at 123-456-7890</p>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <MegaphoneIcon className="h-4 w-4 text-black-500" />
            <div className="service-content">
              <h4 className="service-title">Refer a friend</h4>
              <p>Refer a friend and get 15% off each other</p>
            </div>
          </div>
        </div>

        <div className="mb-20 w-[100%]">
          <h2 className="text-center text-xl mb-8">Featured products</h2>
          <Slider
            id="slider"
            sliderClass="flex gap-1 overflow-x-auto custom-scrollbar  justify-around"
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </Slider>
        </div>
        <div className="mb-20 w-[100%]">
          <h2 className="text-center text-xl mb-8">New products</h2>
          <Slider
            id="slider2"
            sliderClass="flex gap-1 overflow-x-auto custom-scrollbar justify-around "
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
