import { useNavigate } from 'react-router-dom';

export default function CaseStudies() {
    const navigate = useNavigate();
    const cases = [
        {
            id: "technova",
            company: "TechNova",
            metric: "+120%",
            result: "Increase in demo bookings",
            tags: ["SaaS", "FinTech"]
        },
        {
            id: "omnistack",
            company: "OmniStack",
            metric: "3x",
            result: "Faster user onboarding",
            tags: ["DevTools", "B2B"]
        },
        {
            id: "lumina-hr",
            company: "Lumina HR",
            metric: "-40%",
            result: "Drop in bounce rate",
            tags: ["Enterprise", "HR"]
        },
        {
            id: "aerospace",
            company: "AeroSpace",
            metric: "$2M",
            result: "Pipeline generated in 30 days",
            tags: ["Logistics", "AI"]
        }
    ];

    return (
        <section id="casestudies" className="py-32 px-6 md:px-8 bg-zinc-50 border-y-2 border-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 reveal">
                    <h2 className="text-5xl font-black tracking-tighter uppercase">CASE <span className="text-red-600">STUDIES</span>.</h2>
                    <p className="text-gray-600 text-lg mt-4">Real numbers from real SaaS companies.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((study, index) => (
                        <div 
                            key={index} 
                            onClick={() => navigate(`/case-study/${study.id}`)}
                            className="reveal bg-white border-2 border-black p-8 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,31,31,1)] transition-all duration-300 group cursor-pointer" 
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex gap-2 mb-6">
                                {study.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-2 py-1">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold mb-6">{study.company}</h3>
                            <div className="text-4xl font-black text-red-600 mb-2 group-hover:scale-110 origin-left transition-transform">{study.metric}</div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{study.result}</p>
                            <div className="mt-8 flex items-center gap-2 text-sm font-bold group-hover:text-red-600">
                                READ STUDY <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
