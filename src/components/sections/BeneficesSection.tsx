'use client';

import React from 'react';
import WaveDivider from '@/components/ui/WaveDivider';
import Image from 'next/image';

export default function BeneficesSection() {
    return (
        <section className="relative bg-[#DC143C] text-white py-24 z-10">
            <WaveDivider color="#DC143C" className="absolute top-0 left-0 -translate-y-full" />

            {/* Decorative background blur (Wrapped to prevent overflow issues outside section, but allow waves) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="text-white/80 font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                        L'EFFET PAPILLON
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Un petit bout de vous, <br />
                        <span className="italic text-pink-200">même à distance.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 text-left">
                    {[
                        { t: "Votre remplaçant", d: "Elle garde votre place sur son oreiller ou son bureau quand vous êtes occupé. Une présence rassurante, 24h/24.", i: "/icons/Maison.webp" },
                        { t: "Un repère visuel", d: "Chaque fois qu'elle la verra, elle pensera à vous. C'est mécanique, c'est magique. C'est aussi simple que ça.", i: "/icons/Yeux.webp" },
                        { t: "Le témoin", d: "Elle sera là pour décorer vos moments complices, vos soirées Netflix et vos fous rires sous la couette.", i: "/icons/Nuage.webp" }
                    ].map((b, i) => (
                        <div key={i} className="group bg-white/10 p-10 rounded-[40px] border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                            <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform relative">
                                <Image
                                    src={b.i}
                                    alt={b.t}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 text-center">{b.t}</h3>
                            <p className="opacity-80 font-light leading-relaxed text-center group-hover:opacity-100 transition-opacity">{b.d}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-20 text-center">
                    <p className="italic text-3xl font-serif text-white/90">
                        "Ce n'est pas un cadeau, c'est une présence."
                    </p>
                </div>
            </div>
            <WaveDivider color="#DC143C" flip={true} className="absolute bottom-0 left-0 translate-y-full" />
        </section>
    );
}
