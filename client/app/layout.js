"use client"
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        // RAF callback for Lenis
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Clean up Lenis on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
