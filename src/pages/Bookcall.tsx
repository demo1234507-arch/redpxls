export default function BookingSection() {
    return (
        <section
            id="booking"
            className="py-32 px-6 md:px-8 bg-zinc-50 border-y-2 border-black overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-14 reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600 mb-5">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                            Book a Call
                        </span>
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        Let&apos;s Talk About
                        <span className="text-red-600 block">
                            Your SaaS Video.
                        </span>
                    </h2>

                    <p className="text-xl text-gray-500 max-w-2xl mt-6 leading-relaxed">
                        Pick a time that works for you. We’ll understand your
                        product, goals, and recommend the right video approach
                        for growth.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">
                    {/* Left Info Card */}
                    <div className="reveal sticky top-28">
                        <div className="relative">
                            <div className="absolute -left-4 top-4 w-5 h-5 border-t-2 border-l-2 border-red-600"></div>
                            <div className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-red-600"></div>

                            <div className="bg-black text-white border-2 border-black p-8 shadow-[16px_16px_0px_0px_rgba(255,31,31,1)]">
                                <div className="mb-8">
                                    <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
                                        What to expect
                                    </p>

                                    <h3 className="text-3xl font-black uppercase leading-tight">
                                        15-Min Strategy Call
                                    </h3>
                                </div>

                                <div className="space-y-5">
                                    {[
                                        "Discuss your product",
                                        "Choose the right video type",
                                        "Get timeline & pricing clarity",
                                        "See examples relevant to SaaS",
                                    ].map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="w-8 h-8 shrink-0 border border-red-600 flex items-center justify-center text-red-500 font-black text-sm">
                                                {index + 1}
                                            </div>

                                            <p className="text-gray-300 leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 border-t border-zinc-700 pt-6">
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                                        Contact
                                    </p>

                                    <p className="font-bold">
                                        hello@redpxls.com
                                    </p>

                                    <p className="text-gray-400 mt-1">
                                        Bengaluru, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calendly Embed */}
                    <div
                        className="reveal relative"
                        style={{ transitionDelay: "0.15s" }}
                    >
                        <div className="absolute -left-4 top-4 w-5 h-5 border-t-2 border-l-2 border-red-600"></div>
                        <div className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-red-600"></div>

                        <div className="bg-white border-2 border-black p-2 md:p-4 shadow-[20px_20px_0px_0px_rgba(255,31,31,1)]">
                            <div className="bg-zinc-100 border-2 border-black">
                                <iframe
                                    src="https://calendly.com/contact-redpxls/30min"
                                    width="100%"
                                    height="850"
                                    frameBorder="0"
                                    title="Calendly Booking"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}