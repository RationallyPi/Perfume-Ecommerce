'use client';
import { useState, useEffect } from 'react';
import Link
    from 'next/link';
const navLinks = [
    { label: 'Home', href: '/', active: true },
    { label: 'Shop', href: '/shop', active: false },
    { label: 'Decants', href: '/decants', active: false },
    { label: 'About Us', href: '/about', active: false },
];

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Show navbar if scrolling up or at the very top
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            }
            // Hide navbar if scrolling down and passed the threshold
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <header
            className={`sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10 transition-transform duration-500 ease-in-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">

                {/* Logo */}
                <div className="text-2xl font-headline tracking-widest uppercase text-primary">
                    Redolence Nepal
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10 font-headline text-lg tracking-tight">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`transition-all duration-300 ease-out border-b-2 pb-1
                                ${link.active
                                    ? 'text-secondary border-secondary'
                                    : 'text-primary/70 border-transparent hover:text-primary'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-2 md:gap-6">
                    <button className="p-2 transition-all duration-300 ease-out hover:opacity-80 group">
                        <span className="material-symbols-outlined text-primary group-hover:text-secondary">
                            favorite
                        </span>
                    </button>
                    <button className="p-2 transition-all duration-300 ease-out hover:opacity-80 group">
                        <span className="material-symbols-outlined text-primary group-hover:text-secondary">
                            person
                        </span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-primary">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

            </nav>
        </header>
    );
}