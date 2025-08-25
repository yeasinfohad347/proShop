import dbConnetion from "@/lib/dbConnect";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

// This is a Server Component, do NOT use "use client"
const TopSell = async () => {
  // Connect to MongoDB and fetch top 6 products
  const serviceCollection = await dbConnetion("all-product");
  const data = await serviceCollection.find({}).limit(6).toArray();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          🔥 Top Selling Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((product) => (
            <div
              key={product._id.toString()}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col h-full"
            >
              <div className="relative w-full h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-t-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  unoptimized // Important for external images
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="mt-2 text-gray-700 text-sm line-clamp-2 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center mt-3 space-x-2">
                  <span className="text-[#F07F13] font-bold text-xl">
                    ${product.price}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <FaStar />
                    <span className="ml-1 text-gray-700">{product.rating}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Stock: {product.stock}
                </p>
                <Link href={`/products/${product._id}`}>
                  <button className="w-full mt-4 bg-[#F07F13] text-white py-2 rounded-lg hover:bg-orange-600 transition">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSell;
