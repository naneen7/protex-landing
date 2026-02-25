import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Discover() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <section id="Discover-more" className="py-32 bg-[#000c02]">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.p
                    ref={ref}
                    style={{ opacity }}
                    className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight"
                >
                    Security shouldn’t feel like a chore. With automated checks and adaptive defense, your systems stay protected, even while you sleep.
                </motion.p>
            </div>
        </section>
    );
}
