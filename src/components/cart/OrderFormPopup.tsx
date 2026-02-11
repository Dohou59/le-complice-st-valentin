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

        await new Promise(resolve => setTimeout(resolve, 800));

        setIsSubmitting(false);
        setIsSuccess(true);

        setTimeout(() => {
            window.open(`https://wa.me/22990000000?text=${message}`, '_blank');
            clearCart();
            setIsSuccess(false);
            setFormData({ nom: '', prenom: '', telephone: '', ville: '', quartier: '', message: '' });
            onClose();
        }, 1500);
    };

    const inputBase = "w-full py-2.5 bg-white border-2 border-gray-200 rounded-xl text-sm text-[#3C3C3C] focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/10 transition-all placeholder:text-gray-400 font-medium";

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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg">

                            {/* Header */}
                            <div className="relative bg-gradient-to-r from-[#DC143C] to-[#FF1493] px-5 py-4 rounded-t-3xl flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Finaliser la commande
                                    </h3>
                                    <p className="text-white/80 text-xs mt-0.5">
                                        Total : <span className="text-white font-bold">{total.toLocaleString('fr-FR')} FCFA</span>
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-white" />
                                </button>
                            </div>

                            {/* Success State */}
                            {isSuccess ? (
                                <div className="p-10 text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <span className="text-3xl">✅</span>
                                    </motion.div>
                                    <h4 className="text-lg font-bold text-[#3C3C3C]">Commande envoyée !</h4>
                                    <p className="text-sm text-gray-400 mt-1">Redirection vers WhatsApp...</p>
                                </div>
                            ) : (
                                /* Form — compact layout */
                                <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">

                                    {/* Prénom & Nom */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#3C3C3C] block mb-1">
                                                Prénom <span className="text-[#DC143C]">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="prenom"
                                                    required
                                                    value={formData.prenom}
                                                    onChange={handleChange}
                                                    placeholder="Ex: Koffi"
                                                    className={`${inputBase} pl-9 pr-3`}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#3C3C3C] block mb-1">
                                                Nom <span className="text-[#DC143C]">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="nom"
                                                    required
                                                    value={formData.nom}
                                                    onChange={handleChange}
                                                    placeholder="Ex: Adébayor"
                                                    className={`${inputBase} pl-9 pr-3`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Téléphone */}
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#3C3C3C] block mb-1">
                                            Téléphone <span className="text-[#DC143C]">*</span>
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="telephone"
                                                required
                                                value={formData.telephone}
                                                onChange={handleChange}
                                                placeholder="+229 XX XX XX XX"
                                                className={`${inputBase} pl-9 pr-3`}
                                            />
                                        </div>
                                    </div>

                                    {/* Ville & Quartier */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#3C3C3C] block mb-1">
                                                Ville <span className="text-[#DC143C]">*</span>
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="ville"
                                                    required
                                                    value={formData.ville}
                                                    onChange={handleChange}
                                                    placeholder="Cotonou"
                                                    className={`${inputBase} pl-9 pr-3`}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#3C3C3C] block mb-1">
                                                Quartier <span className="text-[#DC143C]">*</span>
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="quartier"
                                                    required
                                                    value={formData.quartier}
                                                    onChange={handleChange}
                                                    placeholder="Akpakpa"
                                                    className={`${inputBase} pl-9 pr-3`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message optionnel */}
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#3C3C3C] block mb-1">
                                            Message <span className="text-gray-400 normal-case font-normal">(optionnel)</span>
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={1}
                                                placeholder="Ex : Livrer avant le 14 février"
                                                className={`${inputBase} pl-9 pr-3 resize-none`}
                                            />
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-full bg-gradient-to-r from-[#DC143C] to-[#FF1493] text-white py-3.5 rounded-2xl text-base font-bold shadow-[0_10px_30px_rgba(220,20,60,0.3)] hover:shadow-[0_15px_40px_rgba(220,20,60,0.4)] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Commander via WhatsApp
                                            </>
                                        )}
                                    </motion.button>

                                    <p className="text-center text-[10px] text-gray-400">
                                        🔒 Vos informations sont en sécurité
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
