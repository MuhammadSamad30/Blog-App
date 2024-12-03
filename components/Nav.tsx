"use client";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#202d36] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wider">
          <Link href="/">Samad&apos;s Blog</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="/"
              className="text-[20px] text-white hover:text-teal-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-[20px] text-white hover:text-teal-400 transition duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/comment"
              className="text-[20px] text-white hover:text-teal-400 transition duration-300"
            >
              Add Comment
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <ul className="bg-[#044e83] text-white p-4 space-y-4">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-teal-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-teal-400 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/comment"
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-teal-400 transition duration-300"
              >
                Add Comment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
