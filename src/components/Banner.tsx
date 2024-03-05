import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../images/slider/sliderImg_1.jpg";
import sliderImg2 from "../images/slider/sliderImg_2.jpg";
import sliderImg3 from "../images/slider/sliderImg_3.jpg";
import sliderImg4 from "../images/slider/sliderImg_4.jpg";
import Image from "next/image";
import { FaS } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={sliderImg1} alt="slider1" />
        </div>
        <div>
          <Image src={sliderImg2} alt="slider2" />
        </div>
        <div>
          <Image src={sliderImg3} alt="slider3" />
        </div>
        <div>
          <Image src={sliderImg4} alt="slider4" />
        </div>
      </Carousel>
      <div className="absolute bg-gradient-to-t from-gray-100 to-transparent w-full h-40 bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
