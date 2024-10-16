"use client";
import React from "react";

import { ReactNode } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Slider({
  children,
  sliderClass,
  id,
}: {
  children: ReactNode;
  sliderClass: string;
  id: string;
}) {
  React.useEffect(() => {
    const cardList = document.getElementById(`${id}`);
    const maxScrollLeft = cardList
      ? cardList.scrollWidth - cardList.clientWidth
      : 0;

    const handleScroll = () => {
      const prevButton = document.getElementById(`prev-slide ${id}`);
      const nextButton = document.getElementById(`next-slide ${id}`);

      if (cardList && prevButton && nextButton) {
        prevButton.style.display = cardList.scrollLeft === 0 ? "none" : "block";
        nextButton.style.display =
          cardList.scrollLeft == maxScrollLeft ? "none" : "block";
      }
    };

    cardList?.addEventListener("scroll", handleScroll);

    return () => {
      cardList?.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <div className="relative w-[80%] mx-auto">
      <ChevronLeftIcon
        // style={{ color: "#0e61a9", width: "16px", height: "16px" }}
        id={`prev-slide ${id}`}
        className="absolute h-4 w-4 text-gray-500 top-[50%] transform -translate-y-1/2 -left-[50px] "
        onClick={() => {
          const cardList = document.getElementById(`${id}`);
          cardList?.scrollBy({
            left: cardList.clientWidth * -1,
            behavior: "smooth",
          });
        }}
      />
      <div id={`${id}`} className={`${sliderClass}`}>
        {children}
      </div>
      <ChevronRightIcon
        id={`next-slide ${id}`}
        className="absolute h-4 w-4 text-gray-500 top-[50%] transform -translate-y-1/2 -right-[50px] "
        onClick={() => {
          const cardList = document.getElementById(`${id}`);

          cardList?.scrollBy({
            left: cardList.clientWidth * 1,
            behavior: "smooth",
          });
        }}
      />{" "}
      {/* <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div> */}
    </div>
  );
}
