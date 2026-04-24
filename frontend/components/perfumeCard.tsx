import image from "next/image";

interface PerfumeCardProps {
    id: number;
    name: string;
    brand: string;
    price: string;
    images: { image: string; is_primary: boolean }[];
}
export default function PerfumeCard({ id, name, brand, price, images }: PerfumeCardProps) {
    // Logic fix: Ensure we are accessing the array correctly
    const imageObj = images?.find(img => img.is_primary) || images?.[0];
    const imagePath = imageObj?.image || '';
    const BASE_URL = "http://127.0.0.1:8000";

    return (
        // Change this line:
        <div className="w-full group cursor-pointer">
            <div className="aspect-[3/4] bg-[#efeeea] mb-6 overflow-hidden relative">
                {imagePath ? (
                    <img
                        src={`${BASE_URL}${imagePath}`} // Ensure the URL is correct
                        alt={name}
                        className="w-full p-4 h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-surface-container flex items-center justify-center">
                        <span className="text-xs uppercase tracking-widest text-gray-400">No Image</span>
                    </div>
                )}
            </div>

            <div className="space-y-1">
                <h4 className="font-body text-xl tracking-tight text-[#1b1c1a]">
                    {name}
                </h4>
                <p className="font-body text-xs text-[#775a19] uppercase tracking-widest font-bold">
                    {brand}
                </p>
                <p className="font-body font-bold text-sm text-[#1b1c1a] pt-2">
                    NRS {price}
                </p>
            </div>
        </div>
    );
}

