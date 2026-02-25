import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 py-4 px-6 top-0 backdrop-blur-md bg-[#000d01]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" aria-current="page" className="flex items-center gap-2">
          <img
            src="https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb34761fea3067f61e6fcb_protex-logo.svg"
            alt="Protex Logo"
            className="h-8"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#Features"
            className="text-white hover:text-white/70 transition-colors"
          >
            Features
          </a>
          <a
            href="#Capabilities"
            className="text-white hover:text-white/70 transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#How-it-works"
            className="text-white hover:text-white/70 transition-colors"
          >
            How it works
          </a>
          <a
            href="#Pricing"
            className="text-white hover:text-white/70 transition-colors"
          >
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#Contact"
            className="hidden md:inline-flex items-center justify-center bg-[#53db78] hover:bg-[#3fb461] transition-colors text-black px-6 py-2.5 rounded-md font-semibold text-sm"
          >
            Request demo
          </a>
          {/* Mobile menu button */}
          <button className="md:hidden flex flex-col gap-[5px] p-2">
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
