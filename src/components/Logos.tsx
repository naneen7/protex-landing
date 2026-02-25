import React from "react";
import { motion } from "framer-motion";

export default function Logos() {
  const logos = [
    {
      src: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75967292bc3f3abdc508_client-logo-1.svg",
      alt: "Zunapulse",
    },
    {
      src: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75a60b4fcd7cd3a5cc5f_client-logo-2.svg",
      alt: "Flowbyte",
    },
    {
      src: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75b3161664e9de07d9ee_client-logo-3.svg",
      alt: "CipherCloud",
    },
    {
      src: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75beaa0f1f049d57a9ec_client-logo-4.svg",
      alt: "Novastack",
    },
  ];

  return (
    <section className="py-24 bg-[#000d01] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-sm tracking-widest uppercase mb-12 font-medium"
        >
          Securing the World’s Fastest-Growing Companies
        </motion.h2>

        <div className="relative flex overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000d01] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000d01] to-transparent z-10" />

          <motion.div
            className="flex gap-16 md:gap-32 items-center pr-16 md:pr-32 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
