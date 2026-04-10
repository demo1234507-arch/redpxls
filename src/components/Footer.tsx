export default function Footer() {
    return (
        <footer className="py-20 border-t-4 border-black bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                <div className="col-span-1 sm:col-span-2 space-y-8">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-6 h-6 bg-red-600 group-hover:rotate-90 transition-transform"></div>
                        <span className="text-2xl font-black uppercase tracking-tighter">Redpxls</span>
                    </div>
                    <p className="text-gray-500 max-w-sm leading-relaxed">The premier video partner for SaaS founders who demand ROI over aesthetics.</p>
                </div>
                
                <div className="space-y-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-red-600 underline decoration-2 underline-offset-4">Navigation</h4>
                    <ul className="space-y-3 text-sm font-bold">
                        <li><a href="/#process" className="hover:text-red-600 transition-colors block">PROCESS.EXE</a></li>
                        <li><a href="/#work" className="hover:text-red-600 transition-colors block">WORK_VIDEOS.MP4</a></li>
                        <li><a href="/#casestudies" className="hover:text-red-600 transition-colors block">CASE_STUDIES.PDF</a></li>
                        <li><a href="/#roi" className="hover:text-red-600 transition-colors block">ROI_DATA.LOG</a></li>
                        <li><a href="/#booking" className="hover:text-red-600 transition-colors block">BOOKING.PRO</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-red-600 underline decoration-2 underline-offset-4">Connect</h4>
                    <ul className="space-y-3 text-sm font-bold">
                        <li><a href="#" className="hover:text-red-600 transition-colors block">TWITTER_X</a></li>
                        <li><a href="#" className="hover:text-red-600 transition-colors block">LINKEDIN_URL</a></li>
                        <li><a href="#" className="hover:text-red-600 transition-colors block">YOUTUBE_CH</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-8 mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-400">
                <span className="cursor-blink">STABLE_CONNECTION_ESTABLISHED</span>
                <span>&copy; 2024 REDPXLS_STUDIO.GLOBAL</span>
            </div>
        </footer>
    );
}
