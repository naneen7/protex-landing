import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Capabilities() {
  const Card = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(glow, {
          x,
          y,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const onMouseEnter = () => {
        gsap.to(glow, {
          opacity: 1,
          duration: 0.3,
        });
        gsap.to(card, {
          borderColor: "rgba(83, 219, 120, 0.5)",
          boxShadow: "0 0 20px rgba(83, 219, 120, 0.2)",
          duration: 0.4,
        });
      };

      const onMouseLeave = () => {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(card, {
          borderColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 0 0px rgba(83, 219, 120, 0)",
          duration: 0.4,
        });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mouseleave", onMouseLeave);

      return () => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseenter", onMouseEnter);
        card.removeEventListener("mouseleave", onMouseLeave);
      };
    }, []);

    return (
      <div
        ref={cardRef}
        className={`relative overflow-hidden rounded-2xl bg-[#0a160d] border border-white/5 p-8 transition-colors ${className}`}
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full opacity-0"
          style={{
            background:
              "radial-gradient(circle closest-side, rgba(83, 219, 120, 0.12), transparent)",
          }}
        />
        <div className="relative z-10 w-full h-full flex flex-col">
          {children}
        </div>
      </div>
    );
  };

  return (
    <section id="Capabilities" className="py-24 bg-[#000c02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#53db78] text-sm font-semibold tracking-wide uppercase mb-4"
          >
            Advanced Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Automate protection. <br className="hidden md:block" />
            Customize everything.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed"
          >
            These advanced capabilities give you the automation, flexibility,
            and resilience needed to stay ahead of evolving threats.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Row 1, Col 1 (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Card Large */}
            <Card className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src="https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/6915effc9d7d3e6d72eb2e72_security-layers.svg"
                  alt="Security Layers"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
                <div className="text-[#53db78] text-xs font-semibold tracking-wide uppercase mb-2">
                  Adaptive security layers
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Built to grow with you
                </h3>
                <p className="text-gray-400">
                  Whether you’re scaling from 5 to 500 endpoints, Protex adapts
                  its architecture dynamically, from cloud-native microservices
                  to enterprise-grade defense policies.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Row 1, Col 2 (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            {/* Card Medium */}
            <Card className="flex flex-col text-center items-center justify-between h-full">
              <div className="mb-8">
                <img
                  src="https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/690bd4b83eedf0e7fd546115_multi-region.svg"
                  alt="Multi-region"
                  className="mx-auto"
                />
              </div>
              <div>
                <div className="text-[#53db78] text-xs font-semibold tracking-wide uppercase mb-2">
                  Unified visibility. Global protection
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Multi-region awareness
                </h3>
                <p className="text-gray-400 text-sm">
                  Stay protected across locations, clouds and teams.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Bottom Row - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Card Small 1 */}
            <Card className="h-full">
              <div className="text-[#53db78] mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M20 24h-8.137a4.13 4.13 0 0 0-.429-1.02L21.98 12.434A3.994 3.994 0 1 0 20.141 8H14v2h6.141a3.96 3.96 0 0 0 .425 1.02L10.02 21.566A3.994 3.994 0 1 0 11.859 26H20v3h8v-8h-8zm4-17a2 2 0 1 1-2 2a2.002 2.002 0 0 1 2-2zM8 27a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm14-4h4v4h-4zM9.693 12.75a5 5 0 0 1 0-7.5l1.324 1.5a3 3 0 0 0 0 4.501z"></path>
                  <path d="M7.047 15.751a9 9 0 0 1 0-13.501l1.324 1.5a7 7 0 0 0 0 10.501Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Behavioral anomaly detection
              </h3>
              <p className="text-gray-400 text-sm">
                Detects subtle deviations in user and system behavior.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            {/* Card Small 2 */}
            <Card className="h-full">
              <div className="text-[#53db78] mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M20 27H7a2.006 2.006 0 0 1-2-2V12h2v13h13Z"></path>
                  <path d="m23.4 22l-4-4a3.606 3.606 0 0 0 .6-2a4.012 4.012 0 0 0-4-4a3.606 3.606 0 0 0-2 .6l-4-4V2H2v8h6.6l4 4a3.606 3.606 0 0 0-.6 2a4.012 4.012 0 0 0 4 4a3.606 3.606 0 0 0 2-.6l4 4V30h8v-8ZM8 8H4V4h4Zm8 10a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2Zm12 10h-4v-4h4Z"></path>
                  <path d="M25 20h2V7a2.006 2.006 0 0 0-2-2H12v2h13Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Modular rule engine
              </h3>
              <p className="text-gray-400 text-sm">
                Customize how your system reacts — with building blocks for
                threat response logic
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Card Large config */}
            <Card className="flex flex-col justify-between h-full">
              <div className="mb-6 flex-grow">
                <img
                  src="https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/6915f13b2e0ef1bb6ceb88d8_zero-config.svg"
                  alt="Zero Config"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="text-[#53db78] text-xs font-semibold tracking-wide uppercase mb-2">
                  Always up to date. Always secure.
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Zero config maintenance
                </h3>
                <p className="text-gray-400 text-sm">
                  Forget manual patching or policy tuning. Our pro tier keeps
                  everything current and resilient. Without your team lifting a
                  finger.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
