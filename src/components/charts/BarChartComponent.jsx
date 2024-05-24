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

const EarningsChart = () => {
  const [activeButton, setActiveButton] = useState("Yearly");

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

  return (
    <div className="p-4 bg-white rounded-3xl shadow-md font-bold">
      <div className="flex justify-end mb-4">
        {["Weekly", "Monthly", "Yearly"].map((period) => (
          <button
            key={period}
            onClick={() => setActiveButton(period)}
            className={`px-4 py-2 mr-2 text-sm rounded ${
              activeButton === period
                ? "bg-[#029783] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            contentStyle={{ backgroundColor: "#f5f5f5", borderRadius: "5px" }}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            className="custom-tooltip"
          />
          <Bar dataKey="earnings" barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
