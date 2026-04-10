export default function Booking() {
    return (
        <section id="booking" className="py-32 px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center border-4 border-black p-8 md:p-16 bg-white relative reveal">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 font-bold text-xs uppercase tracking-[0.3em] border-2 border-black whitespace-nowrap">
                    Limited Slots
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 mt-4 md:mt-0">READY TO BE THE NEXT <br/><span className="text-red-600">UNICORN?</span></h2>
                <div className="flex flex-col items-center gap-6">
                    <a href="https://calendly.com" target="_blank" rel="noreferrer" className="pixel-button px-8 md:px-16 py-4 md:py-6 text-xl md:text-2xl uppercase tracking-tighter w-full sm:w-auto text-center justify-center">BOOK CALENDLY SLOT</a>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest cursor-blink">System Status: Awaiting Connection</p>
                </div>
            </div>
        </section>
    );
}
