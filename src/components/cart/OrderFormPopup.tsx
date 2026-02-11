'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface OrderFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
    total: number;
}

export function OrderFormPopup({ isOpen, onClose, total }: OrderFormPopupProps) {
    const { items, clearCart } = useCart();
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        telephone: '',
        ville: '',
        quartier: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Build WhatsApp message with order details
        const orderItems = items.map(item =>
            `• ${item.name} x${item.quantity} — ${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA`
        ).join('\n');

        const message = encodeURIComponent(
            `🧸 *Nouvelle Commande — Le Complice*\n\n` +
            `👤 *Client :* ${formData.prenom} ${formData.nom}\n` +
            `📞 *Tél :* ${formData.telephone}\n` +
            `📍 *Ville :* ${formData.ville}\n` +
            `📍 *Quartier :* ${formData.quartier}\n` +
            `${formData.message ? `💬 *Message :* ${formData.message}\n` : ''}` +
            `\n📦 *Articles :*\n${orderItems}\n\n` +
            `💰 *Total : ${total.toLocaleString('fr-FR')} FCFA*`
        );

        // Simulate brief processing
        await new Promise(resolve => setTimeout(resolve, 800));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Open WhatsApp after brief success display
        setTimeout(() => {
            window.open(`https://wa.me/22990000000?text=${message}`, '_blank');
            clearCart();
            setIsSuccess(false);
            setFormData({ nom: '', prenom: '', telephone: '', ville: '', quartier: '', message: '' });
            onClose();
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-pink-100">

                            {/* Header */}
                            <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-pink-50 p-6 pb-4 rounded-t-3xl flex items-center justify-between z-10">
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-[#3C3C3C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Finaliser la commande
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Total : <span className="text-[#DC143C] font-bold">{total.toLocaleString('fr-FR')} FCFA</span>
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-pink-50 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>

                            {/* Success State */}
                            {isSuccess ? (
                                <div className="p-12 text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <span className="text-4xl">✅</span>
                                    </motion.div>
                                    <h4 className="text-lg font-bold text-[#3C3C3C]">Commande envoyée !</h4>
                                    <p className="text-sm text-gray-400 mt-2">Redirection vers WhatsApp...</p>
                                </div>
                            ) : (
                                /* Form */
                                <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-4">
                                    {/* Nom & Prénom */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                                                Prénom *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                                <input
                                                    type="text"
                                                    name="prenom"
                                                    required
                                                    value={formData.prenom}
                                                    onChange={handleChange}
                                                    placeholder="Votre prénom"
                                                    className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 transition-all placeholder:text-gray-300"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                                                Nom *
                                            </label>
                                            <input
                                                type="text"
                                                name="nom"
                                                required
                                                value={formData.nom}
                                                onChange={handleChange}
                                                placeholder="Votre nom"
                                                className="w-full px-3 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Téléphone */}
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                                            Téléphone *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                            <input
                                                type="tel"
                                                name="telephone"
                                                required
                                                value={formData.telephone}
                                                onChange={handleChange}
                                                placeholder="+229 XX XX XX XX"
                                                className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Ville & Quartier */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                                                Ville *
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                                <input
                                                    type="text"
                                                    name="ville"
                                                    required
                                                    value={formData.ville}
                                                    onChange={handleChange}
                                                    placeholder="Cotonou"
                                                    className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 transition-all placeholder:text-gray-300"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                                                Quartier *
                                            </label>
                                            <input
                                                type="text"
                                                name="quartier"
                                                required
                                                value={formData.quartier}
                                                onChange={handleChange}
                                                placeholder="Votre quartier"
                                                className="w-full px-3 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Message optionnel */}
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                                            Message personnalisé <span className="text-gray-300">(optionnel)</span>
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-300" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={2}
                                                placeholder="Ex : Livrer avant le 14 février s'il vous plaît"
                                                className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#DC143C] focus:ring-1 focus:ring-[#DC143C]/20 transition-all placeholder:text-gray-300 resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-full bg-gradient-to-r from-[#DC143C] to-[#FF1493] text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Commander via WhatsApp
                                            </>
                                        )}
                                    </motion.button>

                                    <p className="text-center text-[10px] text-gray-300 mt-2">
                                        Vous serez redirigé vers WhatsApp pour confirmer votre commande
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
