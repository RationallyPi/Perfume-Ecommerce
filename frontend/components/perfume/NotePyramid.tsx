import { Perfume } from '@/types/perfumes'

export default function NotePyramid({ perfume }: { perfume: Perfume }) {
  const noteCategories = [
    { label: 'Top Notes', notes: perfume.notes?.top ?? [] },
    { label: 'Middle Notes', notes: perfume.notes?.middle ?? [] },
    { label: 'Base Notes', notes: perfume.notes?.base ?? [] },
  ]

  return (
    <section className="mb-16 px-6">
      <h2 className="font-headline text-2xl text-primary mb-8 uppercase tracking-widest text-center">Note Pyramid</h2>

      <div className="grid grid-cols-3 gap-8 text-center">
        {noteCategories.map(({ label, notes }) => (
          <div key={label} className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">{label}</p>
            <div className="flex flex-wrap gap-2">
              {notes.map((note) => (
                <span
                  key={note}
                  className="px-4 bg-black py-2 border border-outline/20 text-[11px] uppercase tracking-widest text-primary font-medium text-white"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}