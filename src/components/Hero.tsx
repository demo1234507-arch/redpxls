import { useEffect, useState } from 'react';

export default function Hero() {
    const [videoProgress, setVideoProgress] = useState(33);
    const [frames, setFrames] = useState('00');

    useEffect(() => {
        let animationFrameId: number;
        const updateVideoUI = () => {
            setVideoProgress(prev => (prev + 0.04) % 100);
            setFrames(Math.floor(Math.random() * 24).toString().padStart(2, '0'));
            animationFrameId = requestAnimationFrame(updateVideoUI);
        };
        updateVideoUI();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="pt-40 pb-24 px-6 md:px-8 md:pr-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Premium Video Partner</span>
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                        WE BUILD <span className="text-red-600">PIXEL</span> PERFECT <br/>PROMOS.
                    </h1>
                    <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                        Don't let complex features confuse your customers. We edit high-conversion SaaS trailers that explain your product in seconds, driving ROI through clarity.
                    </p>
                    <div className="flex flex-wrap gap-6 pt-4">
                        <a href="/#booking" className="pixel-button px-10 py-5 text-lg">Book Your Slot</a>
                        <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Next available slot</span>
                            <span className="text-sm font-bold">Monday, May 12th</span>
                        </div>
                    </div>
                </div>

                <div className="relative group reveal" style={{ transitionDelay: '0.2s' }}>
                    <div className="absolute -top-4 -left-4 w-5 h-5 border-t-2 border-l-2 border-red-600"></div>
                    <div className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-red-600"></div>
                    
                    <div className="bg-black p-1 border-2 border-black shadow-[20px_20px_0px_0px_rgba(255,31,31,1)]">
                        <div className="aspect-video bg-gray-900 relative overflow-hidden flex items-center justify-center group-hover:shadow-inner transition-all">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
                            
                            <div className="absolute top-4 left-4 flex gap-4 text-[10px] font-mono text-red-500">
                                <span className="animate-pulse">REC ●</span>
                                <span>00:42:15:{frames}</span>
                            </div>
                            
                            <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="h-1 bg-white/20 w-full relative mb-2">
                                    <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${videoProgress}%` }}></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-mono text-white/70 uppercase">
                                    <span>Preview_Render_v4.mov</span>
                                    <span>24.00 fps</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
