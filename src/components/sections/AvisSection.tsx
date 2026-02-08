'use client';

import React from 'react';
import WaveDivider from '@/components/ui/WaveDivider';
import { Carousel, TestimonialCard, iTestimonial } from '@/components/ui/retro-testimonial';

type TestimonialDetails = {
    [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
    ids: [
        "avis-1",
        "avis-2",
        "avis-3",
    ],
    details: {
        "avis-1": {
            id: "avis-1",
            description: "Franchement, j'avais peur de mon cadeau. Mais quand elle l'a vu sur son lit avec mon petit mot, elle a eu les larmes aux yeux. Merci !",
            profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
            name: "Thomas",
            designation: "24 ans",
        },
        "avis-2": {
            id: "avis-2",
            description: "Elle est vraiment super douce. Mon chéri l'embarque même quand il part quelques jours en mission pour le travail.",
            profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
            name: "Léa",
            designation: "29 ans",
        },
        "avis-3": {
            id: "avis-3",
            description: "C'est exactement ce que je cherchais pour la Saint-Valentin. Un cadeau qui reste et qui parle pour moi. Elle l'adore !",
            profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            name: "Marc",
            designation: "31 ans",
        },
    },
};

const cards = testimonialData.ids.map((cardId: string, index: number) => {
    const details = testimonialData.details as TestimonialDetails;
    return (
        <TestimonialCard
            key={cardId}
            testimonial={details[cardId]}
            index={index}
            backgroundImage="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=3087&auto=format&fit=crop"
        />
    );
});

export default function AvisSection() {
    return (
        <section className="relative bg-[#F5F5F5]">
            <WaveDivider color="#F5F5F5" className="absolute top-0 left-0 -translate-y-full" />
            <div className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[#DC143C] font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                        ILS L'ONT ADOPTÉ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C3C3C] mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
                        La preuve par <span className="italic text-[#DC143C]">l'émotion</span>
                    </h2>
                    <Carousel items={cards} />
                </div>
            </div>

        </section>
    );
}
