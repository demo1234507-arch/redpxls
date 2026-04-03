import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, MonitorPlay, Video, Zap } from 'lucide-react';
import LeadModal from './components/LeadModal';
import CalendlyEmbed from './components/CalendlyEmbed';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasModalShown, setHasModalShown] = useState(false);
  const workSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasModalShown) {
          setIsModalOpen(true);
          setHasModalShown(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the work section is visible
    );

    if (workSectionRef.current) {
      observer.observe(workSectionRef.current);
    }

    return () => {
      if (workSectionRef.current) {
        observer.unobserve(workSectionRef.current);
      }
    };
  }, [hasModalShown]);

  return (
    <div className="w-full bg-[#050505] font-barlow text-white selection:bg-white/30">
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <header className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          aria-hidden="true"
        />
        {/* Gradient Overlay for better text readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>

        {/* Navigation */}
        <nav className="relative z-10 flex w-full items-center justify-between px-8 py-6" aria-label="Main Navigation">
          <div className="text-2xl font-bold tracking-widest uppercase text-white">Redpxls</div>
          <div className="hidden sm:flex items-center gap-2">
            <a href="#work" className="rounded-md px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">Work</a>
            <a href="#services" className="rounded-md px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">Services</a>
            <a href="#process" className="rounded-md px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">Process</a>
            <a href="#contact" className="rounded-md px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">Contact</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-end pb-[250px] px-4">
          {/* Central Container with Corner Accents */}
          <div className="relative flex w-full max-w-5xl flex-col items-center text-center px-8 py-12 sm:px-16 sm:py-16">
            {/* Corner Accents */}
            <div className="absolute -top-[3.5px] -left-[3.5px] h-[7px] w-[7px] bg-white" aria-hidden="true"></div>
            <div className="absolute -top-[3.5px] -right-[3.5px] h-[7px] w-[7px] bg-white" aria-hidden="true"></div>
            <div className="absolute -bottom-[3.5px] -left-[3.5px] h-[7px] w-[7px] bg-white" aria-hidden="true"></div>
            <div className="absolute -bottom-[3.5px] -right-[3.5px] h-[7px] w-[7px] bg-white" aria-hidden="true"></div>

            {/* Featured Badge */}
            <div className="mb-10 flex items-center justify-center rounded-full bg-white/10 p-1.5 backdrop-blur-sm">
              <div className="rounded-full bg-white/90 px-5 py-1.5 text-sm font-semibold tracking-wide text-[#171717] backdrop-blur-md">
                Premium SaaS Video Production
              </div>
            </div>

            {/* Headline */}
            <h1 className="mb-8 flex flex-col items-center leading-[1.1]">
              <span className="text-[40px] sm:text-[64px] font-light text-white">We craft high-converting</span>
              <span className="font-instrument text-[48px] sm:text-[72px] italic text-white">SaaS explainer videos</span>
            </h1>

            {/* Sub-headline */}
            <p className="mb-12 max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-white/75">
              Turn complex software into compelling stories. We help tech companies increase conversions with cinematic product demos and explainer videos.
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="rounded-[2px] bg-[#f8f8f8] px-10 py-4 text-base font-medium text-[#171717] transition-colors duration-300 hover:bg-white flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Start Your Project
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Featured Big Video Section */}
        <section className="py-24 px-8 sm:px-16 max-w-7xl mx-auto border-t border-white/10 bg-[#050505]">
          <div className="mb-12 text-center">
            <h2 className="font-instrument text-4xl sm:text-5xl italic mb-4">See Our Impact</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
              Watch how Redpxls transforms complex SaaS platforms into engaging, easy-to-understand visual narratives that drive conversions.
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-[2px] overflow-hidden border border-white/10 bg-white/5 group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/mainvideo/1920/1080" 
              alt="Redpxls SaaS Video Production Showreel Thumbnail" 
              className="w-full h-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-50" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 fill-white text-white ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="border-y border-white/10 bg-[#0a0a0a] py-12 overflow-hidden" aria-label="Trusted Companies">
          <div className="mx-auto max-w-7xl px-8 text-center">
            <p className="mb-8 text-sm font-medium uppercase tracking-widest text-white/40">Trusted by innovative tech teams</p>
            <div className="flex flex-wrap justify-center gap-12 sm:gap-24 opacity-60 grayscale">
              {['Acme Corp', 'Nexus', 'CloudSync', 'DataFlow', 'Vertex'].map((logo) => (
                <span key={logo} className="text-2xl font-bold tracking-wider font-instrument italic">{logo}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-8 sm:px-16 max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="font-instrument text-4xl sm:text-5xl italic mb-4">Specialized for Software</h2>
            <p className="text-white/60 max-w-2xl text-lg font-light">We don't just make videos; we understand SaaS. From value propositions to UI animations, we highlight what makes your product unique.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MonitorPlay className="w-8 h-8 mb-6 text-white/80" aria-hidden="true" />,
                title: "SaaS Explainers",
                desc: "Clear, engaging overviews of your platform that convert landing page visitors into active users."
              },
              {
                icon: <Video className="w-8 h-8 mb-6 text-white/80" aria-hidden="true" />,
                title: "Product Demos",
                desc: "Deep-dive walkthroughs of your UI, showcasing features with sleek motion graphics and screen replacements."
              },
              {
                icon: <Zap className="w-8 h-8 mb-6 text-white/80" aria-hidden="true" />,
                title: "Social Video Ads",
                desc: "Short, punchy video assets optimized for LinkedIn, Twitter, and YouTube ad campaigns."
              }
            ].map((service, idx) => (
              <article key={idx} className="group relative border border-white/10 bg-[#0a0a0a] p-10 transition-colors hover:bg-white/5 rounded-[2px]">
                {/* Corner Accents for cards */}
                <div className="absolute -top-[2px] -left-[2px] h-[4px] w-[4px] bg-white/30 transition-colors group-hover:bg-white" aria-hidden="true"></div>
                <div className="absolute -top-[2px] -right-[2px] h-[4px] w-[4px] bg-white/30 transition-colors group-hover:bg-white" aria-hidden="true"></div>
                <div className="absolute -bottom-[2px] -left-[2px] h-[4px] w-[4px] bg-white/30 transition-colors group-hover:bg-white" aria-hidden="true"></div>
                <div className="absolute -bottom-[2px] -right-[2px] h-[4px] w-[4px] bg-white/30 transition-colors group-hover:bg-white" aria-hidden="true"></div>
                
                {service.icon}
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Work Section (Triggers Modal) */}
        <section id="work" ref={workSectionRef} className="py-24 bg-[#0a0a0a] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-8 sm:px-16">
            <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-instrument text-4xl sm:text-5xl italic mb-4">Recent Work</h2>
                <p className="text-white/60 text-lg font-light max-w-md">Explore how we've helped other tech companies tell their stories.</p>
              </div>
              <button className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-white/70 transition-colors">
                View All Projects <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "CloudSync Platform Overview", category: "SaaS Explainer", img: "https://picsum.photos/seed/dashboard1/1200/800?blur=2" },
                { title: "DataFlow Analytics Demo", category: "Product Demo", img: "https://picsum.photos/seed/software2/1200/800?blur=2" },
                { title: "Nexus Security Launch", category: "Promo Video", img: "https://picsum.photos/seed/tech3/1200/800?blur=2" },
                { title: "Vertex AI Integration", category: "Social Ad", img: "https://picsum.photos/seed/code4/1200/800?blur=2" }
              ].map((work, idx) => (
                <article key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[2px] mb-6 aspect-video bg-white/5">
                    <img 
                      src={work.img} 
                      alt={`Thumbnail for ${work.title} video project`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                        <Play className="h-6 w-6 fill-white text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-medium">{work.title}</h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-white/40 border border-white/10 px-3 py-1 rounded-full">{work.category}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 px-8 sm:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-instrument text-4xl sm:text-5xl italic mb-4">Our Process</h2>
            <p className="text-white/60 text-lg font-light max-w-md">A streamlined approach designed specifically for fast-moving tech teams.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Discovery", desc: "We dive deep into your software, target audience, and value proposition." },
              { num: "02", title: "Script & Storyboard", desc: "Crafting the narrative and visual blueprint before any animation begins." },
              { num: "03", title: "Production", desc: "Bringing the story to life with motion graphics, UI animation, and sound design." },
              { num: "04", title: "Delivery", desc: "Final polish and delivery in all formats needed for your campaigns." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="font-instrument text-6xl italic text-white/10 mb-6" aria-hidden="true">{step.num}</div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA & Booking Section */}
        <section id="contact" className="relative py-32 overflow-hidden bg-[#0a0a0a] border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5" aria-hidden="true"></div>
          <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-5xl mx-auto">
            <h2 className="font-instrument text-5xl sm:text-6xl italic mb-6">Ready to explain your software?</h2>
            <p className="text-white/60 text-lg font-light mb-12 max-w-2xl">
              Let's create a video that turns your complex tech into a compelling story. Book a discovery call directly below.
            </p>
            
            <div className="w-full bg-black/50 rounded-[2px] p-2 sm:p-4 border border-white/10">
              {/* NOTE: Replace the URL below with your actual Calendly link */}
              <CalendlyEmbed url="https://calendly.com/contact-redpxls/30min" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-8 sm:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-widest uppercase text-white">Redpxls</div>
          <div className="flex gap-6 text-sm font-medium text-white/40">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
          </div>
          <div className="text-sm text-white/40 font-light">
            &copy; {new Date().getFullYear()} Redpxls Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
