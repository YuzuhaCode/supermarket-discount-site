import {Header} from '../components/layout/Header.tsx';

export function HomePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-50 px-6 py-10">
                <section className="mx-auto max-w-5xl">
                    <p className="mb-2 text-sm font-medium text-emerald-700">
                        スーパー値引き情報
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900">
                        お得な商品を、もっと簡単に。
                    </h1>

                    <p className="mt-4 text-slate-600">
                        スーパーの商品価格を比較し、買い物リストを作成できるサービスです。
                    </p>
                </section>
            </main>
        </>

    )
}