import { UniversityIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Header() {
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-secondary" prefetch={false}>
                    <UniversityIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">UniFind</span>
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