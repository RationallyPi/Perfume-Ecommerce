import { Perfume } from '@/types/perfumes'
import NotePyramid from './NotePyramid'

interface HeroProps {
    perfume: Perfume
}

const BASE_URL = 'http://127.0.0.1:8000'

const DECANTS = [
    { size: '3ml', multiplier: 0.06 },
    { size: '5ml', multiplier: 0.09 },
    { size: '10ml', multiplier: 0.16 },
    { size: '20ml', multiplier: 0.28 },
    { size: '100ml', multiplier: 1 },
]

export default function HeroSection({ perfume }: HeroProps) {
    const primaryImage = perfume.images.find(img => img.is_primary) || perfume.images[0]
    const fullPrice = perfume.price

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
            {/* Left - Image */}
            <div className="w-full aspect-square overflow-hidden bg-surface-container-high">
                <img src={`${BASE_URL}${primaryImage.image}`} alt={perfume.name} className="w-full h-full object-contain" />
            </div>

            {/* Right - Details */}
            <div className="flex flex-col justify-start space-y-8 py-4 px-6 h-fit">
                <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-secondary font-bold">{perfume.brand}</p>
                    <h1 className="font-headline text-4xl text-primary">{perfume.name}</h1>
                    <p className="text-xs uppercase tracking-widest text-outline">{perfume.gender} · {perfume.family?.join(', ')}</p>
                </div>

                <p className="text-sm text-on-surface-variant leading-relaxed">{perfume.description}</p>

                {/* Decant Boxes */}
                <div className="grid grid-cols-3 grid-rows-2 gap-2">
                    {DECANTS.map(({ size, multiplier }) => (
                        <div key={size} className="border border-outline/20 p-3 text-center cursor-pointer hover:border-secondary transition-all">
                            <p className="text-[13px] uppercase tracking-widest text-outline mb-1">{size}</p>
                            <p className="font-headline text-xs font-bold text-primary">
                                NRS {Math.round(fullPrice * multiplier).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button className="bg-primary text-white py-3 text-xs uppercase tracking-widest hover:opacity-90 transition-all w-1/3">
                        Add to Cart
                    </button>
                    <button className="material-symbols-outlined border border-outline/30 p-3 text-primary hover:bg-surface-container-high transition-colors">
                        share
                    </button>
                </div>
                <div className="border-t border-outline/10 pt-4">
                    <NotePyramid perfume={perfume} />
                </div>
            </div>
        </section>
    )
}