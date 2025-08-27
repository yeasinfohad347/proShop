"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  // ✅ Active link style
  const linkClass = (href) =>
    `block px-4 py-2 rounded-md transition ${
      pathname === href
        ? "bg-white text-[#F07F13] font-semibold"
        : "hover:bg-white/20"
    }`;

  return (
    <nav className="bg-[#F07F13] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/Favicon.png"
            alt="ProShop Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">ProShop</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            All Products
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About Us
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className={linkClass("/dashboard/add-product")}
              >
                Add Product
              </Link>
              <button
                onClick={() => signOut()}
                className="ml-2 px-4 py-2 bg-white text-[#F07F13] font-medium rounded-md hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
          )}
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
        <div className="md:hidden bg-[#F07F13] text-white px-6 py-4 space-y-2">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            All Products
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About Us
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className={linkClass("/dashboard/add-product")}
              >
                Add Product
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full px-4 py-2 bg-white text-[#F07F13] font-medium rounded-md hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
