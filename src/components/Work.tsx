import { useEffect, useMemo, useRef, useState } from 'react';
import LeadModal from './LeadModal';
import worksData from '../data/workItems.json';

type WorkItem = {
    title: string;
    description?: string;
    videoUrl: string;
};

const ITEMS_PER_PAGE = 4;

export default function Work() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const sectionRef = useRef<HTMLElement>(null);
    const hasTriggered = useRef(false);

    const works = worksData as WorkItem[];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            if (entry.isIntersecting) {
                if (!hasTriggered.current) {
                    setIsModalOpen(true);
                    hasTriggered.current = true;
                }
            } else {
                hasTriggered.current = false;
            }
        }, { threshold: 0.2 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getYoutubeVideoId = (url: string) => {
        const regex =
            /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^&?/]+)/;

        const match = url.match(regex);

        return match ? match[1] : null;
    };

    const getYoutubeEmbedUrl = (url: string) => {
        const videoId = getYoutubeVideoId(url);

        if (!videoId) {
            return url;
        }

        return `https://www.youtube.com/embed/${videoId}`;
    };

    const totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);

    const paginatedWorks = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        return works.slice(startIndex, endIndex);
    }, [works, currentPage]);

    const goToPreviousPage = () => {
        setCurrentPage((page) => Math.max(page - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((page) => Math.min(page + 1, totalPages));
    };

    return (
        <section id="work" ref={sectionRef} className="py-32 px-6 md:px-8 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 reveal">
                    <h2 className="text-5xl font-black tracking-tighter uppercase">
               <span className="text-red-600">WORK</span>.
                    </h2>

                </div>

                {works.length === 0 ? (
                    <div className="border-2 border-black p-10 text-center">
                        <p className="text-xl font-bold">No portfolio videos added yet.</p>
                        <p className="text-gray-500 mt-2">
                            Add your first video inside workItems.json.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {paginatedWorks.map((work, index) => (
                                <div
                                    key={`${work.title}-${index}`}
                                    className="reveal group"
                                    style={{ transitionDelay: `${index * 0.1}s` }}
                                >
                                    <div className="relative overflow-hidden border-2 border-black aspect-video mb-6 bg-black">
                                        <iframe
                                            src={getYoutubeEmbedUrl(work.videoUrl)}
                                            title={work.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                                        {work.title}
                                    </h3>

                                    {work.description && (
                                        <p className="text-gray-500">
                                            {work.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-16">
                                <p className="text-gray-500 font-medium">
                                    Page {currentPage} of {totalPages}
                                </p>

                                <div className="flex items-center gap-3 flex-wrap justify-center">
                                    <button
                                        type="button"
                                        onClick={goToPreviousPage}
                                        disabled={currentPage === 1}
                                        className="px-6 py-3 border-2 border-black font-bold uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
                                    >
                                        Previous
                                    </button>

                                    <div className="flex items-center gap-2 flex-wrap justify-center">
                                        {Array.from({ length: totalPages }).map((_, index) => {
                                            const pageNumber = index + 1;

                                            return (
                                                <button
                                                    key={pageNumber}
                                                    type="button"
                                                    onClick={() => setCurrentPage(pageNumber)}
                                                    className={`w-11 h-11 border-2 border-black font-bold transition-colors ${
                                                        currentPage === pageNumber
                                                            ? 'bg-red-600 text-white border-red-600'
                                                            : 'bg-white text-black hover:bg-black hover:text-white'
                                                    }`}
                                                >
                                                    {pageNumber}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={goToNextPage}
                                        disabled={currentPage === totalPages}
                                        className="px-6 py-3 border-2 border-black font-bold uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}