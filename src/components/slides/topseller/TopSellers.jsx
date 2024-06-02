import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../Cards/TopSellerCard";
import "./TopSellers.css"; // Import the CSS file

const TopSellers = ({ cardData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Hook to update window width
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Initialize the state based on current window size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomNextArrow = (props) => {
    const { className, onClick, currentSlide, slideCount } = props;
    if (isSmallScreen) return <></>;
    return (
      currentSlide < slideCount - 5 && (
        <div className={`${className} custom-arrow`} onClick={onClick}></div>
      )
    );
  };

  const PrevCustomarrow = (props) => {
    const { className, onClick, currentSlide } = props;
    if (isSmallScreen) return <></>;
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    cssEase: "linear", // Optionally add this if you want a linear transition
  };

  return (
    <div className="sm:p-2 bg-white rounded-lg shadow-md">
      <Slider {...settings}>
        {cardData.map((data, index) => (
          <div key={index} className="p-1">
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
