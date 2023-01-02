import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./../../Images/hotel1.jpg";
import img from "./../../Images/sliderImg1.jpg";
import img3 from "./../../Images/sliderImg2.jpg";
import img4 from "./../../Images/sliderImg3.jpg";
import img5 from "./../../Images/sliderImg4.jpg";
// import img from "./../../Images/sliderImg1.jpg";
import ImageContainer from "./ImageContainer";
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true,
    arrows: true,
    pauseOnDotsHover: true,
    pauseOnHover: true
  };

  const imageData = [
    [
      img1,
      "Members Save Mode",
      "Save up to 15% at participating Hyatt hotels and resorts around the world.",
      "LEARN MORE",
      true,
    ],
    [
      img,
      "More Hyatt offers",
      "Explore ways to get away, save, and benefit more as a World of Hyatt member at Hyatt hotels and resorts worldwide.",
      "VIEW OFFERS",
      false,
    ],
    [
      img3,
      "Save up to 20%",
      "Enjoy this or other offers—like resort credits—at select all-inclusive resorts.",
      "SEE DETAILS",
      true,
    ],
    [
      img4,
      "Discover rewarding stays",
      "Earn 2,000 Bonus Points per qualifying stay at several participating Park Hyatt hotels in Asia to America. Terms apply.",
      "LEARN MORE",
      false,
    ],
    [
      img5,
      "Introducing FIND",
      "Learn something new, do the unexpected, or just hit pause. More than 200 experiences await—all with your wellbeing in mind. Find what inspires you and earn 10 points per eligible $1 spent.",
      "LEARN MORE",
      true,
    ],
  ];

  return (
    <Slider
      {...settings}
      style={{
        width: "90%",
        margin: "auto",
      }}
    >
      {imageData.map((data) => (
        <div>
          <ImageContainer
            image={data[0]}
            title={data[1]}
            content={data[2]}
            button={data[3]}
            left={data[4]}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
