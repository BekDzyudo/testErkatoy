import ReactPlayer from "react-player";
import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import video1 from "./assets/video_1.mp4";
import video2 from "./assets/video_2.mp4";
import video3 from "./assets/video_3.mp4";

function App() {
  const VideoProperties = [
    {
      id: 1,
      title: "video 1",
      src: video1,
    },
    {
      id: 2,
      title: "video 2",
      src: video2,
    },
    {
      id: 3,
      title: "video 3",
      src: video3,
    },
  ];
  return (
    <div className="CarouselConteiner">
      <Carousel className="carousel">
        {VideoProperties.map((videoObj) => {
          return (
            <CarouselItem key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                width="100%"
                // pip={true}
                controls={true}
                // playing={true}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
