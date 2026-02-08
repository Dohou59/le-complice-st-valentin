'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * REDESIGN V2 : L'Anatomie de la Tendresse
 * Focus : Équilibre visuel, typographie éditoriale et immersion tactile.
 */
const PresentationSection = () => {
    const pelucheSrc = "/images/lifestyle.png";

    const features = [
        {
            id: 'taille',
            label: "Format Confidence",
            value: "30 cm de pur réconfort",
            description: "Une taille pensée pour s'adapter à toutes les étreintes, facile à glisser sous le bras ou sur un oreiller.",
            icon: "/icons/Taille.png"
        },
        {
            id: 'matiere',
            label: "Texture Safe-Place",
            value: "Coton Premium Hypoallergénique",
            description: "Un pelage ultra-dense et soyeux qui apaise instantanément le stress d'une simple caresse.",
            icon: "/icons/Matiere.png"
        },
        {
            id: 'plus',
            label: "Finition Cœur",
            value: "Broderie Artisanale 'Love'",
            description: "Le symbole de votre message, brodé avec précision pour résister au temps et aux câlins répétés.",
            icon: "/icons/Coeur broder.png"
        },
        {
            id: 'role',
            label: "Présence Silencieuse",
            value: "Votre Ambassadeur 24h/24",
            description: "Elle ne demande rien, mais offre tout son soutien quand vous n'êtes pas là pour le faire.",
            icon: "/icons/Role.png"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Titre de section style Magazine */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#DC143C] font-bold uppercase tracking-[0.3em] text-xs block mb-4"
                        >

                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#3C3C3C] leading-[0.9]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Plus qu'un <br />
                            <span className="text-[#FF1493] italic">simple objet.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 font-light max-w-xs text-right hidden md:block"
                    >
                        Chaque fibre du Complice a été sélectionnée pour sa capacité à absorber le stress et diffuser de la tendresse.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* GRILLE DE CARACTÉRISTIQUES (Style Minimaliste) */}
                    <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
                        {features.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 bg-[#F5F5F5] rounded-[40px] hover:bg-[#DC143C] transition-all duration-500"
                            >
                                <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#DC143C] mb-2 group-hover:text-white/70 transition-colors">
                                    {item.label}
                                </h3>
                                <p className="text-xl font-bold text-[#3C3C3C] mb-3 leading-tight group-hover:text-white transition-colors">
                                    {item.value}
                                </p>
                                <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* LARGE IMAGE FOCUS (Sticky on desktop) */}
                    <div className="lg:order-2 relative lg:sticky lg:top-32 h-fit">
                        <div className="relative aspect-square bg-[#F5F5F5] rounded-[60px] flex items-center justify-center overflow-hidden border border-gray-100">
                            {/* Background text decoration */}
                            <span className="absolute inset-0 flex items-center justify-center text-[18vw] font-serif font-bold text-black/[0.02] select-none">
                                SOFT
                            </span>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="relative z-10 w-full max-w-[450px]"
                            >
                                <Image
                                    src={pelucheSrc}
                                    alt="Zoom Peluche"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Tag "Safe Place" flottant */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-10 right-10 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white z-20"
                            >
                                <span className="text-[#DC143C] font-bold text-xs">✨ Safe Place Approved</span>
                            </motion.div>
                        </div>

                        {/* Petit guide pour la Team Timides sous l'image */}
                        <div className="mt-8 flex gap-4 items-center px-4">
                            <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center text-pink-300 font-serif font-bold text-xl">
                                ?
                            </div>
                            <p className="text-xs text-gray-400 italic">
                                Saviez-vous que serrer une peluche libère de l'oxytocine, l'hormone de l'attachement ? Parfait pour les cœurs qui battent trop fort.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PresentationSection;
