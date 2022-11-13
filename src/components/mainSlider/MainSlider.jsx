import React from "react";
import AwesomeSlider from "react-awesome-slider";
import styles from './style.css';

// const slider = (
//   <AwesomeSlider >
//     <div data-src="/path/to/image-0.png" />
//     <div data-src="/path/to/image-1.png" />
//     <div data-src="/path/to/image-2.jpg" />
//   </AwesomeSlider>
// );

function MainSlider() {
  return (
    <div>
       <AwesomeSlider cssModule={styles}>
    <div data-src="/path/to/image.jpg">
      <p>I want to see what you got.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>The answer is -- Don't think about it.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>Sometimes science is more art than science.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>Love, connection, experience.</p>
    </div>
  </AwesomeSlider>
    </div>
  );
}

export default MainSlider;
