import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from "../Assets/imgs kashmir/dal.jpg";
import img2 from "../Assets/imgs kashmir/dal2.jpg";
import img3 from "../Assets/imgs kashmir/gulmarg.jpg";
import img4 from "../Assets/imgs kashmir/gurez.jpg";
import img5 from "../Assets/imgs kashmir/pahalgam.jpg";
import img6 from "../Assets/imgs kashmir/pari.jpg";
import img7 from "../Assets/imgs kashmir/tulip.jpg";

const placeVariants = {
  hidden: { x: -1000, y: -1000, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      const scrollYValue = window.scrollY;
      if (scrollYValue >= scrollThreshold) {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const typingContainer = {
    hidden: { opacity: 0, y: "-10px" },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img src={img} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 bg-transparent">
          <motion.h1
            variants={typingContainer}
            initial="hidden"
            animate="show"
            className="text-5xl font-bold mb-4 text-green-700 p-4 rounded-xl"
          >
            Explore
            {Array.from(" Kashmir").map((word, i) => (
              <motion.span
                key={i}
                variants={typingText}
                style={{ background: "transparent" }}
              >
                {word}
              </motion.span>
            ))}
            🍁
          </motion.h1>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="md:text-2xl mb-8 text-orange-500 bg-transparent"
          >
            Discover amazing places of Kashmir
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300"
          >
            Book Now
          </motion.button>
        </div>
      </section>

      {/* Places Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-green-700 underline">
            Featured Places
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
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
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <motion.p
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="text-white text-center text-3xl font-semibold h-full w-full bg-transparent"
                >
                  Floating Market Dal
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Featured Place 2 */}
            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
              animate={isVisible ? "visible" : "hidden"}
              className="rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={img3}
                alt="Place 1"
                className="w-full h-full object-cover"
              />

              <motion.div
                variants={placeVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <motion.p
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="text-white text-center text-3xl font-semibold h-full w-full bg-transparent"
                >
                  Gulmarg
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
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
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <motion.p
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="text-white text-center text-3xl font-semibold h-full w-full bg-transparent"
                >
                  Gurez Valley
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
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
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <motion.p
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="text-white text-center text-3xl font-semibold h-full w-full bg-transparent"
                >
                  Pahalgam
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
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
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <motion.p
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="text-white text-center text-3xl font-semibold h-full w-full bg-transparent"
                >
                  Pari Mahal Srinagar
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={placeVariants}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
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
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
              >
                <motion.p
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="text-white text-center text-3xl font-semibold h-full w-full bg-transparent"
                >
                  Tulip Garden Srinagar
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
