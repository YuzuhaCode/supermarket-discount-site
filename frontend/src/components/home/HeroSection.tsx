import { ChevronRight, Search } from 'lucide-react'

export function HeroSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-8 py-20">
                <div className="max-w-xl">
                    <h1 className="text-5xl leading-tight font-extrabold text-emerald-800">
                        近所スーパー
                        <br />
                        買い物支援サービス
                    </h1>

                    <p className="mt-6 text-lg leading-8 font-medium text-slate-700">
                        買いたいものを入力するだけで、
                        <br />
                        どこで買えば安くて便利かを提案します。
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="inline-flex h-14 items-center gap-2 rounded-lg bg-emerald-700 px-7 text-base font-bold text-white shadow-sm transition-colors hover:bg-emerald-800"
                        >
                            買い物リストを作成する
                            <ChevronRight size={20} strokeWidth={2.8} aria-hidden="true" />
                        </a>

                        <a
                            href="#"
                            className="inline-flex h-14 items-center gap-2 rounded-lg border-2 border-emerald-700 bg-white px-7 text-base font-bold text-emerald-700 transition-colors hover:bg-emerald-50"
                        >
                            <Search size={19} strokeWidth={2.5} aria-hidden="true" />
                            商品を検索する
                            <ChevronRight size={20} strokeWidth={2.8} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}