import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Languages } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Features', href: '#' },
    { name: 'Plans', href: '#' },
    { name: 'Enterprise', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  ">
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
          <Link href="/get-started" className="relative group p-[1px] inline-flex items-center justify-center rounded-full overflow-hidden">
            {/* The Gradient Border Background */}
            <span className="absolute inset-0 bg-gradient-to-l from-green-500 to-green-800 rounded-full"></span>
            
            {/* The Button Content */}
            <div className="relative px-3 py-1 bg-black rounded-full transition-all group-hover:bg-transparent">
              <span className="text-white text-lg font-semibold">
                Get Traverse
              </span>
            </div>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;