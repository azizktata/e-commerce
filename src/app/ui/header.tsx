"use client";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "../store/hooks";

export default function Header() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <header>
      <div className="w-[90%] mx-auto py-4 flex flex-col  md:flex-row md:justify-between md:items-center">
        <div className=" text-center ">
          <h1>
            <Link className="text-2xl" href="/">
              #SOKOON
            </Link>
          </h1>
          <p className="text-sm text-yellow-400">hand-made wood crafts</p>
        </div>
        <nav>
          <ul className="flex gap-4 justify-center py-3 uppercase items-center">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="./products">Shop</Link>
            </li>
            <li>
              <Link href="../login">Login</Link>
            </li>
            <li className="relative cursor-pointer">
              <a href="#sidebar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 576 512"
                >
                  {" "}
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>

                <div className="absolute bottom-2 left-4">
                  <span>{cart.items.length}</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}