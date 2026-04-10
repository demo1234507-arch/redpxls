import { useEffect, useRef, useState } from 'react';

export default function ROI() {
    const [cvr, setCvr] = useState(0);
    const [time, setTime] = useState(0);
    const cvrRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateValue = (target: number, setter: (val: number) => void) => {
            let currentCount = 0;
            const duration = 1500;
            const stepTime = 16;
            const increment = target / (duration / stepTime);
            
            const updateCount = () => {
                currentCount += increment;
                if (currentCount < target) {
                    setter(Math.floor(currentCount));
                    setTimeout(updateCount, stepTime);
                } else {
                    setter(target);
                }
            };
            updateCount();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === cvrRef.current) animateValue(45, setCvr);
                    if (entry.target === timeRef.current) animateValue(10, setTime);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (cvrRef.current) observer.observe(cvrRef.current);
        if (timeRef.current) observer.observe(timeRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="roi" className="py-32 px-6 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                <div className="w-full md:w-1/2 space-y-10 reveal">
                    <div className="space-y-4">
                        <h2 className="text-5xl font-black tracking-tighter uppercase">DATA THAT PROVES <br/>OUR <span className="text-red-600 underline decoration-4 underline-offset-8">VALUE</span>.</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">A Redpxls video isn't an expense; it's an investment in your sales funnel performance.</p>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="flex items-center gap-6 md:gap-8 p-6 md:p-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-all group">
                            <div ref={cvrRef} className="text-5xl md:text-6xl font-black text-red-600 group-hover:text-white">{cvr}%</div>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-sm mb-1">Avg Lift in CVR</p>
                                <p className="text-gray-500 text-sm group-hover:text-gray-400">Conversion rate improvement on landing pages.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 md:gap-8 p-6 md:p-8 border-2 border-black bg-red-600 text-white hover:bg-black transition-all group">
                            <div ref={timeRef} className="text-5xl md:text-6xl font-black group-hover:text-red-600">{time}s</div>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-sm mb-1">Max Time to Value</p>
                                <p className="text-white/80 text-sm group-hover:text-gray-400">Average time to explain core features.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 relative reveal" style={{ transitionDelay: '0.2s' }}>
                    <div className="bg-gray-100 aspect-square p-8 md:p-12 border-2 border-black flex flex-col justify-between overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-600/20"></div>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <div className="w-16 h-2 bg-red-600"></div>
                                <div className="w-10 h-2 bg-black"></div>
                            </div>
                            <div className="text-[10px] font-mono text-gray-400 tracking-tighter">ANALYTICS_SNAPSHOT_2024.EXE</div>
                        </div>
                        
                        <div className="flex-grow flex items-center justify-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white border-2 border-black flex items-center justify-center relative hover:scale-110 transition-transform cursor-pointer group">
                                 <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                                 <svg className="w-10 h-10 md:w-12 md:h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="h-1 bg-gray-300 w-full overflow-hidden"><div className="h-full bg-red-600 w-3/4 animate-[grow_2s_ease-out_infinite]"></div></div>
                            <div className="h-1 bg-gray-300 w-full overflow-hidden"><div className="h-full bg-black w-1/2 animate-[grow_3s_ease-out_infinite]"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
