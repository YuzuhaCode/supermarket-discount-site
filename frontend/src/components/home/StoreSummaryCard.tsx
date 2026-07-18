type StoreColor = 'green' | 'blue' | 'orange'

type StoreSummaryCardProps = {
    name: string
    distance: string
    businessHours: string
    color: StoreColor
}

const colorClasses: Record<StoreColor, string> = {
    green: 'border-emerald-500 text-emerald-700',
    blue: 'border-blue-500 text-blue-700',
    orange: 'border-orange-400 text-orange-700',
}

export function StoreSummaryCard({
                                     name,
                                     distance,
                                     businessHours,
                                     color,
                                 }: StoreSummaryCardProps) {
    return (
        <article
            className={`rounded-xl border-2 bg-white p-3.5 ${colorClasses[color]}`}
        >
            <h3 className="text-base font-extrabold">{name}</h3>

            <div className="mt-1.5 space-y-0.5 text-sm font-medium text-slate-700">
                <p>{distance}</p>
                <p>{businessHours}</p>
            </div>
        </article>
    )
}