import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "./style.css";
import "react-alice-carousel/lib/alice-carousel.css";

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

  const items = [];

  const [arr, setArr] = useState([]);
  arr.forEach((item, index) => {
    items.push(
      <div className="item">
        <video
          width="100%"
          controls
          className="media"
          muted={mainIndex !== index}
        >
          <source src={item.file} />
        </video>
      </div>
    );
  });

  const handleSlideChanged = (e) => {
    setMainIndex(e.item);
  };
  // ==================

  useEffect(() => {
    fetch("http://192.168.101.222:8000/videos", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArr(data);
      });
  }, []);
  // =================

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
