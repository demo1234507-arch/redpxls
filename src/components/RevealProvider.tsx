import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RevealProvider({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        // Small delay ensures new route's DOM has painted before we query
        const timeout = setTimeout(() => {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        }, 0);

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, [location.pathname]); // 👈 re-run every time the route changes

    return <>{children}</>;
}