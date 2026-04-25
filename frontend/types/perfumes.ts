export interface PerfumeImage {
    image: string;
    is_primary: boolean;
}

export interface Notes {
    top: string[];
    middle: string[];
    base: string[];
}

export interface Perfume {
    id?: number;
    name: string;
    brand: string;
    price: number;
    description: string;
    gender: string;
    images: PerfumeImage[];
    notes: Notes;
    family: string[];
    slug: string;
}