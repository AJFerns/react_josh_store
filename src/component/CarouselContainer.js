import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselContainer.css";
import image1 from "./../images/sliderimg1.jpeg";
import image2 from "./../images/sliderimg2.jpeg";
import image3 from "./../images/sliderimg3.jpeg";
import image4 from "./../images/sliderimg4.jpeg";
const CarouselContainer = () => {
  return (
    <div className="slider_container">
      <Carousel className="slider_container" fade={true} pause={false}>
        <Carousel.Item interval={1700}>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img className="d-block w-100" src={image2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
