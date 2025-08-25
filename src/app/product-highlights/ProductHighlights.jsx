"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTruckFast, FaTags, FaRotateLeft, FaLock, FaHeadset, FaGift } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaTruckFast className="text-white text-3xl" />,
    title: "Fast Delivery",
    desc: "Get your products delivered quickly and on time.",
  },
  {
    icon: <FaTags className="text-white text-3xl" />,
    title: "Best Prices",
    desc: "Enjoy competitive prices on all our products.",
  },
  {
    icon: <FaRotateLeft className="text-white text-3xl" />,
    title: "Easy Returns",
    desc: "Hassle-free returns within a few days.",
  },
  {
    icon: <FaLock className="text-white text-3xl" />,
    title: "Secure Payments",
    desc: "Shop with confidence using secure payment methods.",
  },
  {
    icon: <FaHeadset className="text-white text-3xl" />,
    title: "24/7 Support",
    desc: "Our support team is always available to assist you.",
  },
  {
    icon: <FaGift className="text-white text-3xl" />,
    title: "Special Offers",
    desc: "Exclusive deals and discounts for our valued customers.",
  },
];

const ProductHighlights = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Product Highlights</h2>
        <p className="text-gray-600 mt-2">Why shop with us?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#F07F13] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center space-y-4 hover:scale-105 transform transition duration-300"
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-center text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;
