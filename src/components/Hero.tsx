import React, { Suspense, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
    const [splineLoaded, setSplineLoaded] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
        show: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: { duration: 0.8, ease: "circOut" as const },
        },
    };

    return (
        <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Spline 3D Background */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full bg-[#000d01]" />}>
                    <Spline
                        scene="https://prod.spline.design/d68dh5bBVMBT3XHh/scene.splinecode"
                        onLoad={() => setSplineLoaded(true)}
                        style={{ width: "100%", height: "100%" }}
                    />
                </Suspense>

                {/* Dark overlay to dim the Spline scene */}
                <div className="absolute inset-0 bg-[#000d01]/55 pointer-events-none" />

                {/* Gradient overlays — stronger fade at top and bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d01] via-[#000d01]/20 to-[#000d01]/60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#000d01] to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center mt-20 pointer-events-none">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={item}
                        className="mb-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 pointer-events-auto"
                    >
                        <ShieldCheck className="w-4 h-4 text-[#53db78]" />
                        <span>Trusted by over 1,000 businesses worldwide</span>
                    </motion.div>

                    {/* Heading */}
                    <div className="mb-6">
                        <motion.h1
                            variants={item}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2"
                        >
                            Unbreakable security
                        </motion.h1>
                        <motion.h1
                            variants={item}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-[#758696]"
                        >
                            for a connected world
                        </motion.h1>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Even the smallest threat leaves a trace.{" "}
                        <br className="hidden md:block" />
                        Protex follows the signals others miss.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
                    >
                        <a
                            href="#Contact"
                            className="w-full sm:w-auto px-8 py-4 bg-[#53db78] hover:bg-[#3fb461] transition-all text-black font-semibold rounded-md shadow-[0_0_20px_rgba(83,219,120,0.3)] hover:shadow-[0_0_30px_rgba(83,219,120,0.5)]"
                        >
                            Request demo
                        </a>
                        <a
                            href="#Discover-more"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-white font-semibold rounded-md"
                        >
                            Discover more
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
}
