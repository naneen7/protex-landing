import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lina Rodriguez",
      role: "CTO",
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/69162afb67d1feade1278003_profile-image-7%20Small.avif",
      logo: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75beaa0f1f049d57a9ec_client-logo-4.svg",
      text: "Protex flagged a critical misconfig in our staging server within minutes. That alone saved us from a potential breach.",
    },
    {
      name: "Markus Lenz",
      role: "Head of Security",
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/69162b22d3c9e5a81f08d5df_profile-man-glasses%201%20Small.avif",
      logo: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/690c76801d33f9897bc03699_client-logo-5.svg",
      text: "We switched from a bloated enterprise solution to Protex, and got better visibility with half the complexity.",
    },
    {
      name: "Jason Mehta",
      role: "DevOps Lead",
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/69162afb669f7727e7abc71d_profile-image-3%20Small.avif",
      logo: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75a60b4fcd7cd3a5cc5f_client-logo-2.svg",
      text: "The setup was almost too easy. Our team had real-time protection running before the coffee machine even booted.",
    },
    {
      name: "Claire Dubois",
      role: "Compliance Manager",
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/69162afb611dca89fbca6d75_profile-image-9%20Small.avif",
      logo: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75b3161664e9de07d9ee_client-logo-3.svg",
      text: "We needed a tool that was strong but invisible unless there was an issue. Protex strikes that balance perfectly.",
    },
    {
      name: "Thomas Karl",
      role: "Founder",
      image:
        "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/69162afbbc2929c86313764f_profile-image-4%20Small.avif",
      logo: "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/68fb75967292bc3f3abdc508_client-logo-1.svg",
      text: "I’m not a security expert, but with Protex I don’t have to be. It just works — and keeps working.",
    },
  ];

  const Card = ({ item }: { item: any }) => {
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
        className="relative overflow-hidden shrink-0 w-[400px] rounded-2xl bg-[#0a160d] border border-white/5 p-8 flex flex-col group mx-3"
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full opacity-0"
          style={{
            background:
              "radial-gradient(circle closest-side, rgba(83, 219, 120, 0.12), transparent)",
          }}
        />
        <div className="relative z-10 flex flex-col h-full">
          {/* Star Rating */}
          <div className="flex gap-1 mb-6 text-[#53db78]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" />
              </svg>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-white/10"
              />
              <div>
                <div className="text-white font-semibold">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.role}</div>
              </div>
            </div>
            <img
              src={item.logo}
              alt="Company Logo"
              className="h-6 opacity-60"
            />
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">{item.text}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="Testimonials" className="py-24 bg-[#000c02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#53db78] text-sm font-semibold tracking-wide uppercase mb-4"
        >
          Testimonials
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Trusted by teams
          <br />
          that move fast
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Tech teams rely on our platform to stay protected while they scale.
        </motion.p>
      </div>

      {/* Marquee Tickers */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000c02] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000c02] to-transparent z-10" />

        {/* Row 1 */}
        <div className="flex mb-6 whitespace-nowrap">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <Card key={`row1-${i}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex"
            initial={{ x: "-50%" }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <Card key={`row2-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
