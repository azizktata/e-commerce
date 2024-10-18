// app/dashboard/page.js
import { PrismaClient } from "@prisma/client";
import "chart.js/auto"; // Automatically register the required components
import TopProductsChart from "../ui/topProductsChart";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import OrderTrendsChart from "../ui/orderTrendsChart";
import OrderStatusDropdown from "../ui/orderStatusDropdown";

const prisma = new PrismaClient();

const Dashboard = async () => {
  const { isAuthenticated, getPermission } = await getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/");
  }
  const requieredPermission = await getPermission("admin");
  if (!requieredPermission) {
    return redirect("/");
  }
  // const roles = await getRoles();
  // if (!roles?.find((role) => role.key === "admin")) {
  //   return redirect("/"); // Redirect to home or an unauthorized page
  // }
  const totalUsers = await prisma.user.count();
  const totalProducts = await prisma.product.count();
  const totalOrders = await prisma.order.count();

  const orders = await prisma.order.findMany({
    include: {
      items: { include: { product: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  // Calculate total revenue for the current month and today
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const totalRevenueThisMonth = await prisma.order.aggregate({
    where: {
      createdAt: {
        gte: firstDayOfMonth,
        lt: new Date(today.getFullYear(), today.getMonth() + 1, 1), // Start of the next month
      },
    },
    _sum: {
      totalPrice: true,
    },
  });

  const totalRevenueToday = await prisma.order.aggregate({
    where: {
      createdAt: {
        gte: new Date(today.setHours(0, 0, 0, 0)),
        lt: new Date(today.setHours(23, 59, 59, 999)), // End of the day
      },
    },
    _sum: {
      totalPrice: true,
    },
  });

  // Get top 5 sold products
  const topProducts = await prisma.orderItem.groupBy({
    by: ["productId"],
    _sum: {
      quantity: true,
    },
    orderBy: {
      _sum: {
        quantity: "desc",
      },
    },
    take: 5,
  });

  // Fetch product details separately
  const productDetails = await prisma.product.findMany({
    where: {
      id: {
        in: topProducts.map((item) => item.productId),
      },
    },
  });

  // Merge product details with top products
  const topProductsWithDetails = topProducts.map((item) => ({
    ...item,
    product: productDetails.find((product) => product.id === item.productId),
  }));

  // Format data for Chart.js
  const productLabels = topProductsWithDetails.map(
    (item) => item.product?.name
  );
  const productSales = topProductsWithDetails.map((item) => item._sum.quantity);

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - 7); // Past 7 days

  // Fetching Average Order Value
  const averageOrderValue = await prisma.order.aggregate({
    _avg: {
      totalPrice: true,
    },
  });

  // Fetching New Users This Month
  const newUsersThisMonth = await prisma.user.count({
    where: {
      createdAt: {
        gte: firstDayOfMonth,
      },
    },
  });

  // Fetch Order Trends for the past week
  const ordersLastWeek = await prisma.order.groupBy({
    by: ["createdAt"],
    _count: {
      id: true,
    },
    where: {
      createdAt: {
        gte: startOfWeek,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  // Prepare data for the line chart
  const orderTrendLabels = ordersLastWeek.map((order) =>
    new Date(order.createdAt).toLocaleDateString()
  );
  const orderTrendData = ordersLastWeek.map((order) => order._count.id);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-2xl">{totalUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Products</h3>
          <p className="text-2xl">{totalProducts}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Orders</h3>
          <p className="text-2xl">{totalOrders}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Average Order Value</h3>
          <p className="text-2xl">
            ${averageOrderValue._avg.totalPrice?.toFixed(2) || 0}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">New Users This Month</h3>
          <p className="text-2xl">{newUsersThisMonth}</p>
        </div>
      </div>

      <div className="p-8 bg-white  rounded-lg shadow mb-8">
        <h1 className="text-2xl font-bold mb-6">Orders Dashboard</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Order ID</th>
              <th className="border border-gray-300 p-2">User</th>
              <th className="border border-gray-300 p-2">Total Price</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border border-gray-300 p-2">{order.id}</td>
                <td className="border border-gray-300 p-2">{order.userName}</td>
                <td className="border border-gray-300 p-2">
                  ${order.totalPrice}
                </td>
                <td className="border border-gray-300 p-2">
                  <OrderStatusDropdown
                    orderId={order.id}
                    currentStatus="Pending"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Revenue */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Revenue This Month</h3>
          <p className="text-2xl">
            ${totalRevenueThisMonth._sum.totalPrice || 0}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Revenue Today</h3>
          <p className="text-2xl">${totalRevenueToday._sum.totalPrice || 0}</p>
        </div>
      </div>

      {/* Top 5 Sold Products Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Top 5 Sold Products</h3>
        <TopProductsChart
          productLabels={productLabels}
          productSales={productSales}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Order Trends (Last 7 Days)
        </h3>
        <OrderTrendsChart labels={orderTrendLabels} data={orderTrendData} />
      </div>

      {/* Recent Orders Table */}
      {/* Add your existing recent orders table here */}
    </div>
  );
};

export default Dashboard;
