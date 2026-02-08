'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ChatBubbles from '@/components/ui/ChatBubbles';
import Image from 'next/image';

/**
 * HeroSection Component
 * Implémentation de la première section obligatoire.
 * Focus sur la connexion émotionnelle pour la "Team Timides".
 */
const HeroSection = () => {
    // Mise à jour de la source avec le lien direct fonctionnel
    // Mise à jour de la source avec le lien direct fonctionnel

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FFFFFF] pt-20 pb-32 lg:pb-24">
            {/* Éléments décoratifs d'arrière-plan */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                    className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#FF69B4] rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF1493] rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Contenu textuel */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left order-1 lg:order-1"
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-pink-50 text-[#FF1493] text-xs font-bold uppercase tracking-widest mb-6 mt-6">
                        Édition Limitée Saint-Valentin
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#3C3C3C] leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Quand les mots <br />
                        <span className="italic text-[#DC143C]">restent coincés...</span>
                    </h1>

                    <p className="text-lg md:text-xl font-sans text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Parce que parfois, les mots restent coincés dans la gorge.
                        Offrez <strong>Le Complice</strong>, la présence qui dit tout sans faire de bruit.
                    </p>

                    {/* BOUTONS DESKTOP (Masqués sur mobile) */}
                    <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: ["0px 0px 0px rgba(220, 20, 60, 0)", "0px 10px 30px rgba(220, 20, 60, 0.3)", "0px 0px 0px rgba(220, 20, 60, 0)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-[#DC143C] text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg"
                        >
                            Offrir une présence
                        </motion.button>

                        <button className="border-2 border-pink-100 text-[#FF1493] px-10 py-5 rounded-full text-lg font-bold hover:bg-pink-50 transition-colors">
                            Découvrir son âme
                        </button>
                    </div>
                </motion.div>

                {/* Image du produit avec animation de flottaison */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="order-2 lg:order-2 flex justify-center relative"
                >
                    {/* Lueur subtile derrière l'image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-transparent rounded-full blur-3xl opacity-20 transform scale-75"></div>

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10 w-full max-w-[500px] lg:max-w-[600px]"
                    >
                        <Image
                            src="/images/hero-peluche.png"
                            alt="Le Complice - Peluche de Saint-Valentin"
                            width={500}
                            height={500}
                            priority
                            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(255,20,147,0.25)]"
                        />
                    </motion.div>

                    {/* Conversation dynamique en superposition */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-4 -right-4 md:bottom-0 md:-right-6 lg:right-0 scale-75 md:scale-90 origin-bottom-right bg-white/80 backdrop-blur-sm p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl border border-pink-100 block z-20"
                    >
                        <ChatBubbles />
                    </motion.div>
                </motion.div>

                {/* BOUTONS MOBILE (Visibles uniquement sur mobile, Order 3) */}
                <div className="flex lg:hidden flex-col w-full gap-4 order-3 items-center">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: ["0px 0px 0px rgba(220, 20, 60, 0)", "0px 10px 30px rgba(220, 20, 60, 0.3)", "0px 0px 0px rgba(220, 20, 60, 0)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-[#DC143C] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg w-full max-w-sm"
                    >
                        Offrir une présence
                    </motion.button>

                    <button className="border-2 border-pink-100 text-[#FF1493] px-8 py-4 rounded-full text-lg font-bold hover:bg-pink-50 transition-colors w-full max-w-sm">
                        Découvrir son âme
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
