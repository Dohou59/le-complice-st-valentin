'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

/**
 * SECTION 5 : Prix et Offre - "Le Pack Sérénité"
 * Mise à jour : Zoom prononcé sur l'image sans augmenter la taille du conteneur.
 */
const PrixSection = () => {
    const { addToCart } = useCart();

    // État pour le compte à rebours vers le 14 Février
    const [timeLeft, setTimeLeft] = useState({
        jours: 0,
        heures: 0,
        minutes: 0,
        secondes: 0
    });

    useEffect(() => {
        const targetDate = new Date("2026-02-14T00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
                heures: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                secondes: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="offre" className="py-12 bg-white flex justify-center items-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[1000px] w-full bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row border border-gray-100"
            >

                {/* CÔTÉ GAUCHE : Visuel Produit avec Zoom Interne */}
                <div className="lg:w-1/2 bg-[#FFF0F5] flex items-center justify-center p-0 relative overflow-hidden min-h-[400px] lg:min-h-[600px]">
                    {/* Lueur de fond panoramique */}
                    <div className="absolute w-[600px] h-[600px] bg-white/60 rounded-full blur-[100px]"></div>

                    <motion.div
                        initial={{ scale: 1.4 }} // Zoom initial
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 1, 0],
                            scale: [1.4, 1.5, 1.4] // Animation de respiration
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full max-w-none relative z-10"
                    >
                        <Image
                            src="/images/hero-peluche.webp"
                            alt="Le Pack Sérénité - Zoom Focus"
                            width={600}
                            height={600}
                            className="w-full h-auto drop-shadow-[0_40px_50px_rgba(220,20,60,0.1)] object-contain"
                        />
                    </motion.div>

                    {/* Badge flottant interactif */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-8 left-8 z-20 bg-white px-5 py-2 rounded-full shadow-lg border border-pink-50"
                    >
                        <p className="text-[#DC143C] font-bold text-xs">✨ Qualité Câlin Supérieure</p>
                    </motion.div>
                </div>

                {/* CÔTÉ DROIT : Détails et Conversion */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <div className="mb-8">
                        <span className="text-[#DC143C] font-bold uppercase tracking-[0.3em] text-[10px] block mb-3">
                            L'offre incontournable
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#3C3C3C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Le Pack <br className="hidden lg:block" /> "Sérénité"
                        </h2>

                        {/* COMPTE À REBOURS COMPACT */}
                        <div className="flex gap-2 mb-8">
                            {[
                                { label: 'Jours', value: timeLeft.jours },
                                { label: 'Heures', value: timeLeft.heures },
                                { label: 'Minutes', value: timeLeft.minutes },
                                { label: 'Secondes', value: timeLeft.secondes }
                            ].map((unit, i) => (
                                <div key={i}
                                    className="flex flex-col items-center justify-center bg-white border border-[#DC143C] rounded-xl w-16 h-20 shadow-[2px_2px_0px_#DC143C] transform hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group"
                                >
                                    {/* Texture Felt Background */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] pointer-events-none"></div>

                                    <span className="text-2xl font-black tabular-nums leading-none mb-1 bg-[url('/images/Texture_peuluche_rose.webp')] bg-cover bg-center bg-clip-text text-transparent drop-shadow-sm">
                                        {String(unit.value).padStart(2, '0')}
                                    </span>
                                    <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#DC143C] transition-colors z-10">
                                        {unit.label.substring(0, 3)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-500 leading-relaxed font-light text-base italic">
                            "Parce que parfois, un geste doux vaut mille discours."
                        </p>
                    </div>

                    {/* SECTION PRIX COMPACTE */}
                    <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-5xl font-bold text-[#DC143C]">24.90€</span>
                        <span className="text-2xl text-gray-300 line-through font-light">39.90€</span>
                    </div>

                    {/* BOUTON D'ACTION AJUSTÉ */}
                    <motion.button
                        whileHover={{ scale: 1.03, backgroundColor: "#FF1493" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                            addToCart({
                                id: 'pack-serenite',
                                name: 'Le Pack Sérénité',
                                price: 24.90,
                                quantity: 1,
                                image: "/images/hero-peluche.webp"
                            });
                        }}
                        className="w-full bg-gradient-to-r from-[#DC143C] to-[#FF1493] text-white py-4 rounded-full text-xl font-bold shadow-[0_15px_30px_rgba(220,20,60,0.25)] transition-all duration-300 mb-6"
                    >
                        Ajouter au panier
                    </motion.button>

                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                            Livraison prioritaire + Emballage offert
                        </span>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default PrixSection;
