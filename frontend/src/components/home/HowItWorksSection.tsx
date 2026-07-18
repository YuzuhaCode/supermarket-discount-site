import goToStoreImage from '../../assets/how-it-works/go-to-store.png'
import planComparisonImage from '../../assets/how-it-works/plan-comparison.png'
import productSearchImage from '../../assets/how-it-works/product-search.png'
import shoppingListImage from '../../assets/how-it-works/shopping-list.png'

import { HowItWorksCard } from './HowItWorksCard'

const steps = [
    {
        step: 1,
        title: '商品を検索する',
        imageSrc: productSearchImage,
        imageAlt: 'パソコンを使って商品を検索している様子',
    },
    {
        step: 2,
        title: 'リストに追加する',
        imageSrc: shoppingListImage,
        imageAlt: '商品を買い物リストに追加する様子',
    },
    {
        step: 3,
        title: 'プランを比較する',
        imageSrc: planComparisonImage,
        imageAlt: '複数の買い物プランを比較する様子',
    },
    {
        step: 4,
        title: '店舗に向かう',
        imageSrc: goToStoreImage,
        imageAlt: '買い物客が店舗へ向かう様子',
    },
]

export function HowItWorksSection() {
    return (
        <section className="border-t border-slate-100 bg-slate-50">
            <div className="mx-auto max-w-7xl px-8 py-16">
                <h2 className="text-2xl font-extrabold text-emerald-800">
                    使い方
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {steps.map((item) => (
                        <HowItWorksCard
                            key={item.step}
                            step={item.step}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            imageAlt={item.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}