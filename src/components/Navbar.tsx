"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Languages, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Plans", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <nav
  className={`fixed top-4 left-[47%] -translate-x-1/2 w-[85%] z-50 transition-all duration-300 ${
    scrolled
      ? "bg-[#030A00] rounded-full shadow-lg shadow-black/40"
      : "bg-[#030A00] rounded-full"
  }`}
>
      <div className="max-w-11/12 mx-auto  px-[0px] h-16 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Traverse Logo"
              width={30}
              height={30}
              className="object-contain w-[30px] h-[30px]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-green-400 transition-colors text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <button className="hidden md:flex ml-30 text-gray-300 hover:text-white transition-colors">
  <Languages size={20} />
</button>

          {/* Button */}
          <Link
            href="/get-started"
            className="hidden md:inline-flex items-center justify-center px-8 py-2 rounded-full text-white font-semibold transition-all duration-300 border border-lime-400 bg-black shadow-[0_0_10px_rgba(124,255,0,0.6)] hover:bg-lime-400 hover:text-black hover:shadow-[0_0_10px_rgba(124,255,0,0.9)]"
          >
            Get Traverse
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#030A00] border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg hover:text-green-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button className="flex text-gray-300 hover:text-white transition-colors">
              <Languages size={20} />
            </button>

            <Link
              href="/get-started"
              className="px-4 py-2 rounded-full text-white font-semibold border border-lime-400 bg-black shadow-[0_0_10px_rgba(124,255,0,0.6)] hover:bg-lime-400 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Get Traverse
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;