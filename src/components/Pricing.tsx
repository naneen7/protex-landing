import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const features = [
    "Unmetered endpoints",
    "Real-time threat detection",
    "Behavioral anomaly detection",
    "Modular rule engine",
    "24/7 dedicated support",
    "Custom integrations",
  ];

  return (
    <section id="Pricing" className="py-24 bg-[#000c02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <div className="text-[#53db78] text-sm font-semibold tracking-wide uppercase mb-4">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Simple pricing.
              <br />
              Unlimited protection.
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              {" "}
              Stop counting endpoints and start securing your setup. Protex
              grows with your infrastructure. Without surprise costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative overflow-hidden rounded-2xl bg-[#0a160d] border border-[#53db78]/20 p-8 flex flex-col group"
          >
            <div className="pointer-events-none absolute w-full h-full inset-0 bg-gradient-to-br from-[#53db78]/5 to-transparent" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                <div className="text-4xl font-bold">
                  $499{" "}
                  <span className="text-lg text-gray-400 font-normal">
                    / month
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#53db78]/20 text-[#53db78] flex items-center justify-center shrink-0">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#Contact"
                className="w-full inline-flex justify-center items-center px-8 py-4 bg-[#53db78] hover:bg-[#3fb461] transition-all text-black font-semibold rounded-md"
              >
                Get started
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
