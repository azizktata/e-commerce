import Image from "next/image";
import Header from "./ui/header";

import Slider from "./ui/slider";
import Card from "./ui/card";
import prisma from "@/lib/db";
import Carousel from "./ui/carousel";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import { productss } from "./types";

export default async function Home() {
  const products = await prisma.product.findMany({
    include: {
      categories: true,
      images: true,
    },
  });
  return (
    <>
      <Header />
      <main className="bg-primary">
        <div className="relative w-[90%] mx-auto  rounded-lg mb-1 bg-primary">
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

        <div className="w-[90%] mx-auto flex flex-col gap-1  md:grid md:grid-cols-[repeat(3,1fr)] mb-20 ">
          <div className=" bg-gray-100 relative">
            <Image
              src="/cat-2.jpg"
              width={1000}
              height={400}
              alt="carousel"
              className="object-cover w-full h-[300px]"
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
              className="object-cover w-full h-[300px]"
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
              className="object-cover w-full h-[300px]"
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

        {/* <div>
          <h2 className="text-center text-2xl font-bold mb-8">
            Browse By Category
          </h2>

          <div className="flex gap-4  items-center justify-center mb-20">
 
            <div className="flex flex-col bg-gray-50 items-center gap-4 border p-6 px-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-full p-4">
                <span className="text-3xl">🐶</span>
              </div>
              <h4 className="service-title text-lg font-semibold">Dogs</h4>
            </div>


            <div className="flex flex-col bg-gray-50 items-center gap-4 border p-6 px-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-full p-4">
                <span className="text-3xl">🐱</span>
              </div>
              <h4 className="service-title text-lg font-semibold">Cats</h4>
            </div>

            <div className="flex flex-col bg-gray-50 items-center gap-4 border p-6 px-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-full p-4">
                <span className="text-3xl">🐾</span>
              </div>
              <h4 className="service-title text-lg font-semibold">All</h4>
            </div>
          </div>
        </div> */}

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
        <div className="mb-20 bg-primary py-20">
          <h2 className="text-center text-3xl font-normal mb-8 text-secondary uppercase">
            Explore Products
          </h2>
          <div className=" flex flex-col justify-center items-center gap-8 md:gap-2 md:grid md:grid-cols-[repeat(2,minmax(280px,1fr))] lg:grid-cols-[repeat(3,minmax(280px,1fr))] w-[70%] mx-auto ">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className=" bg-white">
          <div className=" w-[90%] mx-auto py-20">
            <h2 className="text-center text-3xl font-normal mb-8 text-secondary uppercase">
              Best Selling Products
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
        </div>

        <div className="bg-secondary py-40 flex flex-col sm:grid sm:grid-cols-[repeat(2,1fr)] items-start gap-4 sm:px-8  ">
          <h2 className="self-center col-span-full text-center text-3xl text-white mb-8">
            About Us
          </h2>
          <Image
            src="/toys.jpg"
            width={1000}
            height={400}
            alt="carousel"
            className="object-cover w-full h-[300px] px-8 "
          />
          <div className="px-8">
            <h2 className="text-6xl text-primary mb-8">Petssy Pet's Food</h2>
            <p className="text-white mb-4">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, andorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
            <button
              className=" flex items-center gap-3 bg-[#3cf084]  hover:text-green-500 hover:bg-transparent hover:border hover:border-green-500  text-[#002a31] text-[20px] leading-[28px] text-center tracking-[-0.2px] 
           rounded-[100px] shadow-none px-6 py-2 transition-colors transitions-border  duration-300"
            >
              shop <ArrowRightIcon className="h-3 w-3" />
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-bg-footer text-secondary py-20 ">
        <div className="w-[90%] mx-auto   grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <p>We are committed to providing the best service and products.</p>
            <p className="mt-2">© 2024 Your Company. All rights reserved.</p>
          </div>

          <div>
            <h2 className="text-lg  font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 flex items-center gap-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-btn-text">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-btn-text">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-btn-text">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-btn-text">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer>
        <p>&copy; 2024, #SOKOON Shop</p>
      </footer> */}
    </>
  );
}
