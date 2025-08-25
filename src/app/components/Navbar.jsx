// components/Navbar.jsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-[#F07F13] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
        
        {/* Logo + Name (Left Side) */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">NextShop</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/products" className="hover:text-gray-200">All Products</Link>
          <Link href="/about" className="hover:text-gray-200">About Us</Link>

          {/* Theme Toggle */}
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />

          {/* Login Button */}
          <Link 
            href="/login" 
            className="ml-4 px-4 py-2 bg-white text-[#F07F13] font-medium rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F07F13] text-white px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-gray-200">Home</Link>
          <Link href="/products" className="block hover:text-gray-200">All Products</Link>
          <Link href="/about" className="block hover:text-gray-200">About Us</Link>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
            <span>Theme</span>
          </div>

          {/* Login Button */}
          <Link 
            href="/login" 
            className="block w-full text-center px-4 py-2 bg-white text-[#F07F13] font-medium rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}
