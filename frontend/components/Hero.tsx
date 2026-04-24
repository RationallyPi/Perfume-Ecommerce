export default function Hero() {
    return (
        /* The height is calculated to be the full screen minus your navbar (approx 88px) */
        <section className="relative h-[calc(100vh-88px)] w-full bg-[#faf9f5] overflow-hidden flex items-center">
            <div className="container mx-auto px-6 lg:px-24 h-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* 1. Left Content Section (5 Columns) */}
                <div className="lg:col-span-5 z-10 flex flex-col justify-center order-2 lg:order-1 relative pb-12 lg:pb-0">

                    <h1 className="font-headline text-6xl lg:text-8xl leading-[0.85] font-bold tracking-tighter mb-8 text-[#1b1c1a]">
                        Vernal <br />
                        <span className="italic font-normal">Awakening</span>
                    </h1>

                    <p className="font-body text-base lg:text-lg text-[#444748] max-w-sm mb-12 leading-relaxed">
                        A sensory rebirth. Discover a curation of olfactory narratives inspired by the precise moment a winter bud unfurls into the morning light.
                    </p>

                    <div className="flex">
                        <button className="bg-[#1b1c1a] text-white px-12 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#775a19] transition-all duration-500 active:scale-95">
                            Explore the Collection
                        </button>
                    </div>

                    {/* Decorative Background Element (Textured Box behind text) */}
                    <div className="absolute top-0 -left-12 w-40 h-40 border-l border-t border-[#775a19]/10 -z-10" />
                </div>

                {/* 2. Right Image Composition (7 Columns) - Centered Container */}
                <div className="lg:col-span-7 h-full relative flex items-center justify-center order-1 lg:order-2 py-12">

                    {/* Primary Large Image (Centered in this 7-column grid) */}
                    <div className="relative w-[85%] h-[80%] bg-[#efeeea] shadow-2xl overflow-hidden self-center group">
                        <img
                            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                            src="https://i.pinimg.com/736x/c8/bc/6b/c8bc6bbf0bdedae0fa2623ee0c6fa749.jpg"
                            alt="Vernal Awakening Campaign"
                        />
                        {/* Soft overlay to give it that "Morning Light" feel */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#faf9f5]/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Secondary Overlapping Image (Far Right, bottom corner of main image) */}
                    <div className="absolute -bottom-5 -right-12 xl:-right-16 rounded-[30px] w-[40%] aspect-3/4 bg-surface shadow-[20px_20px_50px_rgba(0,0,0,0.08)] border-[#faf9f5] overflow-hidden ">
                        <img
                            className="w-full h-full object-cover rounded-[30px] p-2"
                            src="https://i.pinimg.com/736x/8d/a0/d4/8da0d4e16fad5aeeb90e4d1fec9a6cfe.jpg"
                            alt="Botanical Detail"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}