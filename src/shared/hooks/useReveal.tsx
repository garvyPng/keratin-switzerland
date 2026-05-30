import { useEffect, useRef, useState } from 'react';

const observerMap = new WeakMap<Element, (v: boolean) => void>();

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const setter = observerMap.get(entry.target);
            if (setter && entry.isIntersecting) {
                setter(true);
                observer.unobserve(entry.target);
                observerMap.delete(entry.target);
            }
        });
    },
    { threshold: 0.2 },
);

export function useReveal() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        observerMap.set(el, setIsVisible);
        observer.observe(el);

        return () => {
            observer.unobserve(el);
            observerMap.delete(el);
        };
    }, []);

    return { ref, isVisible };
}
