'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* 
  STITCH EDITION 
  Theme: Blue / Tropical / Ohana
  Colors: 
    - Primary: #4e8cff (Stitch Blue)
    - Secondary: #1e40af (Deep Ocean)
    - Accent: #d946ef (Tropical Pink)
*/

export default function StitchPage() {
    return (
        <div className="min-h-screen bg-azure-50 overflow-x-hidden selection:bg-blue-100 selection:text-blue-600 font-sans">

            {/* HEADER FLOTTANT STITCH */}
            <header className="fixed top-5 left-0 right-0 z-50 mx-auto w-full max-w-4xl px-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-blue-100 shadow-xl p-2 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 px-3 py-2 hover:bg-blue-50 rounded-xl transition-colors">
                        <span className="text-2xl">👽</span>
                        <span className="font-bold text-blue-900 tracking-tight">Le Complice <span className="text-blue-500 italic">x Stitch</span></span>
                    </Link>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                        Adopter Stitch
                    </button>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">

                {/* Abstract Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                </div>

                <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                    {/* COPYWRITING */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 text-blue-700 rounded-full text-sm font-bold border border-blue-200"
                        >
                            <Star className="w-4 h-4 fill-blue-700" />
                            <span>Édition Limitée "Ohana"</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight"
                        >
                            Pas besoin de mots <br />
                            quand on a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">la famille.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 max-w-lg leading-relaxed"
                        >
                            "Ohana signifie famille. Famille signifie que personne n'est abandonné, ni oublié." <br />
                            <span className="italic text-blue-400">Pour la Saint-Valentin, offrez le plus fidèle des complices.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-blue-200/50 shadow-xl transition-all flex items-center justify-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                Commander Stitch
                            </button>
                            <button className="px-8 py-4 bg-white text-blue-900 border-2 border-blue-100 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all">
                                Voir la vidéo
                            </button>
                        </motion.div>

                        {/* TRUST BADGE */}
                        <div className="flex items-center gap-4 pt-4 opacity-80">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                ))}
                            </div>
                            <div className="text-sm font-medium text-slate-500">
                                <span className="font-bold text-slate-900">4.9/5</span> par la Team Disney
                            </div>
                        </div>
                    </div>

                    {/* VISUAL - HUE ROTATED PLUSH */}
                    <div className="order-1 lg:order-2 relative flex justify-center">
                        {/* Circle Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full scale-90 -z-10 animate-pulse"></div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[600px] aspect-square"
                        >
                            {/* 
                        TRICK: Hue-rotate the red plush to look blue (Stitch-like). 
                        Red is ~0deg (or 360). Blue is ~200-240deg.
                        A hue-rotate of 200deg should turn red to blue/cyan.
                     */}
                    {/* 
                       NOTE POUR L'UTILISATEUR :
                       L'API de génération d'image est temporairement indisponible (Erreur 503).
                       En attendant, j'ai utilisé une transformation CSS avancée sur la peluche originale 
                       pour simuler la couleur bleue de Stitch.
                       
                       Pour avoir le VRAI Stitch :
                       1. Trouvez une image PNG de Stitch sur Google.
                       2. Nommez-la "stitch.png".
                       3. Placez-la dans le dossier "public/images/".
                       4. Changez ici : src="/images/stitch.png" et retirez la classe "filter hue-rotate..."
                    */}
                    <div className="relative w-full h-full filter hue-rotate-[215deg] saturate-[1.2] brightness-105 drop-shadow-2xl">
                         <Image 
                            src="/images/hero-peluche.png"
                            alt="Stitch Plush (Simulation)"
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-500"
                            priority
                         />
                    </div>

                            {/* Chat Bubble Overlay (Not hue-rotated) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-10 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-blue-100 max-w-[200px]"
                            >
                                <p className="text-xs font-bold text-blue-500 uppercase mb-1">Stitch dit :</p>
                                <p className="text-sm text-slate-700 font-medium">"Moi aussi je veux des câlins !" 💙</p>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* FEATURES STRIPS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Ultra Doux", desc: "Un pelage extraterrestre soyeux", icon: "🌌" },
                        { title: "Indestructible", desc: "Résiste à toutes les bêtises", icon: "🛡️" },
                        { title: "100% Mignon", desc: "Niveau de menace : Zéro", icon: "😍" },
                    ].map((f, i) => (
                        <div key={i} className="p-8 bg-blue-50/50 rounded-3xl border border-blue-50 hover:bg-blue-100/50 transition-colors text-center">
                            <div className="text-4xl mb-4">{f.icon}</div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">{f.title}</h3>
                            <p className="text-blue-600/80">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
