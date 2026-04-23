interface PerfumeCardProps {
    id: number;
    name: string;
    brand: string;
    price: string;
    images: { image: string; is_primary: boolean }[];
}

export default function PerfumeCard({ id, name, brand, price, images }: PerfumeCardProps) {
    const primaryImage = images.find(img => img.is_primary) || images[0];

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={`http://127.0.0.1:8000${primaryImage?.image}`} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700">{brand}</p>
                <p className="font-semibold">NPR {price}</p>
            </div>
        </div>
    );
}