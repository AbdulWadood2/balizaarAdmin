import React from "react";
import GateCard from "../../components/Cards/GateCard";
import productBox from "../../assets/icons/product-box.png";
import usersGateIcon from "../../assets/icons/users-gate-icon.png";
import TopSellers from "../../components/slides/topseller/TopSellers";
import modelWoman from "../../assets/modelWoman.png";
import emoji from "../../assets/emoji.png";
import BarChartComponent from "../../components/charts/BarChartComponent";
import Banner from "../../components/banner/Banner";

import TopSellingProducts from "../../components/topSellingProducts/TopSellingProducts";

function Dashboard() {
  const cardData = [
    {
      name: "Martha Adam",
      score: 1250,
      profileImage: modelWoman,
      Emoji: emoji,
    },
    { name: "Georgina", score: 1250, profileImage: modelWoman, Emoji: emoji },
    {
      name: "Kane Williamson",
      score: 1250,
      profileImage: modelWoman,
      Emoji: emoji,
    },
    { name: "John Snow", score: 1250, profileImage: modelWoman, Emoji: emoji },
    {
      name: "Martha Adam",
      score: 1250,
      profileImage: modelWoman,
      Emoji: emoji,
    },
    {
      name: "Martha Adam",
      score: 1250,
      profileImage: modelWoman,
      Emoji: emoji,
    },
    {
      name: "Martha Adam",
      score: 1250,
      profileImage: modelWoman,
      Emoji: emoji,
    },
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col gap-4 w-[60%]">
          <h1 className="text-2xl font-medium">Good Morning Buddy!</h1>
          <div className="flex gap-6">
            <GateCard itemQuantity={"7.82k"} icon={productBox} />
            <GateCard itemQuantity={"7.82k"} icon={usersGateIcon} />
          </div>
          <h1 className="text-2xl font-medium">Top Sellers</h1>
          <TopSellers cardData={cardData} />
          <div>
            <h2 className="text-lg font-medium mb-4">Earnings</h2>
            <BarChartComponent />
          </div>
        </div>
        <div className="pt-[10px] pl-[25px] w-full">
          <Banner />
          <h1 className="pb-[7px] text-2xl font-medium">
            Top Selling Products
          </h1>
          <div className="bg-white h-screen rounded-2xl p-4 flex overflow-scroll hide-scrollbar">
            <div>
              <TopSellingProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
