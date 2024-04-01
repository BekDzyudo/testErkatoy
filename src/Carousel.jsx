import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "./style.css";
import "react-alice-carousel/lib/alice-carousel.css";
import video1 from "./assets/video_1.mp4";
import video2 from "./assets/video_2.mp4";
import video3 from "./assets/video_3.mp4";

function Carousel() {
  const [mainIndex, setMainIndex] = useState(0);

  // const slideNext = () => {
  //   if (mainIndex < items.length - 1) {
  //     setMainIndex(mainIndex + 1);
  //   }
  // };

  // const slidePrev = () => {
  //   if (mainIndex > 0) {
  //     setMainIndex(mainIndex - 1);
  //   }
  // };
  const items = [
    <div className="item">
      <video width="100%" controls className="media" muted={mainIndex !== 0}>
        <source src={video1} />
      </video>
    </div>,
    <div className="item">
      <video width="100%" controls className="media" muted={mainIndex !== 0}>
        <source src={video2} />
      </video>
    </div>,
    <div className="item">
      <video width="100%" controls className="media" muted={mainIndex !== 0}>
        <source src={video3} />
      </video>
    </div>,
  ];

  const handleSlideChanged = (e) => {
    console.log(e);
    setMainIndex(e.item);
  };
  return (
    <div className="carouselContainer">
      <div className="carousel">
        <AliceCarousel
          className="video"
          activeIndex={mainIndex}
          disableDotsControls
          // disableButtonsControls
          onSlideChanged={handleSlideChanged}
          items={items}
        />
        <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
        <div className="caption-container">
          <p className="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* <div className="btn-prev" onClick={slidePrev}>
          &lang;
        </div>
        <div className="btn-next" onClick={slideNext}>
          &rang;
        </div> */}
      </div>
    </div>
  );
}

export default Carousel;
