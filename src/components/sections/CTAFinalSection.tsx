'use client';

import React from 'react';
import WaveDivider from '@/components/ui/WaveDivider';

export default function CTAFinalSection() {
    return (
        <section className="relative bg-[#FF1493] text-white text-center z-10">
            <WaveDivider color="#FF1493" className="absolute top-0 left-0 -translate-y-full" />
            <div className="py-24 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cuplic.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Ne laissez pas <br />
                        <span className="italic opacity-90">le silence gagner.</span>
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                        Anticiper, c'est s'offrir le luxe d'être tranquille le 14 février.
                    </p>
                    <a href="#offre" className="bg-white text-[#DC143C] px-12 py-6 rounded-full text-xl md:text-2xl font-bold shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-white/20 transition-all inline-block active:scale-95">
                        Réserver mon Complice
                    </a>
                    <div className="mt-10 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest opacity-80">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        Stock limité pour la Saint-Valentin
                    </div>
                </div>
            </div>

        </section >
    );
}
