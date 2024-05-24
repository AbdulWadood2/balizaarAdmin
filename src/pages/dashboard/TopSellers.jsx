import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Cards/TopSellerCard";

const TopSellers = ({ cardData }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // hide left arrow only
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Slider {...settings}>
        {cardData.map((data, index) => (
          <div key={index} className="p-2">
            <Card
              name={data.name}
              score={data.score}
              profileImage={data.profileImage}
              Emoji={data.Emoji}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopSellers;
