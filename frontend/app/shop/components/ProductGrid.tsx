'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import PerfumeCard from '@/components/perfumeCard';

interface Perfume {
    id: number;
    name: string;
    brand: string;
    price: string;
    images: { image: string; is_primary: boolean }[];
}

export default function ProductGrid() {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();

    const fetchPerfumes = useCallback(async (currentPage: number, reset: boolean) => {
        setLoading(true);
        const params = new URLSearchParams({
            page: currentPage.toString(),
            limit: '12',
            ...Object.fromEntries(searchParams.entries())
        });

        const res = await fetch(`http://127.0.0.1:8000/api/perfumes/shop/?${params}`);
        const data = await res.json();

        setPerfumes(prev => reset ? data.perfumes : [...prev, ...data.perfumes]);
        setHasMore(data.has_more);
        setLoading(false);
    }, [searchParams]);

    // Reset when filters change
    useEffect(() => {
        setPage(1);
        fetchPerfumes(1, true);
    }, [searchParams]);

    // Load more when page changes
    useEffect(() => {
        if (page > 1) fetchPerfumes(page, false);
    }, [page]);

    // IntersectionObserver for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 0.1 }
        );
        if (observerRef.current) observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [hasMore, loading]);

    return (
        <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {perfumes.map((perfume) => (
                    <PerfumeCard key={perfume.id} {...perfume} />
                ))}
            </div>

            {/* Infinite scroll trigger */}
            <div ref={observerRef} className="h-12 flex items-center justify-center mt-8">
                {loading && <span className="text-sm text-secondary uppercase tracking-widest">Loading...</span>}
                {!hasMore && <span className="text-sm text-secondary uppercase tracking-widest">End of Collection</span>}
            </div>
        </div>
    );
}