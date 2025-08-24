// components/Navbar.jsx
"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-[#F07F13] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
        
        {/* Logo + Name (Left Side) */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">NextShop</span>
        </div>

        {/* Navigation Links (Right Side) */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/products" className="hover:text-gray-200">All Products</Link>
          <Link href="/about" className="hover:text-gray-200">About Us</Link>
          
          {/* Login Button */}
          <Link 
            href="/login" 
            className="ml-4 px-4 py-2 bg-white text-[#F07F13] font-medium rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
