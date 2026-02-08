'use client';

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
    const { items, isOpen, setIsOpen, removeFromCart, total, addToCart } = useCart();

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="w-full sm:max-w-md flex flex-col bg-white/95 backdrop-blur-xl border-l border-pink-100">
                <SheetHeader className="border-b border-gray-100 pb-4">
                    <SheetTitle className="flex items-center gap-2 font-serif text-2xl text-[#3C3C3C]">
                        <ShoppingBag className="w-6 h-6 text-[#DC143C]" />
                        Mon Panier
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6">
                    <AnimatePresence mode='popLayout'>
                        {items.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center justify-center h-full text-center space-y-4 text-gray-400"
                            >
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                                    <ShoppingBag className="w-10 h-10 text-gray-300" />
                                </div>
                                <p className="text-lg font-medium">Votre panier est vide</p>
                                <Button
                                    onClick={() => setIsOpen(false)}
                                    className="border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600"
                                >
                                    Découvrir nos offres
                                </Button>
                            </motion.div>
                        ) : (
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex gap-4 p-4 bg-white rounded-2xl border border-pink-50 shadow-sm"
                                    >
                                        <div className="w-20 h-20 bg-pink-50 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-serif font-bold text-[#3C3C3C]">{item.name}</h4>
                                                <p className="text-[#DC143C] font-bold">{item.price.toFixed(2)}€</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                                    {/* Simplified quantity control (just display for now or basic remove) */}
                                                    <span className="text-xs font-medium px-2">Qté: {item.quantity}</span>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {items.length > 0 && (
                    <SheetFooter className="mt-auto border-t border-gray-100 pt-6">
                        <div className="w-full space-y-4">
                            <div className="flex items-center justify-between text-lg font-bold text-[#3C3C3C]">
                                <span>Total</span>
                                <span>{total.toFixed(2)}€</span>
                            </div>
                            <Button
                                className="w-full bg-gradient-to-r from-[#DC143C] to-[#FF1493] text-white py-6 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                            >
                                Commander Maintenant
                            </Button>
                            <p className="text-center text-xs text-gray-400">
                                Livraison gratuite & Paiement sécurisé
                            </p>
                        </div>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
}
