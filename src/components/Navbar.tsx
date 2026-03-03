import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Languages } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Plans", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  ">
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}
      </style>
      <div className="max-w-11/12 mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex  items-center">
            <Image
              src="/logo.png"
              alt="Traverse Logo"
              width={32}
              height={32}
              className="object-contain w-[60px] h-[60px] "
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=" hover:text-green-400 transition-colors text-lg font"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Language and CTA */}
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Languages size={20} />
          </button>

          {/* Gradient Border Button */}
          <Link
            href="/get-started"
            className="
    relative
    inline-flex
    items-center
    justify-center
    px-8
    py-3
    rounded-full
    text-white
    font-semibold
    transition-all
    duration-300
    border
    border-lime-400
    bg-black
    shadow-[0_0_10px_rgba(124,255,0,0.6)]
    hover:bg-lime-400
    hover:text-black
    hover:shadow-[0_0_10px_rgba(124,255,0,0.9)]
  "
          >
            Get Traverse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
