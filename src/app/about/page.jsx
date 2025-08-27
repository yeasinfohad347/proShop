// app/about/page.jsx
"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-[#F07F13] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About ProShop</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Your trusted online shopping destination — delivering quality,
          affordability, and convenience.
        </p>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#F07F13] mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            ProShop started with a simple vision: to make online shopping easy
            and enjoyable for everyone. From the latest gadgets to daily
            essentials, we bring you carefully selected products with unbeatable
            deals. Our mission is to create a shopping experience that combines
            trust, speed, and customer satisfaction.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/banner-1.jpg"
            alt="About ProShop"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#F07F13] mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-[#F07F13]">
                Quality Products
              </h3>
              <p>
                We carefully select every product to ensure top quality for our
                customers.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-[#F07F13]">
                Customer First
              </h3>
              <p>
                Your satisfaction drives us. We prioritize excellent service and
                support.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-[#F07F13]">
                Fast & Secure
              </h3>
              <p>
                We ensure quick delivery and secure transactions for a seamless
                shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#F07F13] text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Thousands of Happy Shoppers
        </h2>
        <p className="mb-6">
          Experience the future of online shopping with ProShop today.
        </p>
        <a
          href="/products"
          className="bg-white text-[#F07F13] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
