import React from "react";
import { Slider1, Slider2, Slider3, Slider4, Slider5 } from "../data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./styles/slider.css";

const Slider = () => {
  return (
    <div id="topSlider" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-indicators carousel-indicators-b  ">
        <button
          type="button"
          data-bs-target="#topSlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#topSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#topSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#topSlider"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#topSlider"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slider1} className="d-block w-100" alt="product" />
        </div>
        <div className="carousel-item">
          <img src={Slider2} className="d-block w-100" alt="product" />
        </div>
        <div className="carousel-item">
          <img src={Slider3} className="d-block w-100" alt="product" />
        </div>
        <div className="carousel-item">
          <img src={Slider4} className="d-block w-100" alt="product" />
        </div>
        <div className="carousel-item">
          <img src={Slider5} className="d-block w-100" alt="product" />
        </div>
      </div>
      <button
        className="carousel-control-prev carousel-control-prev-b"
        type="button"
        data-bs-target="#topSlider"
        data-bs-slide="prev"
      >
        <span
          className="m-5 bg-gray-50 rounded-full text-gray-700 p-3 text-xl hover:shadow-lg hover:bg-white"
          aria-hidden="true"
        >
          <AiOutlineArrowLeft />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel-control-next-b"
        type="button"
        data-bs-target="#topSlider"
        data-bs-slide="next"
      >
        <span
          className="m-5 bg-gray-50 rounded-full text-gray-700 p-3 text-xl hover:shadow-lg hover:bg-white"
          aria-hidden="true"
        >
          <AiOutlineArrowRight />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
