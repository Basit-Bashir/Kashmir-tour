import React from "react";
import { motion } from "framer-motion";
import img from "../Assets/imgs kashmir/dal.jpg";

const Main = () => {
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
    </div>
  );
};

export default Main;
