"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav({ slug }: { slug: string }) {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 text-xl mb-8">
      <Link
        href={`/products/${slug}`}
        className={
          pathname === `/products/${slug}` ? "border-b border-green-500" : ""
        }
      >
        Details
      </Link>
      <Link
        href={`/products/${slug}/order`}
        className={
          pathname === `/products/${slug}/order`
            ? "border-b border-green-500"
            : ""
        }
      >
        Order
      </Link>
    </nav>
  );
}
