import React from "react";

import ImageSlider1 from "../Sliders/ImageSlider1.jsx";

const Banner = () => {
  let images = [
    "https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg",

    "https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg",

    "https://www.shutterstock.com/image-photo/mesmerizing-3d-abstract-multicolor-visualization-600nw-2308145127.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlNy2OEWtRVTLY9pkUp6af4zcmFev8B_yeA&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlNy2OEWtRVTLY9pkUp6af4zcmFev8B_yeA&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlNy2OEWtRVTLY9pkUp6af4zcmFev8B_yeA&s",
  ];
  return (
    <>
      <ImageSlider1 images={images} />
    </>
  );
};

export default Banner;
