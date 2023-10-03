'use client'
import { Carousel } from "react-responsive-carousel";
import {HeroImages} from "../../utils/HeroImage"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageArrow from "./ImageArrow";
import ImageMapImage from "./ImageMapImage";

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        // autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        // interval={2000}
        >
        {HeroImages.map((image) => (
            <ImageMapImage key={image.alt} id={image.alt} src={image.imgUrl} alt={image.alt} width={484} height={484} className="object-contain" />
        ))}
      </Carousel>
      <ImageArrow className="max-xl:hidden absolute -left-[15%] bottom-0 z-0" src="./assets/icons/hand-drawn-arrow.svg" alt="arrow" width={175} height={175} />
    </div>
  );
};

export default HeroCarousel;
