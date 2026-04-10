import { useEffect, useState } from 'react';

export default function VerticalTimeline() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="vertical-timeline hidden md:flex">
            <div id="scroll-progress-line" style={{ height: `${scrollProgress}%` }}></div>
            <div className="text-[10px] font-mono rotate-90 mb-20 opacity-40">TIMELINE_V1.0</div>
            <div id="timeline-markers-container" className="flex flex-col items-center">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className={`timeline-marker ${i % 5 === 0 ? 'major' : ''}`}></div>
                ))}
            </div>
        </div>
    );
}
