import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Importing Chart.js auto for ease

const data = [
  { name: "Jan", earnings: 30000 },
  { name: "Feb", earnings: 20000 },
  { name: "Mar", earnings: 40000 },
  { name: "Apr", earnings: 25000 },
  { name: "May", earnings: 45000 },
  { name: "Jun", earnings: 20000 },
  { name: "Jul", earnings: 15000 },
  { name: "Aug", earnings: 10000 },
  { name: "Sep", earnings: 35000 },
  { name: "Oct", earnings: 45000 },
  { name: "Nov", earnings: 50000 },
  { name: "Dec", earnings: 30000 },
];

const EarningsChart = () => {
  const [activeButton, setActiveButton] = useState("Yearly");
  const chartRef = useRef(null);

  const formatYAxis = (value) => `$${(value / 1000).toFixed(1)}k`;

  useEffect(() => {
    const topTwoIndices = [...data]
      .sort((a, b) => b.earnings - a.earnings)
      .slice(0, 2)
      .map((entry) => data.indexOf(entry));
    const getBarColor = (index) => {
      if (topTwoIndices.includes(index)) {
        return "#029783"; // Green color for the top two bars
      }
      return "#CCCCCC";
    };
    let chartInstance = null;

    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: data.map((item) => item.name),
          datasets: [
            {
              label: "Earnings",
              backgroundColor: data.map((_, index) => getBarColor(index)),
              data: data.map((item) => item.earnings),
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              mode: "nearest",
              intersect: false,
              position: "nearest",
            },
          },
          scales: {
            x: {
              ticks: {
                color: "black",
                font: {
                  size: window.innerWidth <= 640 ? 6 : 10, // Adjust font size based on screen width
                },
              },
              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                callback: formatYAxis,
                color: "black",
                font: {
                  size: window.innerWidth <= 640 ? 6 : 10, // Adjust font size based on screen width
                },
              },
              grid: {
                display: false,
              },
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          },
          indexAxis: "x", // Set x-axis as the category axis
          datasets: {
            bar: {
              barThickness: window.innerWidth <= 640 ? 10 : 20, // Adjust bar thickness based on screen width
              categorySpacing: window.innerWidth <= 640 ? 2 : 5, // Adjust category spacing based on screen width
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Removed activeButton from dependency array

  return (
    <div className="pt-4 bg-white rounded-3xl shadow-md font-bold w-full">
      <div className="flex justify-end mb-4">
        {["Weekly", "Monthly", "Yearly"].map((period) => (
          <button
            key={period}
            onClick={() => setActiveButton(period)}
            className={`px-2 sm:px-4 py-1 sm:py-2 mr-2 text-[8px] sm:text-sm rounded ${
              activeButton === period
                ? "bg-[#029783] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
      <div className="w-full h-full">
        <canvas
          id="earningsChart"
          ref={chartRef}
          className="w-full h-32"
        />
      </div>
    </div>
  );
};

export default EarningsChart;
