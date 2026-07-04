import React, { useEffect } from 'react';

export default function RevealProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // reveal once, then stop watching
                }
            });
        }, { threshold: 0.1 });

        const observeAll = (root: ParentNode) => {
            root.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
        };

        // catch whatever's already on the page
        observeAll(document);

        // catch anything added later, for any reason (route change, pagination, etc.)
        const mutationObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                mutation.addedNodes.forEach(node => {
                    if (!(node instanceof HTMLElement)) return;
                    if (node.classList.contains('reveal') && !node.classList.contains('active')) {
                        observer.observe(node);
                    }
                    observeAll(node);
                });
            }
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []); // runs once for the app's lifetime — no dependency on location at all

    return <>{children}</>;
}