import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
//import CSS
import "./HomeCarousel.scss";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel-container mt-[100px]"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slide/slide1.webp"
          alt="First slide"
        />
        <Carousel.Caption className="text-center">
          <h3>Sustainability Made Easy</h3>
          <p>
            <img src="/site_logo.webp" />
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slide/slide2.webp"
          alt="Second slide"
        />

        <Carousel.Caption className="text-center">
          <h3>Sustainability Made Easy</h3>
          <img src="/site_logo.webp" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slide/slide3.webp"
          alt="Third slide"
        />

        <Carousel.Caption className="text-center">
          <h3>Sustainability Made Easy</h3>
          <img src="/site_logo.webp" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
