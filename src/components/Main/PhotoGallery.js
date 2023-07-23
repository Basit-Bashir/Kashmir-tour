import React from "react";
import Slider from "react-slick";
import img2 from "../Assets/imgs kashmir/dal2.jpg";
import img3 from "../Assets/imgs kashmir/gulmarg.jpg";
import img4 from "../Assets/imgs kashmir/gurez.jpg";
import img5 from "../Assets/imgs kashmir/pahalgam.jpg";
import img6 from "../Assets/imgs kashmir/pari.jpg";
import img7 from "../Assets/imgs kashmir/tulip.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallery = () => {
  const photos = [img2, img3, img4, img5, img6, img7];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-green-800 underline underline-offset-8 text-center mb-10">
        Photo Gallery
      </h1>
      <div className="w-full">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="w-full h-96 md:h-[50vh]">
              <img
                src={photo}
                alt={`Pic ${index + 1}`}
                className="w-full  h-full object-cover "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoGallery;
