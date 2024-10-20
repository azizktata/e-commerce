"use client";
import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Carousel({ children }) {
  return (
    <>
      <div className="sliderCarousel h-[800px]">{children}</div>
      <div className="arrows z-10 absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-4">
        <ChevronLeftIcon
          id="prev"
          onClick={() => {
            const slider = document.querySelector(".sliderCarousel");
            slider?.prepend(slider.querySelector("img:last-child") as Node);
          }}
          className="text-gray-500 h-7 w-7 bg-white rounded-2xl p-1 cursor-pointer"
        />

        <ChevronRightIcon
          id="next"
          onClick={() => {
            const slider = document.querySelector(".sliderCarousel");
            slider?.append(slider.querySelector("img:first-child") as Node);
          }}
          className="text-gray-500 h-7 w-7 bg-white rounded-2xl p-1 cursor-pointer"
        />
      </div>
    </>
  );
}
