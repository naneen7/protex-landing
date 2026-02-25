import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HowItWorks() {
    const Card = ({ title, description, image, align = "left" }: any) => {
        const cardRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const card = cardRef.current;
            if (!card) return;

            const onMouseEnter = () => {
                gsap.to(card, {
                    boxShadow:
                        "0 0 40px rgba(83, 219, 120, 0.4), inset 0 0 20px rgba(83, 219, 120, 0.2)",
                    borderColor: "rgba(83, 219, 120, 0.8)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            };

            const onMouseLeave = () => {
                gsap.to(card, {
                    boxShadow:
                        "0 0 0px rgba(83, 219, 120, 0), inset 0 0 0px rgba(83, 219, 120, 0)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            };

            card.addEventListener("mouseenter", onMouseEnter);
            card.addEventListener("mouseleave", onMouseLeave);

            return () => {
                card.removeEventListener("mouseenter", onMouseEnter);
                card.removeEventListener("mouseleave", onMouseLeave);
            };
        }, []);

        return (
            <div
                ref={cardRef}
                className="relative overflow-hidden rounded-xl bg-[#0a160d] border border-white/10 p-6 flex flex-col mb-6"
            >
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                    <p className="text-gray-400 text-[0.95rem] leading-relaxed">{description}</p>
                </div>
                <div className="w-full mt-auto">
                    <img
                        src={image}
                        alt={title}
                        className="w-full max-h-[280px] object-contain rounded-lg"
                    />
                </div>
            </div>
        );
    };

    const steps = [
        {
            title: "Analyze setup. Surface weaknesses instantly",
            description:
                "The system scans your infrastructure the moment it connects, uncovering misconfigurations, outdated packages, and exposed endpoints — before attackers do.",
            image:
                "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/6903d718b713f1aa99d8540e_step-1-image.svg",
        },
        {
            title: "Neutralize Threats",
            description:
                "Once vulnerabilities are detected, smart rules and real-time protection are deployed to lock down systems and stop threats before they spread.",
            image:
                "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/6903e37c275c15038013d633_step-2-image.svg",
        },
        {
            title: "Stay ahead of evolving threats",
            description:
                "The platform keeps learning from your traffic and global attack patterns. You get ongoing insights, alerts, and updates — without lifting a finger",
            image:
                "https://cdn.prod.website-files.com/68d83f72d281eefaf4a62163/691639eaf41777c0160086f1_step-3-image.svg",
        },
    ];

    return (
        <section id="How-it-works" className="py-24 bg-[#000c02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 lg:sticky lg:top-32 self-start"
                    >
                        <div className="inline-block border border-[#53db78]/40 text-[#53db78] text-xs font-semibold px-3 py-1.5 rounded mb-6">
                            How it works
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-5 leading-[1.15]">
                            How we keep your company secured
                        </h2>
                        <p className="text-gray-400 text-base mb-8">
                            No complexity. Just clean, effective protection in three simple
                            steps.
                        </p>
                        <a
                            href="#Contact"
                            className="inline-flex px-8 py-4 bg-[#53db78] hover:bg-[#3fb461] transition-all text-black font-semibold rounded-md shadow-[0_0_20px_rgba(83,219,120,0.3)] hover:shadow-[0_0_30px_rgba(83,219,120,0.5)]"
                        >
                            Request demo
                        </a>
                    </motion.div>

                    <div className="lg:w-2/3 flex flex-col gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card {...step} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
