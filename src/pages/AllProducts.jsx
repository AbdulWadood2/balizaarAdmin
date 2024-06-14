import React from "react";
import AllProductsCard from "../../src/components/allProducts/AllProductsCard";

import sampleProductImage from "../../src/assets/sampleProductImage.png";

function AllProducts() {
  return (
    <div className="flex flex-col">
      <div className="text-xl sm:text-2xl font-medium mb-3">Products</div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-6 justify-center bg-white px-2 py-[13px] rounded-xl">
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
        <AllProductsCard
          // key={index}
          image={sampleProductImage}
          title={"lipstick"}
          location={"Lahore"}
          description={"lorem ipsum dolor sit amet"}
          rating={5}
        />
      </div>
    </div>
  );
}

export default AllProducts;
