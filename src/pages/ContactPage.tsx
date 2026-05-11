export default function ContactPage() {
    return (
        <section className="py-32 px-6 md:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                <div className="reveal space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                            Contact
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase">
                        Let&apos;s Show the
                        <span className="text-red-600 block">World What You Built.</span>
                    </h1>

                    <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                        Tell us what you are building, and we will help turn it into a video that gets it.
                    </p>

                    <div className="border-2 border-black bg-white p-6 shadow-[12px_12px_0px_0px_rgba(255,31,31,1)]">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                            Contact details
                        </p>
                        <div className="space-y-2 font-bold">
                            <p>hello@redpxls.com</p>
                            <p>Bengaluru, India</p>
                        </div>
                    </div>
                </div>

                <div className="reveal">
                    <div className="bg-white border-2 border-black p-8 md:p-10 shadow-[20px_20px_0px_0px_rgba(255,31,31,1)]">
                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border-2 border-black px-4 py-3 outline-none font-bold placeholder:text-gray-400 focus:border-red-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full border-2 border-black px-4 py-3 outline-none font-bold placeholder:text-gray-400 focus:border-red-600"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-2 border-black px-4 py-3 outline-none font-bold placeholder:text-gray-400 focus:border-red-600"
                            />

                            <select className="w-full border-2 border-black px-4 py-3 outline-none font-bold bg-white focus:border-red-600">
                                <option>Video type</option>
                                <option>Animated</option>
                                <option>Explainer</option>
                                <option>Demo</option>
                                <option>Not sure</option>
                            </select>

                            <textarea
                                rows={6}
                                placeholder="Tell us about your product"
                                className="w-full border-2 border-black px-4 py-3 outline-none font-bold placeholder:text-gray-400 focus:border-red-600 resize-none"
                            />

                            <button type="submit" className="pixel-button px-10 py-5 text-lg w-full">
                                Let&apos;s Get Started →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}