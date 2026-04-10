import { useEffect, useRef, useState } from 'react';
import LeadModal from './LeadModal';

export default function Work() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                if (!hasTriggered.current) {
                    setIsModalOpen(true);
                    hasTriggered.current = true;
                }
            } else {
                // Reset when it leaves the viewport so it triggers "each time" they scroll to it
                hasTriggered.current = false;
            }
        }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const works = [
        {
            title: "DataFlow Analytics",
            description: "A 60-second explainer breaking down complex data pipelines into digestible visual metaphors.",
            thumbnail: "https://picsum.photos/seed/work1/800/450?blur=2"
        },
        {
            title: "CloudSync Pro",
            description: "High-energy promo highlighting the speed and security of enterprise cloud synchronization.",
            thumbnail: "https://picsum.photos/seed/work2/800/450?blur=2"
        },
        {
            title: "Nexus CRM",
            description: "Feature walkthrough focusing on user interface elegance and workflow automation.",
            thumbnail: "https://picsum.photos/seed/work3/800/450?blur=2"
        },
        {
            title: "SecureGuard AI",
            description: "Dramatic product trailer showcasing AI-driven threat detection in real-time.",
            thumbnail: "https://picsum.photos/seed/work4/800/450?blur=2"
        }
    ];

    return (
        <section id="work" ref={sectionRef} className="py-32 px-6 md:px-8 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 reveal">
                    <h2 className="text-5xl font-black tracking-tighter uppercase">FEATURED <span className="text-red-600">WORK</span>.</h2>
                    <p className="text-gray-600 text-lg mt-4">See how we translate complex software into compelling stories.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {works.map((work, index) => (
                        <div key={index} className="reveal group cursor-pointer" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="relative overflow-hidden border-2 border-black aspect-video mb-6">
                                <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">{work.title}</h3>
                            <p className="text-gray-500">{work.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
