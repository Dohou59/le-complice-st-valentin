"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-pink-100/50"
                    : "bg-white/40 backdrop-blur-md"
            )}
            style={{
                transform: scrolled ? "translateZ(0)" : "translateZ(0)",
            }}
        >
            <div className="container mx-auto px-6 h-[80px] flex items-center justify-between">

                {/* Logo avec effet 3D au hover */}
                <Link href="/" className="group relative">
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            rotateX: -5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#DC143C] to-[#FF1493] bg-clip-text text-transparent italic" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.05em' }}>
                            Le Complice
                        </h1>
                        {/* Ombre 3D */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C] to-[#FF1493] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                            style={{ transform: "translateZ(-10px)" }}
                        />
                    </motion.div>
                </Link>

                {/* Navigation avec effet glass */}
                <nav className="hidden md:flex items-center gap-8">
                    {["L'Histoire", "Le Cadeau", "Témoignages"].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            whileHover={{
                                scale: 1.1,
                                rotateX: 10,
                            }}
                            transition={{ duration: 0.2 }}
                            className="relative text-gray-700 font-medium text-sm uppercase tracking-wider hover:text-[#DC143C] transition-colors"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {item}
                            {/* Underline animé */}
                            <motion.span
                                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#FF1493]"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </nav>

                {/* CTA Button avec effet 3D glass */}
                <motion.button
                    whileHover={{
                        scale: 1.08,
                        rotateY: 5,
                        rotateX: -5,
                        boxShadow: "0 20px 40px rgba(220, 20, 60, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative px-8 py-3 rounded-full font-bold text-white overflow-hidden group"
                    style={{
                        transformStyle: "preserve-3d",
                        background: "linear-gradient(135deg, #DC143C 0%, #FF1493 100%)",
                    }}
                >
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Shine effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                    />

                    <span className="relative z-10 text-sm uppercase tracking-wider">
                        Offrir ❤️
                    </span>
                </motion.button>

            </div>
        </motion.header>
    );
}
