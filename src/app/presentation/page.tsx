'use client';

import React, { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Target,
    Palette,
    MousePointer2,
    MessageSquare,
    CheckCircle2,
    TrendingUp,
    Lightbulb,
    Heart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Slide = ({ children, title, active }: { children: React.ReactNode, title: string, active: boolean }) => (
    <div className={`w-full h-full flex flex-col p-8 md:p-12 transition-all duration-500 absolute top-0 left-0 ${active ? 'opacity-100 translate-x-0 pointer-events-auto z-10' : 'opacity-0 translate-x-20 pointer-events-none z-0'}`}>
        <div className="mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-slate-800 border-l-4 border-red-600 pl-6 uppercase tracking-widest">{title}</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
            {children}
        </div>
    </div>
);

const PresentationPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Introduction",
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="mb-8 p-4 bg-red-50 rounded-full">
                        <Heart className="w-16 h-16 text-red-600 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4">Le Complice</h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl italic">"Réinventer le cadeau de la Saint-Valentin par l'empathie et le design."</p>
                    <div className="mt-12 text-sm uppercase tracking-[0.3em] text-slate-400">Présentation Stratégique • Février 2026</div>
                </div>
            )
        },
        {
            title: "Le Challenge",
            content: (
                <div className="grid md:grid-cols-2 gap-12 h-full items-center">
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-red-600 mb-2 italic underline">Le Marché</h3>
                            <p className="text-slate-700">Un secteur saturé de clichés éphémères (fleurs, chocolats) où la différenciation est complexe.</p>
                        </div>
                        <div className="bg-red-600 p-8 rounded-2xl text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-2 uppercase italic">L'Objectif</h3>
                            <p className="opacity-90">Transformer une simple peluche en un "Ambassadeur de Tendresse" justifiant un positionnement premium.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-8 md:mt-0">
                        <h4 className="text-2xl font-serif mb-4">La Problématique :</h4>
                        <blockquote className="text-3xl font-light text-slate-600 leading-relaxed italic">
                            "Comment aider ceux qui aiment mais ne savent pas le dire ?"
                        </blockquote>
                    </div>
                </div>
            )
        },
        {
            title: "La Cible : La Team Timide",
            content: (
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Target className="text-red-600" />,
                            title: "Profil",
                            desc: "Hommes 20-35 ans, urbains, actifs."
                        },
                        {
                            icon: <MessageSquare className="text-red-600" />,
                            title: "Pain Point",
                            desc: "Anxiété de la performance romantique. Peur du kitsch ou du manque d'expression."
                        },
                        {
                            icon: <CheckCircle2 className="text-red-600" />,
                            title: "Attente",
                            desc: "Une solution clé en main, élégante et porteuse de sens."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white shadow-lg rounded-3xl border border-slate-50 flex flex-col items-center text-center">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="font-bold text-xl mb-3 uppercase tracking-tighter">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: "L'Angle Marketing",
            content: (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
                    <h3 className="text-3xl md:text-5xl font-serif italic text-slate-800">"Le Messager Silencieux"</h3>
                    <div className="w-24 h-1 bg-red-600"></div>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">
                        On ne vend pas un objet physique. On vend une <span className="font-bold text-red-600">Présence</span>.
                        Le produit devient un outil de communication qui comble les silences du quotidien.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
                        <div className="p-4 bg-slate-100 rounded-xl font-mono text-sm uppercase tracking-wider">Minimalisme Affectif</div>
                        <div className="p-4 bg-slate-100 rounded-xl font-mono text-sm uppercase tracking-wider">Zéro Pression</div>
                        <div className="p-4 bg-slate-100 rounded-xl font-mono text-sm uppercase tracking-wider">Valeur Émotionnelle</div>
                    </div>
                </div>
            )
        },
        {
            title: "Expérience Utilisateur (UX Flow)",
            content: (
                <div className="relative mt-10 h-full flex flex-col justify-center">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { step: "01", label: "Captation", detail: "Accroche sur le manque de mots (Hero)." },
                            { step: "02", label: "Empathie", detail: "Identification au problème (Pourquoi lui ?)." },
                            { step: "03", label: "Désir", detail: "Preuve de qualité et bénéfices projetés." },
                            { step: "04", label: "Action", detail: "Le Pack Sérénité (Conversion fluide)." }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{item.step}</div>
                                <h4 className="font-bold mb-2 uppercase text-sm tracking-widest">{item.label}</h4>
                                <p className="text-xs text-slate-500">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "Identité Visuelle (UI)",
            content: (
                <div className="grid md:grid-cols-2 gap-12 h-full items-center">
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4 italic font-bold">Palette Chromatique</h4>
                            <div className="flex space-x-4">
                                <div className="group relative">
                                    <div className="w-16 h-16 rounded-full bg-[#DC143C] shadow-lg"></div>
                                    <span className="text-[10px] absolute -bottom-6 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Passon (#DC143C)</span>
                                </div>
                                <div className="group relative">
                                    <div className="w-16 h-16 rounded-full bg-[#FF1493] shadow-lg"></div>
                                    <span className="text-[10px] absolute -bottom-6 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Douceur (#FF1493)</span>
                                </div>
                                <div className="group relative border border-slate-200 rounded-full">
                                    <div className="w-16 h-16 rounded-full bg-white"></div>
                                    <span className="text-[10px] absolute -bottom-6 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Pureté (#FFF)</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4 italic font-bold">Typographie</h4>
                            <div className="space-y-2">
                                <p className="text-3xl font-serif">Playfair Display (Serif)</p>
                                <p className="text-xl font-sans text-slate-500">Inter (Sans-Serif)</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full"></div>
                        <h4 className="text-xl font-serif mb-4 italic">Style Graphique : Glassmorphism</h4>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                            <p className="text-sm opacity-80 leading-relaxed">
                                Utilisation de transparences et de flous pour évoquer la modernité et la légèreté. Les formes organiques remplacent les angles droits pour amplifier la sensation de douceur tactile.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Décisions Design Clés",
            content: (
                <div className="space-y-6 h-full flex flex-col justify-center">
                    <div className="flex items-start space-x-6">
                        <div className="p-3 bg-red-50 rounded-lg text-red-600"><MousePointer2 /></div>
                        <div>
                            <h4 className="font-bold text-lg italic">Photos HQ vs Modèle 3D</h4>
                            <p className="text-slate-600 italic">"Priorité au réalisme tactile." Le grain du coton est plus vendeur que la perfection lisse de la 3D pour ce produit spécifique.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <div className="p-3 bg-red-50 rounded-lg text-red-600"><MessageSquare /></div>
                        <div>
                            <h4 className="font-bold text-lg italic">L'Effet "Chat Bubbles"</h4>
                            <p className="text-slate-600 italic">Narration visuelle instantanée. Expliquer le concept en 2 secondes via une interface familière (WhatsApp).</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <div className="p-3 bg-red-50 rounded-lg text-red-600"><TrendingUp /></div>
                        <div>
                            <h4 className="font-bold text-lg italic">Ancrage de Prix Strategique</h4>
                            <p className="text-slate-600 italic">Vendre l'émotion d'abord. On affiche le prix seulement après avoir créé la valeur perçue (bas de page).</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Impact & Résultats",
            content: (
                <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="text-5xl font-serif text-red-600 font-bold tracking-tighter italic">High</div>
                            <div className="text-sm uppercase tracking-widest font-bold">Conversion Rate</div>
                        </div>
                        <p className="text-slate-600 leading-relaxed italic border-l-2 border-red-200 pl-4">
                            L'alignement parfait entre le design (douceur) et le copywriting (complicité) réduit drastiquement la friction cognitive de l'acheteur.
                        </p>
                    </div>
                    <div className="bg-red-50 p-8 rounded-3xl space-y-4">
                        <h4 className="font-bold flex items-center gap-2 underline uppercase"><Lightbulb className="w-5 h-5" /> Roadmap Future</h4>
                        <ul className="space-y-3 text-sm text-slate-700 list-disc pl-4 italic">
                            <li>Module de personnalisation vocale via QR Code.</li>
                            <li>Intégration d'un flux Social Proof (UGC Instagram).</li>
                            <li>Pack "Premium" avec coffret luxe et carte manuscrite.</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col items-center justify-center p-4">
            {/* Return Home */}
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-red-600 transition-colors z-50">
                <ChevronLeft size={16} />
                <span className="text-sm uppercase tracking-widest">Retour au site</span>
            </Link>

            {/* Container Presentation */}
            <div className="w-full max-w-6xl aspect-[16/10] md:aspect-video bg-white shadow-2xl rounded-[2rem] overflow-hidden relative border border-slate-100 flex flex-col group">

                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 z-20">
                    <div
                        className="h-full bg-red-600 transition-all duration-500 ease-out"
                        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    ></div>
                </div>

                {/* Content */}
                <div className="flex-1 relative overflow-hidden">
                    {slides.map((slide, index) => (
                        <Slide key={index} title={slide.title} active={currentSlide === index}>
                            {slide.content}
                        </Slide>
                    ))}
                </div>

                {/* Controls */}
                <div className="p-4 md:p-8 border-t border-slate-50 flex items-center justify-between bg-white z-20">
                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                        <span className="text-slate-900 font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
                        <span>/</span>
                        <span>{String(slides.length).padStart(2, '0')}</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-red-600"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200 flex items-center space-x-2 group"
                        >
                            <span className="font-bold uppercase tracking-widest text-sm italic">Suivant</span>
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Shortcut hint */}
            <p className="mt-8 text-slate-400 text-xs italic tracking-widest font-mono">
                Étude de Cas • Le Complice • Design & Strategy Deck
            </p>
        </div>
    );
};

export default PresentationPage;
