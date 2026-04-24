import ProductGrid from "./components/ProductGrid";
import ShopSidebar from "./components/Sidebar";
export default async function Shop() {
    const res = await fetch('http://127.0.0.1:8000/api/perfumes/filter/');
    const filters = await res.json();

    return ( // <--- Add this return statement
        <main className="min-h-screen pt-32 px-12 bg-background">
            <div className="flex flex-col lg:flex-row gap-16 max-w-[1920px] mx-auto">
                <ShopSidebar brands={filters.brands} notes={filters.notes} families={filters.families} />

                {/* This is where your products will go */}
                <div className="flex-1">
                    <h1 className="font-notoSerif text-4xl mb-8">The Collection</h1>
                    <div className="flex flex-wrap items-center gap-4 mb-12 py-4 border-b border-outline-variant/10">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">Active Selection</span>

                        <div className="flex flex-wrap gap-2">
                            {/* These tags appear when sidebar items are clicked */}
                            {['Woody', 'Maison Francis', 'Male'].map((tag) => (
                                <button
                                    key={tag}
                                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-sm transition-all"
                                >
                                    <span className="font-manrope text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                                    <span className="material-symbols-outlined text-xs">close</span>
                                </button>
                            ))}

                            <button className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-primary hover:bg-surface-container-highest transition-all">
                                Clear All
                            </button>
                        </div>
                    </div>
                    {/* Your product grid will sit here */}
                    <ProductGrid />
                </div>
            </div>
        </main>
    ); // <--- Close the return
}