import React from "react";
import BannerCard from "./bannerCard";
import Model from "../Model/Model";
import AddUpdateBannerCard from "./AddUpdateBannerCard";

const slideImages = [
  {
    image:
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    name: "Slide 1",
    websiteUrl: "https://google.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    name: "Slide 2",
    websiteUrl: "https://google.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    name: "Slide 3",
    websiteUrl: "https://google.com",
  },
];
function AllBannerPage() {
  const [showModel, setShowModel] = React.useState(false);
  const [updateModel, setUpdateModel] = React.useState(false);
  const applyModel = () => {
    setShowModel(true);
  };
  const applyUpdateModel = () => {
    setUpdateModel(true);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <button
            className="px-4 py-[2px] text-ui-color hover:text-white border-2 border-ui-color rounded-xl bg-slate-200 hover:bg-teal-500 mr-4"
            onClick={applyModel}
          >
            Add New
          </button>
        </div>
        {showModel && (
          <Model>
            <AddUpdateBannerCard
              title={"Add New Banner"}
              buttonTitle={"CREATE"}
              setShowModel={setShowModel}
            />
          </Model>
        )}
        <div className="flex flex-wrap gap-6 p-2">
          {slideImages.map((slideImage, index) => (
            <div onClick={applyUpdateModel} key={index}>
              <BannerCard
                image={slideImage.image}
                name={slideImage.name}
                website={slideImage.websiteUrl}
                setShowModel={setShowModel}
              />
            </div>
          ))}
        </div>
        {updateModel && (
          <Model>
            <AddUpdateBannerCard
              title={"Update Banner"}
              buttonTitle={"UPDATE"}
              setShowModel={setUpdateModel}
            />
          </Model>
        )}
      </div>
    </>
  );
}

export default AllBannerPage;
