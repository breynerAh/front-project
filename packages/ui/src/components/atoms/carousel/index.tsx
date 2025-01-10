import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Slide {
  imageUrl: string;
  caption: string;
}

interface AdvancedCarouselProps {
  slides: Slide[];
  showThumbs?: boolean;
  autoPlay?: boolean;
  infiniteLoop?: boolean;
  interval?: number;
}

export const CarouselUI: FC<AdvancedCarouselProps> = (props) => {
  const {
    slides,
    showThumbs = false,
    autoPlay = true,
    infiniteLoop = true,
    interval = 3000,
  } = props;

  return (
    <Carousel
      showThumbs={showThumbs}
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      interval={interval}
    >
      {slides?.map((slide, index) => (
        <div key={index}>
          <img
            src={slide?.imageUrl}
            alt={`Slide ${index + 1}`}
            style={{
              height: "400px",
              width: "100%",
              objectFit: "fill",
            }}
          />
          {/* <p className="legend">{slide?.caption}</p> */}
        </div>
      ))}
    </Carousel>
  );
};
