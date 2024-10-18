"use client";

import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminSideBar() {
  const pathname = usePathname();
  const { user } = useKindeBrowserClient();
  return (
    <aside className="w-64 h-auto bg-gray-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              className={`${
                pathname === "/admin"
                  ? "border-b border-solid border-black"
                  : ""
              }`}
              href="/admin"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className={`${
                pathname === "/admin/users"
                  ? "border-b border-solid border-black"
                  : ""
              }`}
              href="/admin/users"
            >
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className={`${
                pathname === "/admin/inventory"
                  ? "border-b border-solid border-black"
                  : ""
              }`}
              href="/admin/inventory"
            >
              Inventory
            </Link>
          </li>

          {user && (
            <>
              <li className="mt-20">{user.email}</li>

              <LogoutLink>
                <li className="mt-4 ">Logout</li>
              </LogoutLink>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}
