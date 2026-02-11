'use client';

import React from 'react';
import { MenuIcon, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function FloatingHeader() {
    const [open, setOpen] = React.useState(false);
    const { setIsOpen, cartCount } = useCart();

    const links = [
        {
            label: 'L\'Histoire',
            href: '#pourquoi',
        },
        {
            label: 'Le Cadeau',
            href: '#presentation',
        },
        {
            label: 'Témoignages',
            href: '#temoignages',
        },
    ];

    return (
        <header
            className={cn(
                'fixed top-5 left-0 right-0 z-50',
                'mx-auto w-full max-w-4xl rounded-2xl border-2 border-pink-100/50 shadow-xl',
                'bg-white/60 backdrop-blur-2xl',
                'transition-all duration-300 hover:shadow-2xl hover:border-pink-200/80',
            )}
        >
            <nav className="mx-auto flex items-center justify-between p-2">
                {/* Logo */}
                <div className="hover:bg-pink-50/50 flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 duration-200 transition-all hover:scale-105">
                    <div className="w-5 h-5 relative">
                        <Image src="/icons/Coeur ruban.webp" alt="Le Complice" width={20} height={20} className="object-contain" />
                    </div>
                    <p className="text-base font-bold italic" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.05em' }}>
                        Le Complice
                    </p>
                </div>

                {/* Navigation Desktop */}
                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                "text-gray-700 hover:text-[#DC143C]",
                                "hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50",
                                "hover:shadow-md hover:scale-105",
                                "relative overflow-hidden group"
                            )}
                            href={link.href}
                        >
                            {/* Underline effect */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#FF1493] transition-all duration-300 group-hover:w-full" />
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA + Mobile Menu */}
                <div className="flex items-center gap-2">
                    <a
                        href="#presentation"
                        className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-[#DC143C] bg-pink-50 rounded-full hover:bg-pink-100 transition-colors mr-2"
                    >
                        Découvrir
                    </a>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative p-2 rounded-full hover:bg-pink-50 hover:scale-125 transition-all duration-200 mr-1"
                    >
                        <Image src="/icons/pannier.png" alt="Panier" width={24} height={24} className="object-contain" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-[#DC143C] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button
                            variant="outline"
                            onClick={() => setOpen(!open)}
                            className="h-10 w-10 p-0 lg:hidden hover:bg-pink-50 hover:border-pink-200 transition-all duration-200"
                        >
                            <MenuIcon className="size-4" />
                        </Button>
                        <SheetContent
                            className="bg-white/95 backdrop-blur-2xl gap-0"
                            showClose={false}
                            side="left"
                        >
                            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                                {links.map((link) => (
                                    <a
                                        key={link.href}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start',
                                        })}
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            <SheetFooter>
                                <a
                                    href="#offre"
                                    className="flex items-center justify-center h-10 px-4 py-2 rounded-md bg-gradient-to-r from-[#DC143C] to-[#FF1493] text-white w-full text-sm font-medium hover:bg-pink-600 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Commander pour le 14
                                </a>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
