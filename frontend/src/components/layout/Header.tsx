import { ChevronRight, ShoppingCart } from 'lucide-react'

const navigationItems = [
    'トップ',
    '商品検索',
    '買い物リスト',
    'プラン比較',
    '店舗詳細',
]

export function Header() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center px-8">
                <a
                    href="/"
                    className="flex shrink-0 items-center gap-3 text-emerald-700"
                >
                    <ShoppingCart size={34} strokeWidth={2.8} aria-hidden="true" />

                    <span className="text-xl font-extrabold">
            近所スーパー買い物支援サービス
          </span>
                </a>

                <nav
                    className="ml-auto hidden items-center gap-10 lg:flex xl:gap-12"
                    aria-label="メインナビゲーション"
                >
                    {navigationItems.map((item, index) => (
                        <a
                            key={item}
                            href="#"
                            className={
                                index === 0
                                    ? 'relative py-7 text-base font-bold text-emerald-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-emerald-600'
                                    : 'py-7 text-base font-bold text-slate-700 transition-colors hover:text-emerald-700'
                            }
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <a
                    href="#"
                    className="ml-10 hidden h-12 shrink-0 items-center gap-2 rounded-lg bg-emerald-700 px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-emerald-800 lg:inline-flex"
                >
                    リストを作成する
                    <ChevronRight size={19} strokeWidth={2.8} aria-hidden="true" />
                </a>
            </div>
        </header>
    )
}