import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/imgs kashmir/khyber1.JPG";
import img2 from "../Assets/imgs kashmir/khyber2.JPG";
import img3 from "../Assets/imgs kashmir/khyber3.JPG";
import img4 from "../Assets/imgs kashmir/vivanta1.JPG";
import img5 from "../Assets/imgs kashmir/vivanta2.JPG";
import img6 from "../Assets/imgs kashmir/vivanta3.JPG";
import img7 from "../Assets/imgs kashmir/lalit1.JPG";
import img8 from "../Assets/imgs kashmir/lalit2.JPG";
import img9 from "../Assets/imgs kashmir/lalit3.JPG";

const Hotels = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const hotelsData = [
    {
      name: "The Khyber",
      location: "Gulmarg",
      type: "Luxury",
      images: [img1, img2, img3],
    },
    {
      name: "Vivanta by Taj",
      location: "Srinagar",
      type: "Luxury",
      images: [img4, img5, img6],
    },
    {
      name: "The Lalit",
      location: "Srinagar",
      type: "Luxury",
      images: [img7, img8, img9],
    },
  ];

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto bg-transparent">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8 bg-transparent">
          Discover Our Hotels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotelsData.map((hotel, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg overflow-hidden shadow-lg "
            >
              <Slider {...sliderSettings}>
                {hotel.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${hotel.name} - Img ${idx + 1}`}
                    className="h-64 w-full object-cover"
                  />
                ))}
              </Slider>
              <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                <h3 className="text-xl font-semibold text-green-500 mb-2 bg-transparent tracking-widest">
                  {hotel.name}
                </h3>
                <h3 className="text-xl font-semibold mb-2 bg-transparent">
                  {hotel.type}
                </h3>
                <p className="text-gray-600 bg-transparent">{hotel.location}</p>
                <button className="px-4 py-2 mt-4 bg-green-600 text-white font-bold rounded-lg tracking-widest text-lg hover:bg-green-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
