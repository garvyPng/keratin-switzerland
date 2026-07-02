import { useTranslation } from 'react-i18next';

const gallery = [
    { id: 1, src: '/images/portfolio/1.webp', alt: 'Hair 1' },
    { id: 2, src: '/images/portfolio/2.webp', alt: 'Hair 2' },
    { id: 3, src: '/images/portfolio/3.webp', alt: 'Hair 3' },
    { id: 4, src: '/images/portfolio/4.webp', alt: 'Hair 4' },
    { id: 5, src: '/images/portfolio/5.webp', alt: 'Hair 5' },
    { id: 6, src: '/images/portfolio/6.webp', alt: 'Hair 6' },
    { id: 7, src: '/images/portfolio/7.webp', alt: 'Hair 7' },
    { id: 8, src: '/images/portfolio/8.webp', alt: 'Hair 8' },
    { id: 9, src: '/images/portfolio/9.webp', alt: 'Hair 9' },
    { id: 10, src: '/images/portfolio/10.webp', alt: 'Hair 10' },
];

export default function Portfolio() {
    const { t } = useTranslation();

    return (
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
                    {gallery.map((item, index) => {
                        const isFeatured = index % 7 === 0;

                        return (
                            <div
                                key={item.id}
                                className={`
        relative overflow-hidden rounded-lg aspect-square group transform-gpu
        ${isFeatured ? 'col-span-2 row-span-2' : ''} 
        ${index === gallery.length - 1 ? 'hidden md:block' : ''}
    `}
                            >
                                <img
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] will-change-transform'
                                    src={item.src}
                                    alt={item.alt}
                                    loading='lazy'
                                    decoding='async'
                                />

                                <div className='absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
