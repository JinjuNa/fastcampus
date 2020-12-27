import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
    return(
      <div>
          <Carousel>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
          </Carousel>
      </div>
    )
}

export default CarouselComponent;
