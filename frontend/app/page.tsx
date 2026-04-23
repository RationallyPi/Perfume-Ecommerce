import Image from "next/image";

import PerfumeCard from "@/components/perfumeCard";


export default async function Home() {
  const res = await fetch('http://127.0.0.1:8000/api/perfumes/getperfume/')
  const perfumes = await res.json()


  return (
    <div className="flex flex-row flex-wrap justify-content gap-4">
      {perfumes.map((perfume: any) => (
        <PerfumeCard key={perfume.id} {...perfume} />
      ))}
    </div>
  );
}
