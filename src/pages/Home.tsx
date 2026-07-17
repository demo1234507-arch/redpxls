import Hero from '../components/Hero';
import Process from '../components/Process';
import Work from '../components/Work';
import CaseStudies from '../components/CaseStudies';
import { useEffect, useState } from "react";
import LeadModal from "../components/LeadModal";
import Booking from '../components/Booking';


export default function Home() {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

useEffect(() => {
  const section = document.getElementById("portfolio-section");

  if (!section) return;

  const hasAlreadyShown = sessionStorage.getItem("redpxl_lead_modal_shown");

  if (hasAlreadyShown) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsLeadModalOpen(true);
        sessionStorage.setItem("redpxl_lead_modal_shown", "true");
        observer.disconnect();
      }
    },
    {
      threshold: 0.35,
    }
  );

  observer.observe(section);

  return () => {
    observer.disconnect();
  };
}, []);
    return (
        <main>
            <Hero />
            <Process  />
            <section id="portfolio-section" className="px-4 py-24">
     <Work />
</section>
         
            {/* <CaseStudies  /> */}
            {/* <ROI /> */}
            <Booking />
            <LeadModal
  open={isLeadModalOpen}
  onClose={() => setIsLeadModalOpen(false)}
/>
        </main>
    );
}
