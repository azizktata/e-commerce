import React from "react";
import AdminSideBar from "../ui/adminSideBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {children} {/* This is where the individual page content will go */}
      </div>
    </div>
  );
}
