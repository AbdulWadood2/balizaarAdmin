import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./EarningsChart.css"; // Import the CSS file

const data = [
  { name: "Jan", earnings: 30000 },
  { name: "Feb", earnings: 20000 },
  { name: "Mar", earnings: 40000 },
  { name: "Apr", earnings: 25000 },
  { name: "May", earnings: 50000 },
  { name: "Jun", earnings: 20000 },
  { name: "Jul", earnings: 15000 },
  { name: "Aug", earnings: 10000 },
  { name: "Sep", earnings: 35000 },
  { name: "Oct", earnings: 45000 },
  { name: "Nov", earnings: 50000 },
  { name: "Dec", earnings: 30000 },
];

const EarningsChart = ({ barSize }) => {
  const [activeButton, setActiveButton] = useState("Yearly");
  // const [barSize, setBarSize] = useState(2000000);

  // Find the indices of the top two earnings
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

  const formatYAxis = (tickItem) => {
    // Convert to thousands and append 'k'
    if (tickItem === 0) return tickItem;
    return `$${tickItem / 1000}k`;
  };

  // Adjust bar size based on window size
  // useEffect(() => {
  //   const handleResize = () => {
  //     const chartWidth = document.getElementById("chartContainer").offsetWidth;
  //     setBarSize(chartWidth / (data.length * 2));
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Initial call to set the bar size
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>
      <div className="sm:pt-4  bg-white rounded-3xl shadow-md font-bold w-full">
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
        <div id="chartContainer" className="w-full h-24 sm:h-48">
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis
                dataKey="name"
                tickLine={false}
                className="text-[10px] w-0 sm:text-[18px]"
              />
              <YAxis
                tickFormatter={formatYAxis}
                tickLine={false}
                className="text-[10px] sm:text-[18px]"
              />
              <Tooltip
                wrapperStyle={{ outline: "none" }}
                contentStyle={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                }}
                cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
                className="custom-tooltip"
              />
              <Bar dataKey="earnings" barSize={barSize}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(index)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default EarningsChart;
