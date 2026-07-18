type HowItWorksCardProps = {
    step: number
    title: string
    imageSrc: string
    imageAlt: string
}

export function HowItWorksCard({
                                   step,
                                   title,
                                   imageSrc,
                                   imageAlt,
                               }: HowItWorksCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
        <span className="text-4xl font-extrabold text-emerald-700">
          {step}
        </span>

                <h3 className="text-lg font-bold text-emerald-800">
                    {title}
                </h3>
            </div>

            <div className="mt-4 aspect-[4/3] overflow-hidden rounded-xl bg-[#f5f8f6]">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-contain object-center"
                />
            </div>
        </article>
    )
}