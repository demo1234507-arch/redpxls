export default function ServicesPage() {
    const services = [
        {
            title: "SaaS Animated Videos",
            desc: "Premium animations that make your product look world class perfect for landing pages, ads, and pitches.",
        },
        {
            title: "Explainer Videos",
            desc: "90 seconds. One clear message. More conversions.",
        },
        {
            title: "Demo Videos",
            desc: "Your best sales rep — on autopilot, 24/7.",
        },
    ];

    const steps = [
        {
            title: "Discovery",
            desc: "We learn your product and goal.",
        },
        {
            title: "Script & Storyboard",
            desc: "We craft the story.",
        },
        {
            title: "Production",
            desc: "Animation, voice, sound. All done.",
        },
        {
            title: "Delivery",
            desc: "Publish-ready files, any format.",
        },
    ];

    return (
        <section className="py-32 px-6 md:px-8 border-y-2 border-black bg-zinc-50">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600 mb-5">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                            Services
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                        Videos That
                        <span className="text-red-600 block">Drive Growth</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="reveal bg-white border-2 border-black p-8 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,31,31,1)] transition-all duration-300"
                            style={{ transitionDelay: `${index * 0.08}s` }}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-4">
                                0{index + 1}
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="reveal bg-black text-white border-2 border-black p-8">
                        <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">
                            How It Works
                        </div>
                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={step.title} className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 border-2 border-red-600 text-red-500 flex items-center justify-center font-black">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg uppercase">{step.title}</h4>
                                        <p className="text-gray-300 mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reveal bg-white border-2 border-black p-8 shadow-[20px_20px_0px_0px_rgba(255,31,31,1)]">
                        <div className="border-b-2 border-black pb-5 mb-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                                What you get
                            </p>
                            <h3 className="text-3xl font-black uppercase mt-2">
                                Built for SaaS teams
                            </h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Landing page ready",
                                "Ad friendly formats",
                                "Pitch deck assets",
                                "Social cutdowns",
                                "Voiceover support",
                                "Brand matched visuals",
                            ].map((item) => (
                                <div key={item} className="border-2 border-black p-4 font-bold uppercase text-sm">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="/contact" className="pixel-button px-8 py-4 inline-flex">
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}