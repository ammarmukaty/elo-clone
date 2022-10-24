import React, { useState } from "react";
import { Slider1, Slider2, Slider3, Slider4, Slider5 } from "../data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./styles/smallSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SmallSlider = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <div className="w-full">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="w-full"
        draggable
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={3}
        swipeable
      >
        {data.map((item, index) => (
          <a href="./" key={index}>
            <div
              className={`carousel-item carousel-item-a ${
                index === 0 ? "active" : ""
              }`}
            >
              <div className="card card-a">
                <img
                  src={item.image}
                  onMouseOver={(e) => {
                    e.currentTarget.src = item.hover_image;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.src = item.image;
                  }}
                  className="d-block w-100  "
                  alt={item.title}
                />
                <div className="card-body">
                  <p className="card-title  text-md text-blue-800 ">
                    {item.title}
                  </p>
                  <p className="justify-center flex text-xl">{item.price}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default SmallSlider;

// <div
// id="topSlider2"
// className="carousel slide shadow-xl"
// data-bs-ride="carousel"
// >
// <div className="carousel-inner carousel-inner-a">
//   {data.map((item, index) => (
//     <div
//       className={`carousel-item carousel-item-a ${
//         index === 0 ? "active" : ""
//       }`}
//       key={index}
//     >
//       <div className="card card-a">
//         <img
//           src={item.image}
//           className="d-block w-100"
//           alt={item.title}
//         />
//         <div className="card-body">
//           <h5 className="card-title h-12 ">{item.title}</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up
//             the bulk of the card's content.
//           </p>
//           <a href="./" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
// <button
//   className="carousel-control-prev carousel-control-prev-a"
//   type="button"
//   data-bs-target="#topSlider2"
//   data-bs-slide="prev"
// >
//   <span
//     className="m-5 bg-gray-50 rounded-full text-gray-700 p-3 text-xl hover:shadow-lg hover:bg-white"
//     aria-hidden="true"
//   >
//     <AiOutlineArrowLeft />
//   </span>
//   <span className="visually-hidden">Previous</span>
// </button>
// <button
//   className="carousel-control-next carousel-control-next-a"
//   type="button"
//   data-bs-target="#topSlider2"
//   data-bs-slide="next"
// >
//   <span
//     className="m-5 bg-gray-50 rounded-full text-gray-700 p-3 text-xl hover:shadow-lg hover:bg-white"
//     aria-hidden="true"
//   >
//     <AiOutlineArrowRight />
//   </span>
//   <span className="visually-hidden">Next</span>
// </button>
// </div>
