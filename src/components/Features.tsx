import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function FeatureCard({ image, label, title, description }: any) {
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
        borderColor: "rgba(255, 255, 255, 0.1)",
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl bg-[#0a160d] border border-white/10 p-8 cursor-pointer group"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle closest-side, rgba(83, 219, 120, 0.15), transparent)",
        }}
      />
      <div className="relative z-10 flex flex-col items-start h-full">
        <div className="mb-10 w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center p-3">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-auto">
          <div className="text-[#53db78] text-sm font-semibold tracking-wide uppercase mb-2">
            {label}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const cards = [
    {
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb83b433a04ccd71234cec_object-1.svg",
      label: "Instant visibility. Instant action.",
      title: "Real-time threat detection",
      description:
        "Suspicious behavior gets flagged the second it appears. No lag. No noise.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb86ae9623b87aa0f83987_object-2.svg",
      label: "See everything. Miss nothing.",
      title: "Zero blind spots",
      description:
        "Full visibility into every endpoint, request, and action. If it moves, we see it.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/690bd9a2d795d586c8a98713_object-3.svg",
      label: "Plug into your stack. Fast.",
      title: "Seamless integration",
      description:
        "Connect in minutes. Works with the tools you already use, right out of the box.",
    },
  ];

  return (
    <section id="Features" className="py-24 bg-[#000c02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="text-[#53db78] text-sm font-semibold tracking-wide uppercase mb-4">
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Build to protect every layer
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 max-w-sm"
          >
            <p className="text-gray-400 text-lg">
              From backend to browser, every part of your stack stays locked
              down.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
