import { MapPin } from 'lucide-react'
import { StoreSummaryCard } from './StoreSummaryCard'

const stores = [
    {
        name: 'スーパーA',
        distance: '徒歩5分',
        businessHours: '営業時間 9:00〜22:00',
        color: 'green' as const,
    },
    {
        name: 'スーパーB',
        distance: '徒歩8分',
        businessHours: '営業時間 10:00〜22:00',
        color: 'blue' as const,
    },
    {
        name: 'ドラッグC',
        distance: '徒歩12分',
        businessHours: '営業時間 9:00〜21:00',
        color: 'orange' as const,
    },
]

export function SupermarketMapPreview() {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-base font-bold text-slate-800">
                周辺スーパーマッププレビュー
            </h2>

            <div className="relative h-[280px] overflow-hidden rounded-2xl bg-slate-100">
                {/* 街区 */}
                <div className="absolute top-5 left-8 h-20 w-28 rotate-3 rounded-lg bg-emerald-100" />
                <div className="absolute right-10 bottom-7 h-24 w-36 -rotate-3 rounded-lg bg-lime-100" />
                <div className="absolute top-12 right-44 h-16 w-24 rounded-lg bg-yellow-50" />

                {/* 横方向の道路 */}
                <div className="absolute top-14 -left-10 h-5 w-[120%] rotate-6 bg-white shadow-sm" />
                <div className="absolute top-36 -left-10 h-6 w-[120%] -rotate-3 bg-white shadow-sm" />
                <div className="absolute bottom-12 -left-10 h-5 w-[120%] rotate-2 bg-white shadow-sm" />

                {/* 縦方向の道路 */}
                <div className="absolute -top-10 left-28 h-[140%] w-5 rotate-6 bg-white shadow-sm" />
                <div className="absolute -top-10 left-1/2 h-[140%] w-6 -rotate-6 bg-white shadow-sm" />
                <div className="absolute -top-10 right-28 h-[140%] w-5 rotate-3 bg-white shadow-sm" />

                {/* 細い道路 */}
                <div className="absolute top-0 left-56 h-full w-px bg-slate-300/70" />
                <div className="absolute top-24 left-0 h-px w-full bg-slate-300/70" />
                <div className="absolute top-52 left-0 h-px w-full bg-slate-300/70" />

                {/* 店舗マーカー */}
                <MapPin
                    className="absolute top-24 left-28 fill-red-500 text-red-500 drop-shadow-md"
                    size={48}
                    strokeWidth={2.5}
                    aria-label="スーパーA"
                />

                <MapPin
                    className="absolute top-8 left-[52%] fill-blue-500 text-blue-500 drop-shadow-md"
                    size={48}
                    strokeWidth={2.5}
                    aria-label="スーパーB"
                />

                <MapPin
                    className="absolute right-24 bottom-14 fill-orange-400 text-orange-400 drop-shadow-md"
                    size={48}
                    strokeWidth={2.5}
                    aria-label="ドラッグC"
                />
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
                {stores.map((store) => (
                    <StoreSummaryCard
                        key={store.name}
                        name={store.name}
                        distance={store.distance}
                        businessHours={store.businessHours}
                        color={store.color}
                    />
                ))}
            </div>
        </section>
    )
}