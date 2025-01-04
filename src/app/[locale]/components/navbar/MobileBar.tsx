"use client";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons from react-icons

export default function MobileBar({ navLinks }:any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center mx-10">
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black focus:outline-none"
      >
        {isOpen ? <FiX size={34} /> : <FiMenu size={34} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((navLink:any, index:any) => (
              <Link href={navLink.direction} key={index} onClick={() => setIsOpen(false)}>
                <h1 className="text-lg font-normal text-black">{navLink.name}</h1>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
