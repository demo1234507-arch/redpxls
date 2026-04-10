import { useEffect, useRef, useState } from 'react';

export default function Process() {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = 100;
                    let currentCount = 0;
                    const duration = 1500;
                    const stepTime = 16;
                    const increment = target / (duration / stepTime);
                    
                    const updateCount = () => {
                        currentCount += increment;
                        if (currentCount < target) {
                            setCount(Math.floor(currentCount));
                            setTimeout(updateCount, stepTime);
                        } else {
                            setCount(target);
                        }
                    };
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="process" className="py-32 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 items-end mb-24 reveal">
                    <div className="md:col-span-8">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            OUR EDITING <span className="text-red-600">WORKFLOW</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            We don't just "make videos." We engineer visual explanations designed to solve customer friction.
                        </p>
                    </div>
                    <div className="md:col-span-4 flex justify-start md:justify-end">
                        <div className="border-2 border-red-600 p-6 text-center group cursor-default">
                            <span ref={countRef} className="block text-5xl font-black text-red-600">{count}</span>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-red-600 transition-colors">SaaS Projects Delivered</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <div className="reveal bg-zinc-900 p-10 border border-white/10 hover:border-red-600 transition-all duration-300 group">
                        <span className="text-red-600 font-bold mb-8 block text-sm tracking-[0.2em]">STEP_01</span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">Core Extraction</h3>
                        <p className="text-gray-400 leading-relaxed">We identify the "Aha!" moment of your product and strip away the fluff.</p>
                    </div>
                    <div className="reveal bg-zinc-900 p-10 border border-white/10 hover:border-red-600 transition-all duration-300 group" style={{ transitionDelay: '0.1s' }}>
                        <span className="text-red-600 font-bold mb-8 block text-sm tracking-[0.2em]">STEP_02</span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">Pixel-Perfect Cut</h3>
                        <p className="text-gray-400 leading-relaxed">Fast-paced, professional editing with dynamic motion graphics.</p>
                    </div>
                    <div className="reveal bg-zinc-900 p-10 border border-white/10 hover:border-red-600 transition-all duration-300 group" style={{ transitionDelay: '0.2s' }}>
                        <span className="text-red-600 font-bold mb-8 block text-sm tracking-[0.2em]">STEP_03</span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">ROI Integration</h3>
                        <p className="text-gray-400 leading-relaxed">Optimization for platforms to ensure the video actually pays for itself.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
