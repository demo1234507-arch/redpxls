import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const caseStudiesData = {
    "technova": {
        company: "TechNova",
        metric: "+120%",
        result: "Increase in demo bookings",
        tags: ["SaaS", "FinTech"],
        challenge: "TechNova had a complex product that was difficult to explain in text. Their landing page bounce rate was high, and users weren't reaching the 'Aha!' moment.",
        solution: "We created a 60-second high-energy explainer video focusing on the core value proposition, stripping away technical jargon and focusing on ROI.",
        outcome: "Within 30 days of implementing the video on their hero section, demo bookings increased by 120% and time-on-page doubled."
    },
    "omnistack": {
        company: "OmniStack",
        metric: "3x",
        result: "Faster user onboarding",
        tags: ["DevTools", "B2B"],
        challenge: "Users were dropping off during the complex setup phase of OmniStack's developer tool.",
        solution: "A series of pixel-perfect, fast-paced onboarding videos that guided users through the setup process visually.",
        outcome: "Onboarding completion rates tripled, and support tickets related to setup decreased by 60%."
    },
    "lumina-hr": {
        company: "Lumina HR",
        metric: "-40%",
        result: "Drop in bounce rate",
        tags: ["Enterprise", "HR"],
        challenge: "Lumina HR's enterprise platform looked outdated compared to newer startups, causing high bounce rates on their main product pages.",
        solution: "A sleek, modern product trailer that highlighted their new UI update and enterprise-grade security features.",
        outcome: "Bounce rate dropped by 40%, and enterprise sales cycles shortened by an average of 2 weeks."
    },
    "aerospace": {
        company: "AeroSpace",
        metric: "$2M",
        result: "Pipeline generated in 30 days",
        tags: ["Logistics", "AI"],
        challenge: "AeroSpace needed to make a splash at a major industry conference with their new AI logistics predictor.",
        solution: "A cinematic, high-impact promo video designed specifically for large screens and loud environments, relying on bold typography and motion.",
        outcome: "The video drew massive crowds at the booth, directly contributing to $2M in new pipeline generated during the 3-day event."
    }
};

export default function CaseStudyDetails() {
    const { id } = useParams();
    const study = caseStudiesData[id as keyof typeof caseStudiesData];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!study) {
        return (
            <div className="pt-40 pb-24 px-6 md:px-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-black mb-4">CASE STUDY NOT FOUND</h1>
                <Link to="/" className="pixel-button">RETURN HOME</Link>
            </div>
        );
    }

    return (
        <div className="pt-40 pb-24 px-6 md:px-8 max-w-5xl mx-auto min-h-screen">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:text-red-600 mb-12 transition-colors">
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                BACK TO HOME
            </Link>

            <div className="reveal active">
                <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold uppercase tracking-widest bg-gray-100 px-3 py-1">{tag}</span>
                    ))}
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">{study.company}</h1>
                
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="col-span-1 md:col-span-2 text-xl text-gray-600 leading-relaxed">
                        {study.challenge}
                    </div>
                    <div className="bg-black text-white p-8 border-b-4 border-red-600">
                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Key Result</div>
                        <div className="text-5xl font-black text-red-600 mb-2">{study.metric}</div>
                        <div className="text-sm">{study.result}</div>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="border-l-4 border-red-600 pl-6">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">The Solution</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div className="border-l-4 border-black pl-6">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">The Outcome</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{study.outcome}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
