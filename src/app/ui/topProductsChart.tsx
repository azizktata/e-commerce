// components/TopProductsChart.js
"use client"; // Make this a Client Component

import { Bar } from "react-chartjs-2"; // Import Chart.js components
import "chart.js/auto"; // Automatically register the required components

const TopProductsChart = ({
  productLabels,
  productSales,
}: {
  productLabels: (string | undefined)[];
  productSales: (number | null)[];
}) => {
  return (
    <Bar
      data={{
        labels: productLabels,
        datasets: [
          {
            label: "Quantity Sold",
            data: productSales,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
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
            text: "Top 5 Sold Products",
          },
        },
      }}
    />
  );
};

export default TopProductsChart;
