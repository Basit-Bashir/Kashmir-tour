import React from "react";
import img1 from "../Assets/imgs kashmir/art.JPG";
import img2 from "../Assets/imgs kashmir/kangri.JPG";
import img3 from "../Assets/imgs kashmir/pheran.JPG";
import img4 from "../Assets/imgs kashmir/wazwan.JPG";
import { motion } from "framer-motion";

const ArtAndCulture = () => {
  const items = [
    {
      image: img1,
      title: "Color Embroidery",
      description: "Vivid hand embroidery celebrates colors and culture.",
    },
    {
      image: img2,
      title: "Kangri Making",
      description:
        "Traditional Kangri making in Kashmir crafts warmth for winter comfort.",
    },
    {
      image: img3,
      title: "Pheran & Kangri",
      description:
        "Kashmir's Pheran and Kangri epitomize cozy elegance for winter traditions.",
    },
    {
      image: img4,
      title: "Wazwan",
      description:
        "Kashmir's Wazwan: A delectable feast of traditional Kashmiri cuisine.",
    },
  ];

  return (
    <>
      <div className="container mx-auto text-center">
        <span className="text-4xl text-green-700 font-bold">Art & Culture</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[50vh] md:h-[70vh] object-cover md:object-cover rounded-lg "
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-[1px] p-4 text-white text-center cursor-pointer hover:backdrop-blur-none">
                <h2 className="text-2xl uppercase font-semibold mb-4 bg-transparent tracking-widest">
                  {item.title}
                </h2>
                <p className="text-lg bg-transparent tracking-widest">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtAndCulture;
