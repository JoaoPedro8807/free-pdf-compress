import {useEffect, useRef } from 'react';

interface IntersectionObserverOptions {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export function useIntersectionObserver({root = null, rootMargin = '0px', threshold = 0.1 }: IntersectionObserverOptions = {}) {
    const elementsRef = useRef<HTMLElement[]>([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showCard');
                } else {
                    entry.target.classList.remove('showCard');
                }
            });
        }, { root, rootMargin, threshold });

        elementsRef.current.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [root, rootMargin, threshold]);

    return elementsRef;
}
