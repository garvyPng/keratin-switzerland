import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

const items = [
    {
        id: 1,
        src: '/images/beforeAfter/1.webp',
        alt: 'Before and after hair treatment 1',
    },
    {
        id: 2,
        src: '/images/beforeAfter/2.webp',
        alt: 'Before and after hair treatment 2',
    },
    {
        id: 3,
        src: '/images/beforeAfter/3.webp',
        alt: 'Before and after hair treatment 3',
    },
    {
        id: 4,
        src: '/images/beforeAfter/4.webp',
        alt: 'Before and after hair treatment 4',
    },
    {
        id: 5,
        src: '/images/beforeAfter/5.webp',
        alt: 'Before and after hair treatment 5',
    },
    {
        id: 6,
        src: '/images/beforeAfter/6.webp',
        alt: 'Before and after hair treatment 6',
    },
];

export default function BeforeAfter() {
    const trackRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);

    const { t } = useTranslation();

    const [index, setIndex] = useState(-1);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        let frame: number;
        const speed = 0.5;

        const animate = () => {
            if (!isPaused.current) {
                el.scrollLeft += speed;

                const half = el.scrollWidth / 2;

                if (el.scrollLeft >= half) {
                    el.scrollLeft -= half;
                }
            }

            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <>
            <section className='pt-12 md:pt-20 overflow-hidden'>
                <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-8 md:mb-12'>
                        <h2 className='text-3xl md:text-4xl font-heading font-bold'>
                            {t('beforeAfter.title')}
                        </h2>

                        <p className='text-gray-600 text-sm md:text-base mt-2'>
                            {t('beforeAfter.subtitle')}
                        </p>
                    </div>

                    <div
                        ref={trackRef}
                        className='flex gap-4 overflow-x-auto scrollbar-hide select-none'
                        onMouseEnter={() => (isPaused.current = true)}
                        onMouseLeave={() => (isPaused.current = false)}
                        onTouchStart={() => (isPaused.current = true)}
                        onTouchEnd={() => (isPaused.current = false)}
                    >
                        {[...items, ...items].map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setIndex(i % items.length)}
                                className='
                                    flex-shrink-0
                                    w-[180px]
                                    sm:w-[220px]
                                    md:w-[260px]
                                    lg:w-[300px]
                                    rounded-xl
                                    overflow-hidden
                                    shadow-md
                                    group
                                    cursor-pointer
                                '
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading='lazy'
                                    className='
                                        w-full
                                        h-auto
                                        block
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    '
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={items.map((img) => ({
                    src: img.src,
                    alt: img.alt,
                }))}
                plugins={[Zoom]}
                zoom={{
                    maxZoomPixelRatio: 3,
                    scrollToZoom: true,
                }}
            />
        </>
    );
}
