import prisma from "@/lib/db";
import React from "react";

export default async function Users() {
  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: { Orders: true },
      },
    },
  });
  return (
    <div className="min-h-screen">
      {" "}
      <div className="p-8 bg-white  rounded-lg shadow mb-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">User ID</th>
              <th className="border border-gray-300 p-2">UserName</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Orders</th>
              <th className="border border-gray-300 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 p-2">{user.id}</td>
                <td className="border border-gray-300 p-2">{user.username}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.phone}</td>
                <td className="border border-gray-300 p-2">
                  {user._count.Orders}
                </td>
                <td className="border border-gray-300 p-2">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
