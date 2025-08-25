"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">proShop</h2>
          <p className="text-gray-400">
            Find & Report Lost Items easily. Community powered platform to help you recover your lost belongings quickly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="/products" className="hover:text-orange-500 transition">Products</a></li>
            <li><a href="/about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} proShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
