

interface Perfume {
    id: number;
    name: string;
    brand: string;
    price: string;
    images: { image: string; is_primary: boolean }[];
}

export default function BestSellers({ perfumes }: { perfumes: Perfume[] }) {
    const BASE_URL = 'http://127.0.0.1:8000';

    const getImg = (perfume: Perfume) => {
        const path = perfume.images?.find(img => img.is_primary)?.image || perfume.images?.[0]?.image;
        return path ? `${BASE_URL}${path}` : '';
    };

    const mainFeature = perfumes[0];
    const sideTop = perfumes[1];
    const sideMiddle = perfumes[2];
    const bottomWide = perfumes[3];

    return (
        <section className="py-24 bg-surface"> {/* Reduced section padding from 24 to 20 */}
            <div className="max-w-screen-2xl px-6 lg:px-24">

                <div className="mb-12"> {/* Reduced margin from 16 to 12 */}
                    <h2 className="font-headline text-4xl text-[#271310] mb-3">The Hall of Fame</h2>
                    <p className="text-[#504442] tracking-[0.3em] uppercase text-[10px] font-bold">
                        Most desired fragrances this month
                    </p>
                </div>

                {/* Height reduced from 800px to 600px */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px] lg:max-h-[75vh]">

                    {/* Main Large Feature */}
                    {mainFeature && (
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm bg-[#e4e2de]">
                            <img
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                src={getImg(mainFeature)}
                                alt={mainFeature.name}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                            <div className="absolute bottom-8 left-8">
                                <div className="bg-[#775a19] px-3 py-1 text-white text-[9px] uppercase tracking-[0.3em] font-bold mb-3 inline-block">
                                    Seasonal Pick #1
                                </div>
                                <h3 className="font-headline text-3xl text-white mb-1">{mainFeature.name}</h3>
                                <p className="text-white/80 mb-4 italic font-headline text-sm">{mainFeature.brand}</p>
                                <button className="text-white border-b border-white/40 pb-1 text-[10px] tracking-widest uppercase hover:border-white transition-colors">Details</button>
                            </div>
                        </div>
                    )}

                    {/* Side Item 1 */}
                    {sideTop && (
                        <div className="relative group overflow-hidden rounded-sm bg-[#e4e2de]">
                            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={getImg(sideTop)} alt={sideTop.name} />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                            <div className="absolute bottom-4 left-5">
                                <h4 className="font-headline text-lg text-white">{sideTop.name}</h4>
                            </div>
                        </div>
                    )}

                    {/* Side Item 2 */}
                    {sideMiddle && (
                        <div className="relative group overflow-hidden rounded-sm bg-[#e4e2de]">
                            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={getImg(sideMiddle)} alt={sideMiddle.name} />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                            <div className="absolute bottom-4 left-5">
                                <h4 className="font-headline text-lg text-white">{sideMiddle.name}</h4>
                            </div>
                        </div>
                    )}

                    {/* Bottom Wide Item */}
                    {bottomWide && (
                        <div className="md:col-span-2 relative group overflow-hidden rounded-sm bg-[#e4e2de]">
                            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={getImg(bottomWide)} alt={bottomWide.name} />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                            <div className="absolute bottom-4 left-5">
                                <h4 className="font-headline text-lg text-white uppercase tracking-widest">{bottomWide.name}</h4>
                                <p className="text-white/80 text-[10px] italic">{bottomWide.brand}</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}