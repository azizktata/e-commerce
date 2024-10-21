// components/OrderTrendsChart.js
"use client";

import { Line } from "react-chartjs-2";
import "chart.js/auto";

const OrderTrendsChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: "Orders",
            data: data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4, // Add smoothness to the line
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Order Trends (Last 7 Days)",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Number of Orders",
            },
            beginAtZero: true,
          },
        },
      }}
    />
  );
};

export default OrderTrendsChart;
