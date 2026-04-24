export default function DecantsHighlight() {
    return (
        <section className="bg-surface overflow-hidden mb-20 py-10">
            {/* Increased max-width to 2xl to allow cards to spread out */}
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-24">

                {/* Section Header */}
                <div className="mb-16 lg:text-left">
                    <h2 className="font-headline text-5xl text-primary mb-3 italic">The Decant Edit</h2>
                    <p className="font-body text-[#775a19] tracking-[0.4em] uppercase text-[11px] font-bold">
                        Travel Size for your needs
                    </p>
                </div>

                <div className="flex flex-col space-y-16 md:space-y-0 md:flex-row md:items-start justify-between gap-12">

                    {/* Card 1: Made wider (55%) and longer (aspect-3/4) */}
                    <div className="w-full md:w-[55%] group">
                        <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl bg-surface-container-highest relative">
                            <img
                                src="https://i.pinimg.com/1200x/44/83/cd/4483cd7f51155cab403beb9241c525ed.jpg"
                                alt="Luxury Atomizers"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 shadow-lg">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">Refillable Glass</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="font-headline text-2xl text-primary">The Essential Atomizer</h3>
                            <p className="text-base text-on-surface-variant mt-3 max-w-md">Precision engineered for the perfect mist, wherever your journey takes you.</p>
                        </div>
                    </div>

                    {/* Card 2: Made wider (40%) and offset. Removed mx-48 to stop the empty right-side space */}
                    <div className="w-full md:w-[40%] md:mt-32 group">
                        <div className="aspect-[2/3] overflow-hidden rounded-sm shadow-2xl bg-surface-container-highest relative">
                            <img
                                src="https://i.pinimg.com/1200x/bb/3e/b4/bb3eb42021ab810584abbb7d95e83a49.jpg"
                                alt="Travel Decants"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="mt-8">
                            <h3 className="font-headline text-2xl text-primary">Discovery Vials</h3>
                            <p className="text-base text-on-surface-variant mt-3 italic">Sample our collection before committing to a full flacon.</p>
                            <button className="mt-8 text-[11px] uppercase tracking-[0.3em] font-bold text-[#775a19] border-b-2 border-[#775a19]/20 pb-2 hover:border-[#775a19] transition-all">
                                Explore Decants
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}