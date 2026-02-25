import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text =
    "Security shouldn\u2019t feel like a chore. With automated checks and adaptive defense, your systems stay protected, even while you sleep.";

function Word({
    word,
    index,
    total,
    scrollYProgress,
}: {
    word: string;
    index: number;
    total: number;
    scrollYProgress: any;
}) {
    // Each word lights up at a staggered point in the scroll
    const start = index / total;
    const end = (index + 1) / total;

    const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
    const color = useTransform(
        scrollYProgress,
        [start, end],
        ["rgb(60, 75, 65)", "rgb(255, 255, 255)"]
    );

    return (
        <motion.span
            style={{ opacity, color }}
            className="inline-block mr-[0.3em] transition-none"
        >
            {word}
        </motion.span>
    );
}

export default function Discover() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.4"],
    });

    const words = text.split(" ");

    return (
        <section id="Discover-more" className="py-32 md:py-44 bg-[#000c02]">
            <div className="max-w-5xl mx-auto px-6 text-center" ref={containerRef}>
                <p className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.25] tracking-tight">
                    {words.map((word, i) => (
                        <Word
                            key={i}
                            word={word}
                            index={i}
                            total={words.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </p>
            </div>
        </section>
    );
}
