import Image from "next/image";

import Slider from "./ui/slider";
import Card from "./ui/card";
import prisma from "@/lib/db";
import Carousel from "./ui/carousel";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    include: {
      categories: true,
      images: true,
    },
  });
  return (
    <>
      <main className="bg-primary  min-h-screen  w-full ">
        {/* <div className="relative w-[100%] mx-auto  rounded-lg mb-15 bg-white">
          <Carousel>
            <Image
              src="/carousel-demo.webp"
              width={1000}
              height={760}
              alt="carousel"
              className="object-contain w-full h-full overflow-hidden object-left xs:object-bottom"
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
          <div className="absolute inset-y-0 right-0  w-1/2 items-center justify-center flex flex-col gap-4">
            <h1 className="text-secondary text-8xl">Petssy Food.</h1>
            <p className="text-secondary">Get the best deals on our products</p>
            <Link href="/products">
              <button
                className="flex items-center gap-3 bg-[#3cf084] hover:text-green-500 hover:bg-transparent hover:border hover:border-green-500 text-[#002a31] text-[20px] leading-[28px] text-center tracking-[-0.2px] 
           rounded-[100px] shadow-none px-6 py-2 transition-colors border-transparent duration-300"
              >
                shop <ArrowRightIcon className="h-3 w-3" />
              </button>
            </Link>{" "}
          </div>
        </div> */}
        <div className="sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-[repeat(2,1fr)]  w-[100%] mx-auto  rounded-lg mb-15 bg-white mb-24">
          <Carousel>
            <Image
              src="/carousel-demo.webp"
              width={1000}
              height={760}
              alt="carousel"
              className="object-contain w-full h-full overflow-hidden  "
            />
            <Image
              src="/carousel-demo2.webp"
              width={1000}
              height={760}
              alt="carousel"
              className="object-contain w-full h-full overflow-hidden  "
            />
          </Carousel>
          <div className=" w-full pb-16 md:p-0 items-center justify-center flex flex-col gap-4">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                className="fill-green-500"
                d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
              />
            </svg>
            <h1 className="text-secondary text-6xl lg:text-7xl xl:tex-8xl ">
              Petssy Food.
            </h1>
            <p className="text-secondary text-xl">
              Get the best deals on our products
            </p>
            <Link href="/products">
              <button
                className="flex items-center gap-3 bg-[#3cf084] hover:text-green-500 hover:bg-transparent hover:border hover:border-green-500 text-[#002a31] text-2xl leading-[28px] text-center tracking-[-0.2px] 
           rounded-[100px] shadow-none px-8 py-2.5 transition-colors border-transparent duration-300"
              >
                shop <ArrowRightIcon className="h-3 w-3" />
              </button>
            </Link>{" "}
          </div>
        </div>

        <div className="w-[90%] md:w-[50%] mx-auto mb-24">
          <div className="flex flex-col items-center pb-8 ">
            <svg
              className="w-8 h-8 cursor-pointer "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                className=" fill-green-500 "
                d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2l192 0c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336l-192 0c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z"
              />
            </svg>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Browse By Category
            </h2>

            <div className="flex justify-center items-center mt-2">
              <span className="w-10 border-t border-gray-300"></span>
              <span className="mx-1 text-green-900">&#10072;</span>
              <span className="mx-1 text-green-900">&#10072;</span>
              <span className="mx-1 text-green-900">&#10072;</span>
              <span className="w-10 border-t border-gray-300"></span>
            </div>
          </div>
          {/* <div className="text-start py-8 ">
            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Browse By Category
            </h2>
          </div>
          <div className=" flex flex-col gap-4  md:grid md:grid-cols-[repeat(3,1fr)] mb-20 ">
            <div className=" bg-gray-100 relative rounded-lg">
              <Image
                src="/cat.png"
                width={1000}
                height={400}
                alt="carousel"
                className="object-cover w-full h-[200px] bg-blue-100"
              />
              <div className=" items-start text-white  justify-end flex flex-col gap-4 px-6 py-4">
                <div className="flex w-full justify-between items-center">
                  <h4 className="text-xl text-gray-800 font-bold"> Cats</h4>

                  <ArrowRightIcon className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-500">5 products</p>
              </div>
            </div>
            <div className=" bg-gray-100 relative rounded-lg">
              <Image
                src="/dog-2.jpg"
                width={1000}
                height={400}
                alt="carousel"
                className="object-cover w-full h-[200px]"
              />
              <div className=" items-start text-white  justify-end flex flex-col gap-4 px-6 py-4">
                <div className="flex w-full justify-between items-center">
                  <h4 className="text-xl text-gray-800 font-bold"> Dogs</h4>
                  <ArrowRightIcon className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-500">5 products</p>
              </div>
            </div>
            <div className=" bg-gray-100 relative rounded-lg">
              <Image
                src="/toys.jpg"
                width={1000}
                height={400}
                alt="carousel"
                className="object-cover w-full h-[200px]"
              />
              <div className=" items-start text-white  justify-end flex flex-col gap-4 px-6 py-4">
                <div className="flex w-full justify-between items-center">
                  <h4 className="text-xl text-gray-800 font-bold">
                    {" "}
                    Accessories
                  </h4>
                  <ArrowRightIcon className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-500">5 products</p>
              </div>
            </div>
          </div> */}
          <div className=" mx-auto grid grid-cols-3 gap-4 p-6 bg-white  shadow-md rounded-lg ">
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 576 512"
              >
                <path
                  className="fill-secondary cursor-pointer hover:fill-green-500 transition-colors duration-300"
                  d="M320 192l17.1 0c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4l0 4 0 32 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8L280 448l56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-223.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3l0 85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5s0 0 0 0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32c0 0 0 0 0 0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128c0 0 0 0 0 0l0-96 0-20 0-1.3C352 4.8 356.7 .1 362.6 0l.2 0c3.3 0 6.4 1.6 8.4 4.2c0 0 0 0 0 .1L384 21.3l27.2 36.3L416 64l64 0 4.8-6.4L512 21.3 524.8 4.3c0 0 0 0 0-.1c2-2.6 5.1-4.2 8.4-4.2l.2 0C539.3 .1 544 4.8 544 10.7l0 1.3 0 20 0 96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
                />
              </svg>

              <span className="text-sm font-medium text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">
                Cats
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 576 512"
              >
                <path
                  className="fill-secondary cursor-pointer hover:fill-green-500 transition-colors duration-300"
                  d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32l52.1 0c12.7 0 24.9 5.1 33.9 14.1L496 64l56 0c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-32 0-16 0-21.3 0-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-115.2c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2L160 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-230.2c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192l30 0 16 0 159.8 0L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">
                Dogs
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 ">
              <svg
                className="w-8 h-8 cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  className=" fill-secondary hover:fill-green-500 transition-colors duration-300"
                  d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2l192 0c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336l-192 0c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-600  hover:text-green-500 transition-colors duration-300 cursor-pointer">
                Toys
              </span>
            </div>

            {/* <div className="flex flex-col items-center justify-center space-y-2">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
              <span className="text-sm font-medium text-gray-600">More</span>
            </div> */}
          </div>
        </div>

        <div className="mb-15 w-[80%]  md:w-[70%] mx-auto ">
          <div className="text-center py-8 ">
            <p className="text-sm text-green-500 font-semibold tracking-wide">
              Special Products
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Trending Products
            </h2>

            <div className="flex justify-center items-center mt-2">
              <span className="w-10 border-t border-gray-300"></span>
              <span className="mx-1 text-green-900">&#10072;</span>
              <span className="mx-1 text-green-900">&#10072;</span>
              <span className="mx-1 text-green-900">&#10072;</span>
              <span className="w-10 border-t border-gray-300"></span>
            </div>
          </div>
          <div className=" flex flex-col justify-center  gap-8 md:gap-2 md:grid md:grid-cols-[repeat(2,minmax(280px,1fr))] lg:grid-cols-[repeat(3,minmax(280px,1fr))] w-[100%] mx-auto ">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mb-15 w-[100%] md:w-[85%] mx-auto">
          <div className=" py-20">
            <div className="text-center py-8 ">
              <p className="text-sm text-green-500 font-semibold tracking-wide">
                Special Products
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Best Selling Products
              </h2>

              <div className="flex justify-center items-center mt-2">
                <span className="w-10 border-t border-gray-300"></span>
                <span className="mx-1 text-green-900">&#10072;</span>
                <span className="mx-1 text-green-900">&#10072;</span>
                <span className="mx-1 text-green-900">&#10072;</span>
                <span className="w-10 border-t border-gray-300"></span>
              </div>
            </div>
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

        <div className="bg-secondary py-40 flex flex-col  gap-4 ">
          <div className="px-8 w-[70%] mx-auto flex flex-col justify-center items-center xs:items-start ">
            <h2 className="text-6xl text-primary mb-8">Petssy Pet's Food</h2>
            <p className="text-white mb-16 max-w-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, andorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <Link href="/products">
              <button
                className="flex items-center gap-3 bg-[#3cf084] hover:text-green-500 hover:bg-transparent hover:border hover:border-green-500 text-[#002a31] text-[20px] leading-[28px] text-center tracking-[-0.2px] 
              rounded-[100px] shadow-none px-6 py-2 transition-colors border-transparent duration-300"
              >
                shop <ArrowRightIcon className="h-3 w-3" />
              </button>
            </Link>
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
