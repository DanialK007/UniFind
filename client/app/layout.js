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
      <head>
        <title>UniFind - Your Comprehensive University Guide</title>
        <link rel="icon" href="https://png.pngtree.com/png-clipart/20211017/original/pngtree-university-logo-png-png-image_6855396.png" />
        <meta name="description" content="Explore universities worldwide with detailed profiles, programs, and admissions information on UniFind." />
        <meta name="keywords" content="universities, university guide, university dictionary, university search, university details, higher education, college information" />
        <meta property="og:title" content="UniFind - Your Comprehensive University Guide" />
        <meta property="og:description" content="Find any university and their details with UniFind, your go-to resource for higher education information." />
        <meta property="og:image" content="/images/UniFind-og-image.jpg" />
        <meta property="og:url" content="https://unifind.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UniFind - Your Comprehensive University Guide" />
        <meta name="twitter:description" content="Discover universities around the globe and get all the details you need to make informed decisions about your education." />
        <meta name="twitter:image" content="/images/UniFind-twitter-image.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
