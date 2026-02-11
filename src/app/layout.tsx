import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Complice | Quand les mots restent coincés",
  description: "La présence qui dit tout sans faire de bruit. Édition limitée Saint-Valentin.",
  /*  icons: {
      icon: '/favicon.png', // Next.js automatically uses favicon.png in app dir
    }, */
};

import { CartProvider } from "@/context/CartContext";
import { LazyCartDrawer } from "@/components/cart/LazyCartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-white text-gray-900`}
      >
        <CartProvider>
          {children}
          <LazyCartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
