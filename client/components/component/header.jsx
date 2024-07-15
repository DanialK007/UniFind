import { UniversityIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 text-primary-foreground py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1 text-secondary" prefetch={false}>
                    {/* <UniversityIcon className="h-6 w-6" /> */}
                    <img src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-university-logo-png-png-image_6855396.png" alt="" className='w-10 h-10'/>
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
            </div>
        </header>
    )
}

export default Header