import { useEffect, useState } from 'react';

export default function Hero() {
    const [frames, setFrames] = useState('00');

    useEffect(() => {
        let animationFrameId: number;

        const updateFrames = () => {
            setFrames(
                Math.floor(Math.random() * 24)
                    .toString()
                    .padStart(2, '0')
            );

            animationFrameId = requestAnimationFrame(updateFrames);
        };

        updateFrames();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="pt-40 pb-24 px-6 md:px-8 md:pr-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <div className="space-y-8 reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                            Premium Video Partner
                        </span>
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                       You Build It. 
<span className="text-red-600"> We Show It.
</span>{' '}
                        
<br />
                        
                    </h1>

                    <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                         Redpxls makes SaaS videos that turn visitors into users animated, explainer, and demo videos built to convert.

                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <a
                            href="/#booking"
                            className="pixel-button px-10 py-5 text-lg"
                        >
                            Get a Quote
                        </a>

                        {/* <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                Next available slot
                            </span>
                            <span className="text-sm font-bold">
                                Monday, May 12th
                            </span>
                        </div> */}
                    </div>
                </div>

                {/* Right Video Section */}
                <div
                    className="relative group reveal"
                    style={{ transitionDelay: '0.2s' }}
                >
                    <div className="absolute   -left-4 w-5 h-5 border-t-2 border-l-2 border-red-600"></div>
                    <div className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-red-600"></div>

                    <div className="bg-black p-1 border-2 border-black shadow-[20px_20px_0px_0px_rgba(255,31,31,1)]">
                        <div className="aspect-video bg-black relative overflow-hidden group-hover:shadow-inner transition-all">
                            
                            {/* Mux Video Embed */}
                            <iframe
                                src="https://player.mux.com/OQ6rScsDQ7kHD1WW4U00ThkPf2yQcA7XsUcPaw3a7iy8?metadata-video-title=redpxls&video-title=redpxls&accent-color=%23f5c2c2&primary-color=%23d60000&secondary-color=%23ff7a7a"
                                className="absolute inset-0 w-full h-full z-0"
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen
                            />
 
                            {/* REC UI */}
                            <div className="absolute top-4 left-4 flex gap-4 text-[10px] font-mono text-red-500 z-20 pointer-events-none">
                                <span className="animate-pulse">
                                    REC ●
                                </span>
                                <span>00:42:15:{frames}</span>
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}