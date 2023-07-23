import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import img2 from "../Assets/imgs kashmir/dal2.jpg";
import img3 from "../Assets/imgs kashmir/gulmarg.jpg";
import img4 from "../Assets/imgs kashmir/gurez.jpg";
import img5 from "../Assets/imgs kashmir/pahalgam.jpg";
import img6 from "../Assets/imgs kashmir/pari.jpg";
import img7 from "../Assets/imgs kashmir/tulip.jpg";

const placeVariants = {
  hidden: { x: -100, y: -100, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Places = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.9;
      const scrollYValue = window.scrollY;
      if (scrollYValue >= scrollThreshold) {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-green-700 underline text-center">
            Featured Places
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden cursor-pointer">
            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              animate={isVisible ? "visible" : "hidden"}
              className="rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={img2}
                alt="Place 1"
                className="w-full h-full object-cover"
              />

              <motion.div
                variants={placeVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <p className="absolute top-10 text-center text-3xl font-semibold p-2 rounded-lg">
                  Floating Market Dal
                </p>
              </motion.div>
            </motion.div>

            {/* Featured Place 2 */}
            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              animate={isVisible ? "visible" : "hidden"}
              className="rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={img3}
                alt="Place 1"
                className="w-full h-full object-cover "
              />

              <motion.div
                variants={placeVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <p className="absolute top-10 text-center text-3xl font-semibold p-2 rounded-lg">
                  Gulmarg
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              animate={isVisible ? "visible" : "hidden"}
              className="rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={img4}
                alt="Place 1"
                className="w-full h-full object-cover"
              />

              <motion.div
                variants={placeVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <p className="absolute top-10 text-center text-3xl font-semibold p-2 rounded-lg">
                  Gurez Valley
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              animate={isVisible ? "visible" : "hidden"}
              className="rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={img5}
                alt="Place 1"
                className="w-full h-full object-cover"
              />

              <motion.div
                variants={placeVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <p className="absolute top-10 text-center text-3xl font-semibold p-2 rounded-lg">
                  Pahalgam
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              animate={isVisible ? "visible" : "hidden"}
              className="rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={img6}
                alt="Place 1"
                className="w-full h-full object-cover"
              />

              <motion.div
                variants={placeVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <p className="absolute top-10 text-center text-3xl font-semibold p-2 rounded-lg">
                  Pari Mahal Srinagar
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              animate={isVisible ? "visible" : "hidden"}
              className="rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={img7}
                alt="Place 1"
                className="w-full h-full object-cover"
              />

              <motion.div
                variants={placeVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <p className="absolute top-10 text-center text-3xl font-semibold p-2 rounded-lg">
                  Tulip Garden Srinagar
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Places;
