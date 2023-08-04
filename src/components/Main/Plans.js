import React from "react";
import { motion } from "framer-motion";

const PricingCard = ({ plan, price, features, isValueForMoney }) => {
  return (
    <div className="flex flex-col bg-white p-8 rounded-lg shadow-md">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: plan * 0.2 }}
        className="text-2xl font-bold text-gray-900 mb-4 bg-transparent"
      >
        {plan}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: plan * 0.2 }}
        className="text-4xl font-bold text-green-600 mb-6 bg-transparent"
      >
        &#8377; {price}
      </motion.div>
      {isValueForMoney && (
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: plan * 0.2 }}
          className="text-white text-center tracking-widest bg-orange-600 text-xl font-bold py-2 px-4 rounded-lg mb-4"
        >
          Value for Money
        </motion.p>
      )}
      <ul className="space-y-4 bg-transparent h-full">
        {features.map((feature) => (
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: plan * 0.2 }}
            key={feature}
            className="flex items-center bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500 mr-4 bg-transparent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-900 bg-transparent text-xl">
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>
      <motion.button
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: plan * 0.2 }}
        className="text-xl tracking-widest mt-8 px-4 py-3 bg-green-600 text-white font-bold rounded-lg w-full hover:bg-green-900"
      >
        Get Started
      </motion.button>
    </div>
  );
};

const Pricing = () => {
  const pricingData = [
    {
      plan: "Basic",
      price: "7000",
      features: [
        "1-day tour to a local destination",
        "Experienced tour guide",
        "Transportation included",
        "Lunch provided",
        "-----",
      ],
    },
    {
      plan: "Medium",
      price: "10,000",
      features: [
        "2-day tour to popular destinations",
        "Experienced tour guide",
        "Transportation and accommodation included",
        "Meals provided",
        "Optional activities",
      ],
    },
    {
      plan: "Pro",
      price: "30,000",
      features: [
        "3-day tour to premium destinations",
        "Experienced tour guide",
        "Luxury transportation and accommodation",
        "Meals included",
        "VIP access to attractions",
        "Personalized itinerary",
      ],
      isValueForMoney: true,
    },
  ];
  const text = "Our Plans";
  return (
    <div className="container mx-auto py-16">
      <h2 className="font-bold text-5xl text-center text-green-700 mb-8">
        {text.split("").map((letter, id) => (
          <span
            key={id}
            className={`inline-block animate-wave ${
              letter === " " ? "ml-4" : ""
            }`}
            style={{ animationDelay: `${id * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((data) => (
          <PricingCard
            key={data.plan}
            plan={data.plan}
            price={data.price}
            features={data.features}
            isValueForMoney={data.isValueForMoney || false}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
