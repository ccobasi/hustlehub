import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Button } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
    partialVisibilityGutter: 50 // this is needed to tell the amount of px that should be visible.
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
};


const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };


  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> 
       {/* remember to give it position:absolute */}
        <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <Button onClick={() => next()} />
        <Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button>
      </div>
    );
  };


  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    const carouselItems = ['Item1', 'Item2', 'Item3'];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };

const MultiCarousel =(props)=>{
    return(<>
    <Carousel swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  //autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"

  customRightArrow={<CustomRightArrow />}
  arrows={false} 
  customButtonGroup={<ButtonGroup />}
  //renderButtonGroupOutside={true}
  //customDot={<CustomDot />}
  centerMode={true}

  // afterChange={(previousSlide, { currentSlide, onMove }) => {
  //   doSpeicalThing();
  // }}

  // beforeChange={(nextSlide, { currentSlide, onMove }) => {
  //   doSpeicalThing();
  // }}

  focusOnSelect={true}
  >
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel></>);
};

export default MultiCarousel;