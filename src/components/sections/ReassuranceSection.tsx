'use client';

import React from 'react';

export default function ReassuranceSection() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { l: "EXPÉDIÉ SOUS 48H", i: "/icons/Camion.webp" },
                    { l: "PAIEMENT SÉCURISÉ", i: "/icons/Cadenas.webp" },
                    { l: "SATISFAIT OU REMBOURSÉ", i: "/icons/coche.webp" },
                    { l: "PRÊT À OFFRIR", i: "/icons/Cadeau.webp" }
                ].map((r, i) => (
                    <div key={i} className="flex flex-col items-center group cursor-default">
                        <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <img src={r.i} alt={r.l} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#DC143C] transition-colors">{r.l}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
