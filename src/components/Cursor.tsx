import { useEffect, useRef } from 'react';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const currentPos = useRef({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });
    const hasMoved = useRef(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            targetPos.current.x = e.clientX;
            targetPos.current.y = e.clientY;

            if (!hasMoved.current) {
                currentPos.current.x = e.clientX;
                currentPos.current.y = e.clientY;
                cursor.style.opacity = '1';
                hasMoved.current = true;
            }
        };

        document.addEventListener('mousemove', onMouseMove);

        let animationFrameId: number;
        const animateCursor = () => {
            currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.2;
            currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.2;

            if (cursor) {
                cursor.style.transform = `translate3d(${currentPos.current.x - 8}px, ${currentPos.current.y - 8}px, 0)`;
            }
            animationFrameId = requestAnimationFrame(animateCursor);
        };
        animateCursor();

        const interactiveSelectors = 'a, button, .cursor-pointer, input, [role="button"]';
        const onMouseOver = (e: MouseEvent) => {
            if ((e.target as Element).closest(interactiveSelectors)) {
                cursor.classList.add('cursor-hover');
            }
        };
        const onMouseOut = (e: MouseEvent) => {
            if ((e.target as Element).closest(interactiveSelectors)) {
                cursor.classList.remove('cursor-hover');
            }
        };

        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <div id="cursor" ref={cursorRef}></div>;
}
