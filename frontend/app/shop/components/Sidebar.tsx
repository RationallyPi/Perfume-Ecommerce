'use client';
import { useState } from 'react';

interface ShopSidebarProps {
    brands: string[];
    notes: string[];
    families: string[];
}

const GENDER_OPTIONS = ['Male', 'Female', 'Unisex'];

export default function ShopSidebar({ brands, notes, families }: ShopSidebarProps) {
    const [activeType, setActiveType] = useState('Perfume');
    const [activeFamily, setActiveFamily] = useState<string[]>([]);
    const [activeGender, setActiveGender] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState(50000);

    const toggleFilter = (item: string, list: string[], setList: (l: string[]) => void) => {
        setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
    };

    return (
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-12 pr-8 border-r border-outline-variant/10">

            {/* Category */}
            <section>
                <h3 className="font-headline text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-6">Category</h3>
                <div className="flex flex-col gap-2">
                    {['Perfume', 'Attars'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`flex items-center justify-between px-4 py-3 transition-all duration-300 border ${activeType === type
                                ? 'bg-black text-white border-black'
                                : 'bg-transparent text-primary border-outline-variant/30 hover:border-black'
                                }`}
                        >
                            <span className="text-xs uppercase tracking-widest font-bold">{type}</span>
                            {activeType === type && <span className="material-symbols-outlined text-sm">check</span>}
                        </button>
                    ))}
                </div>
            </section>

            {/* Brand & Notes Search */}
            <section className="space-y-6">
                {[
                    { label: 'Search Brand', id: 'brand-list', data: brands, placeholder: 'Type to search...' },
                    { label: 'Search Notes', id: 'notes-list', data: notes, placeholder: 'e.g. Vanilla, Oud...' },
                ].map(({ label, id, data, placeholder }) => (
                    <div key={id}>
                        <h3 className="font-headline text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-4">{label}</h3>
                        <input
                            type="text"
                            list={id}
                            placeholder={placeholder}
                            className="w-full bg-transparent border-b border-outline-variant py-2 px-1 text-sm focus:outline-none focus:border-black transition-colors"
                        />
                        <datalist id={id}>
                            {data.map((item) => <option key={item} value={item} />)}
                        </datalist>
                    </div>
                ))}
            </section>

            {/* Scent Family */}
            <section>
                <h3 className="font-headline text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-6">Scent Family</h3>
                <div className="flex flex-wrap gap-2">
                    {families.map((f) => (
                        <button
                            key={f}
                            onClick={() => toggleFilter(f, activeFamily, setActiveFamily)}
                            className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full border ${activeFamily.includes(f)
                                ? 'bg-black text-white border-black'
                                : 'bg-surface-container-high border-transparent hover:border-outline-variant'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gender */}
            <section>
                <h3 className="font-headline text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-6">Gender</h3>
                <div className="flex flex-wrap gap-2">
                    {GENDER_OPTIONS.map((g) => (
                        <button
                            key={g}
                            onClick={() => toggleFilter(g, activeGender, setActiveGender)}
                            className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full border ${activeGender.includes(g)
                                ? 'bg-black text-white border-black'
                                : 'bg-surface-container-high border-transparent hover:border-outline-variant'
                                }`}
                        >
                            {g}
                        </button>
                    ))}
                </div>
            </section>

            {/* Price Range */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-headline text-xs uppercase tracking-[0.3em] text-secondary font-bold">Price Range</h3>
                    <span className="text-xs font-bold">Rs. {priceRange.toLocaleString()}</span>
                </div>
                <input
                    type="range"
                    min="1000"
                    max="100000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full accent-black h-1 appearance-none cursor-pointer"
                />
            </section>

        </aside>
    );
}