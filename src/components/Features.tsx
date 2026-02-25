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
                borderColor: "rgba(83, 219, 120, 0.4)",
                boxShadow: "0 0 30px rgba(83, 219, 120, 0.15)",
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            ref={cardRef}
            className="relative overflow-hidden rounded-xl bg-[#061408] border border-white/5 cursor-pointer group flex flex-col transition-colors duration-300"
        >
            <div
                ref={glowRef}
                className="pointer-events-none absolute w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full opacity-0 mix-blend-screen"
                style={{
                    background:
                        "radial-gradient(circle closest-side, rgba(83, 219, 120, 0.2), transparent)",
                }}
            />

            {/* Image container mapping to top half of card */}
            <div className="relative z-10 w-full h-[280px] flex items-center justify-center pt-8 px-8 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(83,219,120,0.15)] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Text block mapping to bottom half */}
            <div className="relative z-10 p-8 pt-6 flex flex-col flex-grow">
                <div className="text-[#53db78] text-[0.85rem] font-medium tracking-wide mb-3">
                    {label}
                </div>
                <h3 className="text-[1.35rem] font-medium text-white tracking-tight leading-snug mb-3">{title}</h3>
                <p className="text-[#a1a1a9] text-[0.95rem] leading-[1.6] pr-2">{description}</p>
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
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-20 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-[55%]"
                    >
                        {/* Outline pill for Features label */}
                        <div className="inline-block border border-[#53db78]/40 text-[#53db78] text-xs font-semibold px-3 py-1.5 rounded mb-8">
                            Features
                        </div>

                        <h2 className="text-4xl md:text-[3.5rem] font-medium text-white tracking-tight leading-[1.1] max-w-xl">
                            Build to protect every layer
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-[45%] lg:pt-16 max-w-[420px] lg:ml-auto"
                    >
                        <p className="text-[#a1a1a9] text-[1.1rem] leading-relaxed">
                            From backend to browser, every part of your stack stays locked down.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
                    {cards.map((card, i) => (
                        <FeatureCard key={i} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
