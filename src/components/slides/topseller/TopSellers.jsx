import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../Cards/TopSellerCard";
import "./TopSellers.css"; // Import the CSS file

const TopSellers = ({ cardData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomNextArrow = (props) => {
    const { className, onClick, currentSlide, slideCount } = props;
    return (
      currentSlide < slideCount - 5 && (
        <div className={`${className} custom-arrow`} onClick={onClick}></div>
      )
    );
  };

  const PrevCustomarrow = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      currentSlide > 0 && (
        <div
          className={`${className} custom-arrow-prev`}
          onClick={onClick}
        ></div>
      )
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <PrevCustomarrow
        currentSlide={currentSlide}
        slideCount={cardData.length}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={cardData.length}
      />
    ),
    afterChange: (current) => setCurrentSlide(current),
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
