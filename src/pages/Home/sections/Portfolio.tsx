import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

const gallery = [
    {
        id: 1,
        src: '/images/portfolio/1.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 2,
        src: '/images/portfolio/2.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 3,
        src: '/images/portfolio/3.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 4,
        src: '/images/portfolio/4.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 5,
        src: '/images/portfolio/5.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 6,
        src: '/images/portfolio/6.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 7,
        src: '/images/portfolio/7.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 8,
        src: '/images/portfolio/8.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 9,
        src: '/images/portfolio/9.webp',
        alt: 'Keratin treatment in Zurich',
    },
    {
        id: 10,
        src: '/images/portfolio/10.webp',
        alt: 'Keratin treatment in Zurich',
    },
];

export default function Portfolio() {
    const { t } = useTranslation();

    const [index, setIndex] = useState(-1);

    return (
        <>
            <section className='pt-10 md:pt-20'>
                <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-10 md:mb-12'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6'>
                            {t('portfolio.title')}
                        </h2>

                        <p className='w-full md:w-2/3 mx-auto text-gray-600 text-sm md:text-base'>
                            {t('portfolio.subtitle')}
                        </p>
                    </div>

                    <div className='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5'>
                        {gallery.map((item, i) => {
                            const isFeatured = i % 7 === 0;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setIndex(i)}
                                    className={`
                                        relative overflow-hidden rounded-lg
                                        aspect-square group cursor-pointer
                                        ${isFeatured ? 'col-span-2 row-span-2' : ''}
                                        ${i === gallery.length - 1 ? 'hidden md:block' : ''}
                                    `}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading='lazy'
                                        decoding='async'
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                    />

                                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition' />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={gallery.map((img) => ({
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
