const navLinks = [
    { label: 'Home', href: '#', active: true }, // Changed to true to match your example
    { label: 'Shop', href: '#', active: false },
    { label: 'Attars', href: '#', active: false },
    { label: 'Decants', href: '#', active: false },
    { label: 'About Us', href: '#', active: false },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 bg-background backdrop-blur-xl transition-all duration-300 ease-out border-b border-outline-variant/10">
            <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">

                {/* Logo */}
                <div className="text-2xl font-headline tracking-widest uppercase text-primary">
                    Redolence Nepal
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10 font-headline text-lg tracking-tight">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`transition-all duration-300 ease-out border-b-2 pb-1
                                ${link.active
                                    ? 'text-secondary border-secondary'
                                    : 'text-primary/70 border-transparent hover:text-primary'
                                }`}
                        >
                            {link.label}
                        </a>
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

                    {/* Mobile Menu Toggle (Visible only on small screens) */}
                    <button className="md:hidden p-2 text-primary">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

            </nav>
        </header>
    );
}