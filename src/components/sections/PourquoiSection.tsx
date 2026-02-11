'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from '@/components/ui/WaveDivider';
import Image from 'next/image';

export default function PourquoiSection() {
    return (
        <section id="pourquoi" className="relative bg-[#F5F5F5] py-24 z-10">
            <WaveDivider color="#F5F5F5" className="absolute top-0 left-0 -translate-y-full" />
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="text-[#DC143C] font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                        POURQUOI LUI ?
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#3C3C3C] mb-8 leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Parce qu'on n'a pas tous <br />
                        <span className="text-[#DC143C] italic">une plume de poète.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light italic max-w-2xl mx-auto">
                        "La Saint-Valentin, ça met souvent la pression. On a peur de ne pas en faire assez, ou de mal le dire."
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        { t: "Zéro pression", d: "Finie l'angoisse du grand discours. La peluche s'occupe de porter toute votre tendresse sans que vous ayez à prononcer un mot.", i: "/icons/Ballon.webp" },
                        { t: "Un vrai souvenir", d: "Les fleurs, c'est joli mais ça fane. Ce Complice là, il restera dans sa chambre (et dans son cœur) très longtemps.", i: "/icons/Cadeau.webp" },
                        { t: "Le geste qui parle", d: "C'est la solution parfaite pour les timides qui préfèrent les attentions concrètes aux grandes déclamations.", i: "/icons/Etreinte.webp" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[40px] shadow-sm border border-pink-50 hover:shadow-xl hover:border-pink-200 transition-all duration-300"
                        >
                            <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center relative">
                                <Image
                                    src={item.i}
                                    alt={item.t}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-[#3C3C3C] mb-4 text-center">{item.t}</h3>
                            <p className="text-gray-500 leading-relaxed font-light text-center">{item.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
