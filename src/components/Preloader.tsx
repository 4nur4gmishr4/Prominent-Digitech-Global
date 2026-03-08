"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [phase, setPhase] = useState<"blur" | "focus" | "dropping">("blur");
    const COLUMNS = 6;

    useEffect(() => {
        const focusTimer = setTimeout(() => setPhase("focus"), 400);
        const dropTimer = setTimeout(() => setPhase("dropping"), 1800);
        const completeTimer = setTimeout(() => onComplete(), 3000);

        return () => {
            clearTimeout(focusTimer);
            clearTimeout(dropTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] flex pointer-events-none overflow-hidden">
            {Array.from({ length: COLUMNS }).map((_, i) => (
                <motion.div
                    key={i}
                    className="flex-1 h-full bg-[#FF5400]"
                    initial={{ y: 0 }}
                    animate={{ y: phase === "dropping" ? "-100%" : 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.7, 0, 0.3, 1],
                        delay: phase === "dropping" ? i * 0.08 : 0,
                    }}
                />
            ))}

            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence>
                    {phase !== "dropping" && (
                        <motion.h1
                            initial={{ filter: "blur(12px)", opacity: 0.5 }}
                            animate={{
                                filter: phase === "focus" ? "blur(0px)" : "blur(12px)",
                                opacity: 1,
                            }}
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight z-10 px-4 text-center"
                        >
                            loading your experience.
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
