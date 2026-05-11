export default function AboutPage() {
    return (
        <section className="pt-40 pb-24 px-6 md:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                            About Redpxls
                        </span>
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase">
                        We Speak SaaS.
                        <span className="text-red-600 block">Fluently.</span>
                    </h1>

                    <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                        Redpxls is a video studio built for SaaS companies and startups.
                        We take your product and turn it into a story your audience instantly gets
                        and acts on.
                    </p>

                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                        Better videos mean more signups, lower churn, and faster sales cycles.
                        That is what we are here for.
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <a href="/contact" className="pixel-button px-10 py-5 text-lg">
                            Let&apos;s Talk
                        </a>
                    </div>
                </div>

                <div className="relative reveal">
                    <div className="absolute -left-4 top-8 w-5 h-5 border-t-2 border-l-2 border-red-600"></div>
                    <div className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-red-600"></div>

                    <div className="bg-white border-2 border-black p-8 shadow-[20px_20px_0px_0px_rgba(255,31,31,1)]">
                        <div className="grid gap-6">
                            <div className="border-2 border-black p-6 bg-zinc-50">
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                    What we do
                                </p>
                                <p className="text-2xl font-black uppercase">
                                    Product videos that sell
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    ["More signups", "From clearer messaging"],
                                    ["Lower churn", "From better onboarding"],
                                    ["Faster sales", "From stronger demos"],
                                ].map(([title, desc]) => (
                                    <div key={title} className="border-2 border-black p-5">
                                        <h3 className="font-black text-lg uppercase">{title}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}