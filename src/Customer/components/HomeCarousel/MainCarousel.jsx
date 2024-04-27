import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCaraouselData } from "./mainCarouselData";

const MainCarousel = () => {
  const items = mainCaraouselData.map((item)=> <img className = 'cursor-pointer' role = 'presentation' src= {item.image} alt =''/>);
  return (
    <AliceCarousel
      mouseTracking
      items={items}
     controlsStrategy="alternate"
     disableButtonsControls
     autoPlay
     autoPlayInterval={1000}
     infinite
    />
  );
};

export default MainCarousel;
