import Hero from "@/components/Hero"
import HeroSection from "@/components/perfume/HeroSection"

export default async function PerfumePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const res = await fetch(`http://127.0.0.1:8000/api/perfume/${slug}/`)
    const perfume = await res.json()
    return (
        <main className="max-w-screen-2xl">
            <HeroSection perfume={perfume} />
        </main>
    )
}