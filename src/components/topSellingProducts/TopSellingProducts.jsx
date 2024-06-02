import React from "react";
import TopProductCard from "../Cards/TopSellingproductCard";
import productDummyImage from "../../assets/productDummyImage.png"; // Ensure you have the image file in the appropriate directory

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2  sm-1:grid-cols-2 gap-4">
        <div>
          <TopProductCard
            image={productDummyImage}
            title={"MacBook Pro 14"}
            itemsSold={450}
          />
        </div>
        <div>
          <TopProductCard
            image={productDummyImage}
            title={"MacBook Pro 14"}
            itemsSold={450}
          />
        </div>
        <div>
          <TopProductCard
            image={productDummyImage}
            title={"MacBook Pro 14"}
            itemsSold={450}
          />
        </div>
        <div>
          <TopProductCard
            image={productDummyImage}
            title={"MacBook Pro 14"}
            itemsSold={450}
          />
        </div>
        <div>
          <TopProductCard
            image={productDummyImage}
            title={"MacBook Pro 14"}
            itemsSold={450}
          />
        </div>
        <div>
          <TopProductCard
            image={productDummyImage}
            title={"MacBook Pro 14"}
            itemsSold={450}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
