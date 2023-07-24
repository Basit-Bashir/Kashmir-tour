import React, { useState } from "react";
import { motion } from "framer-motion";
const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md text-xl"
      >
        <h2 className="text-4xl font-bold text-center text-green-700 mb-4 bg-transparent">
          Get in Touch
        </h2>
        <div className="mb-4 bg-transparent">
          <label
            htmlFor="name"
            className="block font-semibold mb-2 bg-transparent"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4 bg-transparent">
          <label
            htmlFor="email"
            className="block font-semibold mb-2 bg-transparent"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4 bg-transparent">
          <label
            htmlFor="phoneNumber"
            className="block font-semibold mb-2 bg-transparent"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4 bg-transparent">
          <label
            htmlFor="message"
            className="block font-semibold mb-2 bg-transparent"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-green-500"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-lg tracking-widest bg-green-500 text-white font-bold rounded-lg hover:bg-green-800 transition-colors"
        >
          Submit
        </button>
      </form>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute top-1/2 left-1/2 p-4 bg-green-500 text-white rounded-lg shadow-md"
        >
          Message sent✔
        </motion.div>
      )}
    </div>
  );
};

export default InquiryForm;
