import Hero from '../components/Hero';
import Process from '../components/Process';
import Work from '../components/Work';
import CaseStudies from '../components/CaseStudies';
import ROI from '../components/ROI';
import Booking from '../components/Booking';

export default function Home() {
    return (
        <main>
            <Hero />
            <Process />
            <Work />
            <CaseStudies />
            {/* <ROI /> */}
            <Booking />
        </main>
    );
}
