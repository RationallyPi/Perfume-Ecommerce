const getLongevityLabel = (value: number) => {
    if (value <= 3) return { label: 'Poor', color: 'bg-error' }
    if (value <= 6) return { label: 'Moderate', color: 'bg-secondary' }
    if (value <= 10) return { label: 'Good', color: 'bg-secondary' }
    if (value <= 18) return { label: 'Excellent', color: 'bg-primary' }
    return { label: 'Beast Mode', color: 'bg-primary' }
}

const getSillageLabel = (value: number) => {
    if (value <= 3) return { label: 'Intimate', color: 'bg-error' }
    if (value <= 6) return { label: 'Moderate', color: 'bg-secondary' }
    if (value <= 8) return { label: 'Strong', color: 'bg-primary' }
    return { label: 'Room Filling', color: 'bg-primary' }
}

export default function Performance({ longevity, sillage }: { longevity: number; sillage: number }) {
    const longevityMeta = getLongevityLabel(longevity)
    const sillageMeta = getSillageLabel(sillage)

    const metrics = [
        {
            label: 'Longevity',
            value: longevity,
            max: 24,
            unit: 'hrs',
            meta: longevityMeta,
            description: 'How long the scent lasts on skin'
        },
        {
            label: 'Sillage',
            value: sillage,
            max: 10,
            unit: '/10',
            meta: sillageMeta,
            description: 'How far the scent projects from the wearer'
        }
    ]

    return (
        <section className="mb-16 px-3 lg:px-24">
            <h2 className="font-headline text-2xl text-primary mb-8 uppercase tracking-widest">Performance</h2>

            <div className="grid grid-cols-2 gap-4">
                {metrics.map(({ label, value, max, unit, meta, description }) => (
                    <div key={label} className="border border-outline/20 p-6 space-y-4">

                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">{label}</p>
                            <span className={`${meta.color} text-white text-[9px] uppercase tracking-widest px-2 py-1 font-bold`}>
                                {meta.label}
                            </span>
                        </div>

                        {/* Value */}
                        <p className="font-headline text-4xl text-primary">
                            {value}
                            <span className="text-sm text-outline ml-1">{unit}</span>
                        </p>

                        {/* Progress Bar */}
                        <div className="h-1 bg-outline/10 w-full">
                            <div
                                className={`h-full ${meta.color} transition-all duration-700`}
                                style={{ width: `${(value / max) * 100}%` }}
                            />
                        </div>

                        <p className="text-xs text-on-surface-variant">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}