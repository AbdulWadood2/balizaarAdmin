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
import { Link } from "react-router-dom";

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
    <div className="w-full">
      {/* before sm */}
      <div className="block sm:hidden">
        {/* Layout for small screens */}
        <div>
          <h1 className="text-xl sm:text-2xl font-medium mb-3">Dashboard</h1>
        </div>
        <div className="flex gap-6 flex-col sm-2:flex-row">
          <GateCard itemQuantity={"7.82k"} icon={productBox} />
          <GateCard itemQuantity={"7.82k"} icon={usersGateIcon} />
        </div>
        <Link to="/dashboard/allBanners">
          <Banner />
        </Link>
        <div>
          <h2 className="text-[15px] sm:text-2xl font-medium p-2">Earnings</h2>
          <BarChartComponent barSize={5} />
        </div>
        <div>
          <h1 className="text-[15px] sm:text-2xl font-medium">Top Sellers</h1>
          <TopSellers cardData={cardData} />
        </div>
        <div>
          <h1 className="pb-[7px] text-xl sm:text-2xl font-medium">
            Top Selling Products
          </h1>
          <div className="bg-white h-[300px] sm:h-screen rounded-2xl p-4 flex overflow-scroll hide-scrollbar">
            <TopSellingProducts />
          </div>
        </div>
      </div>

      {/* after sm */}
      <div className="hidden sm:block">
        {/* Layout for larger screens */}
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-6">
            <h1 className="text-2xl font-medium">Good Morning Buddy!</h1>
            <div className="flex gap-6 mt-4">
              <GateCard itemQuantity={"7.82k"} icon={productBox} />
              <GateCard itemQuantity={"7.82k"} icon={usersGateIcon} />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-medium">Top Sellers</h1>
              <TopSellers cardData={cardData} />
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-medium mb-4">Earnings</h2>
              <BarChartComponent barSize={12} />
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-4">
            <Link to="/dashboard/allBanners">
              <Banner />
            </Link>
            <div>
              <h1 className="text-2xl font-medium">Top Selling Products</h1>
              <div className="bg-white h-[calc(100vh-10rem)] rounded-2xl p-4 flex overflow-scroll hide-scrollbar">
                <TopSellingProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
