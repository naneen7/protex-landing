import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="Contact"
      className="py-32 bg-[#000c02] relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,219,120,0.1)_0,transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Secure your
          <br />
          infrastructure today.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto"
        >
          Stop counting endpoints and start securing your setup. Protex grows
          with your infrastructure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#Contact"
            className="inline-flex items-center px-8 py-4 bg-[#53db78] hover:bg-[#3fb461] transition-all text-black font-semibold rounded-md shadow-[0_0_30px_rgba(83,219,120,0.4)] hover:shadow-[0_0_40px_rgba(83,219,120,0.6)]"
          >
            Start a free trial
          </a>
        </motion.div>
      </div>
    </section>
  );
}
