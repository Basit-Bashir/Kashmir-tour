import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className="mt-8 bg-green-800 py-8 relative">
      <div className="container mx-auto text-center text-xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4 text-green-700 animate-pulse"
        >
          Contact Us
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          Email: info@kashmir.com
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-4"
        >
          Phone: +91 9797979797
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center space-x-4 mb-4"
        >
          <a
            href="facebook.com"
            className="hover:text-green-800 hover:underline transition-colors"
          >
            Facebook
          </a>
          <a
            href="twitter.com"
            className="hover:text-green-800 hover:underline transition-colors"
          >
            Twitter
          </a>
          <a
            href="insta.com"
            className="hover:text-green-800 hover:underline transition-colors"
          >
            Instagram
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          &copy; 2023 Travel Company. All rights reserved.
        </motion.p>
      </div>
      <FontAwesomeIcon
        icon={faArrowCircleUp}
        onClick={scrollToTop}
        className="bg-transparent text-white absolute md:right-6 right-2 bottom-2 text-4xl cursor-pointer"
      />
    </footer>
  );
};

export default Footer;
