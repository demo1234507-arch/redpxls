export default function PricingTiers() {
    const plans = [
        {
            name: "Mini",
            price: "$299 / video",
            description: "Clean, no-frills video that gets your message across — fast.",
            delivery: "Delivery in ~5 business days",
            features: [
                "Up to 60 sec video",
                "Simple cuts & transitions",
                "Minimal motion graphics",
                "Stock music",
                "1 round of revisions",
                "1080p delivery",
            ],
        },
        {
            name: "Plus",
            price: "$699 / video",
            description: "Motion, sound & story — the full package most SaaS teams need.",
            delivery: "Delivery in ~8 business days",
            features: [
                "Up to 90 sec video",
                "Medium motion graphics",
                "Sound effects & transitions",
                "Custom animated elements",
                "Professional voiceover",
                "2 rounds of revisions",
                "1080p/4K delivery",
            ],
        },
        {
            name: "Pro",
            price: "$999+ / video",
            description: "Fully custom, brand-first video built to convert at every touchpoint.",
            delivery: "Delivery in ~15 business days",
            features: [
                "Up to 2 min video",
                "Full custom animation",
                "Brand-matched visuals & style",
                "Script & storyboard included",
                "Premium voiceover",
                "Unlimited revisions",
                "4K delivery + source files",
            ],
        },
    ];

    return (
        <section className="py-32 px-6 md:px-8 bg-zinc-50 border-y-2 border-black">
            <div className="max-w-7xl mx-auto">
                <div className="reveal mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600 mb-5">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                            Pricing
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                        Simple tiers.
                        <span className="text-red-600 block">Serious results.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`reveal border-2 border-black bg-white p-8 transition-all duration-300 hover:-translate-y-2 ${
                                index === 1
                                    ? "shadow-[20px_20px_0px_0px_rgba(255,31,31,1)]"
                                    : "hover:shadow-[8px_8px_0px_0px_rgba(255,31,31,1)]"
                            }`}
                            style={{ transitionDelay: `${index * 0.08}s` }}
                        >
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-3xl font-black uppercase">{plan.name}</h3>
                                {index === 1 && (
                                    <span className="text-[10px] font-bold uppercase tracking-widest bg-red-600 text-white px-2 py-1">
                                        Most Popular
                                    </span>
                                )}
                            </div>

                            <div className="text-2xl font-black text-red-600 mb-3">
                                {plan.price}
                            </div>

                            <p className="text-gray-600 leading-relaxed">{plan.description}</p>

                            <div className="mt-8 border-t-2 border-black pt-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-3 text-sm font-bold">
                                            <span className="text-red-600">■</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 flex items-center justify-between gap-4">
                                <a href="/contact" className="pixel-button px-6 py-4 text-sm">
                                    Get started
                                </a>
                            </div>

                            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                {plan.delivery}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}