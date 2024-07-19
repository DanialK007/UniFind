"use client";

import { UniversityIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Close the menu when the document is loaded
        setMenuOpen(false);
    }, []);

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-primary-foreground py-4 px-4 lg:px-6">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1 text-secondary" prefetch={false}>
                    <img src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-university-logo-png-png-image_6855396.png" alt="University Logo" className="w-10 h-10 rounded-[50px]" />
                    <span className="text-2xl font-bold">UniFind</span>
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                    <Link href="/" className="hover:text-secondary duration-300" prefetch={false}>
                        Home
                    </Link>
                    <Link href="/universities" className="hover:text-secondary duration-300" prefetch={false}>
                        Universities
                    </Link>
                    <Link href="/programs" className="hover:text-secondary duration-300" prefetch={false}>
                        Programs
                    </Link>
                    <Link href="/blogs" className="hover:text-secondary duration-300" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="/news" className="hover:text-secondary duration-300" prefetch={false}>
                        News
                    </Link>
                </nav>
                <Button className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:text-primary hover:bg-secondary-foreground duration-300">
                    Contact Us
                </Button>
                <Button onClick={toggleMenu} className="md:hidden rotate-90 text-xs px-3">
                    |||
                </Button>
            </div>
            <div className={classNames("md:hidden fixed z-40 top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-primary uppercase text-lg space-y-4 duration-300", menuOpen ? "translate-x-0" : "translate-x-full")}>
                <Link href="/" className="block hover:text-secondary duration-300" prefetch={false} onClick={toggleMenu}>
                    Home
                </Link>
                <Link href="/universities" className="block hover:text-secondary duration-300" prefetch={false} onClick={toggleMenu}>
                    Universities
                </Link>
                <Link href="/programs" className="block hover:text-secondary duration-300" prefetch={false} onClick={toggleMenu}>
                    Programs
                </Link>
                <Link href="/blogs" className="block hover:text-secondary duration-300" prefetch={false} onClick={toggleMenu}>
                    Blog
                </Link>
                <Link href="/news" className="block hover:text-secondary duration-300" prefetch={false} onClick={toggleMenu}>
                    News
                </Link>
                <Button className="w-fit bg-secondary text-secondary-foreground hover:text-primary hover:bg-secondary-foreground duration-300 mt-2">
                    Contact Us
                </Button>
                
                <div className='fixed bottom-20 left-0 w-full flex items-center justify-center'>
                    <Button onClick={toggleMenu} className="text-4xl font-normal rotate-45 w-12 h-12 rounded-[50px] bg-secondary/40 hover:bg-secondary/10 pt-[0.2rem]">+</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
