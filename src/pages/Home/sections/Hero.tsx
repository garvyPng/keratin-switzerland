import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type InfoItem = {
    title: string;
    items: string[];
};

export default function Hero() {
    const { t } = useTranslation();
    const info = t('info', { returnObjects: true }) as InfoItem[];

    const trackRef = useRef<HTMLDivElement>(null);
    // const [isPaused, setIsPaused] = useState(false);
    const isPaused = useRef(false);

    const images = [
        '/images/portfolio/1.webp',
        '/images/portfolio/2.webp',
        '/images/portfolio/3.webp',
        '/images/portfolio/4.webp',
        '/images/portfolio/5.webp',
    ];

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        let frame: number;
        const speed = 0.6;

        const animate = () => {
            if (!isPaused.current && window.innerWidth < 768) {
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
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        let frame: number;
        const speed = 0.6;

        const animate = () => {
            if (!isPaused.current && window.innerWidth < 768) {
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
        <section
            id='home'
            className='relative md:h-screen flex items-center justify-center overflow-hidden pt-32 pb-10 md:p-0'
        >
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: 'url(/images/hero.webp)' }}
            />
            <div
                className='absolute inset-0'
                style={{
                    background:
                        'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 100%)',
                }}
            />

            <div className='relative flex flex-col md:flex-row mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 gap-6 justify-between text-white'>
                <div className=' space-y-12 md:w-[60%]'>
                    <div className=' font-heading'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight'>
                            {t('hero.title')}
                        </h1>
                        <p className='text-sm md:text-base w-[90%] my-7'>
                            {t('hero.subtitle')}
                        </p>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
                            <button
                                onClick={() => scrollTo('services')}
                                className='py-2 px-6 bg-[var(--color-black)] rounded-[6px] transition duration-300 hover:scale-105 hover:opacity-90'
                            >
                                {t('hero.servicesButton')}
                            </button>

                            <div className='flex justify-center items-center space-x-2 text-[var(--color-black)] py-2 px-6 bg-[var(--color-orange)] rounded-[6px] transition duration-300 hover:scale-105 hover:brightness-110 cursor-pointer'>
                                <a
                                    href='https://buchung.treatwell.ch/ort/keratin-switzerland/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&utm_source=ig&fbclid=PAb21jcASGXZZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafg7AfR51GDLfsdnoKpFnGOu9yxaOxFN_NL4fSulxvyV2PHLyVpxR9QDhBnpQ_aem_VxmJMraycSlvoTTlrGuJSQ'
                                    className='whitespace-nowrap'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {t('hero.bookButton')}
                                </a>

                                <img
                                    className='w-6 md:w-auto transition-transform duration-300 group-hover:translate-x-1'
                                    src='/icons/arrow-right.svg'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        ref={trackRef}
                        className='flex gap-4 overflow-x-scroll scrollbar-hide md:hidden cursor-grab active:cursor-grabbing will-change-transform'
                        onMouseEnter={() => (isPaused.current = true)}
                        onMouseLeave={() => (isPaused.current = false)}
                        onTouchStart={() => (isPaused.current = true)}
                        onTouchEnd={() => (isPaused.current = false)}
                    >
                        {[...images, ...images].map((img, i) => (
                            <div
                                key={i}
                                className='h-36 rounded-xl aspect-square overflow-hidden flex-shrink-0 transition duration-300'
                            >
                                <img
                                    src={img}
                                    className='w-full h-full object-cover'
                                    alt=''
                                />
                            </div>
                        ))}
                    </div>
                    <div className='md:absolute md:-bottom-32 lg:-bottom-36 flex flex-col items-center md:flex-row justify-between gap-6 md:gap-16 z-40'>
                        {info.map((block, i) => (
                            <div
                                key={i}
                                className='flex flex-col items-center max-w-48 lg:max-w-56 font-heading text-xs lg:text-sm font-semibold'
                            >
                                <h3 className='font-heading font-bold mb-2 md:mb-4'>
                                    {block.title}
                                </h3>

                                {block.items.map((item, j) => (
                                    <p key={j} className='max-w-60 text-center'>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='hidden md:block md:relative md:w-[40%] h-32 md:h-[300px]'>
                    <div className='md:absolute md:top-5 md:left-12 md:w-64 lg:w-80 rounded-[10px] aspect-square overflow-hidden z-20 animate-[floatSlow_6s_ease-in-out_infinite]'>
                        <img
                            src='/images/portfolio/1.webp'
                            className='w-full h-full object-cover hover:scale-105 transition'
                        />
                    </div>

                    <div className='md:absolute md:-top-10 lg:-top-20 md:left-20 md:w-16 lg:w-20 rounded-[10px] aspect-square overflow-hidden z-10 animate-[floatFast_4s_ease-in-out_infinite]'>
                        <img
                            src='/images/portfolio/6.webp'
                            className='w-full h-full object-cover hover:scale-105 transition'
                        />
                    </div>

                    <div className='md:absolute md:top-36 md:-left-10 lg:-left-16 md:w-20 lg:w-24 rounded-[10px] aspect-square overflow-hidden z-10 animate-[floatMedium_5s_ease-in-out_infinite]'>
                        <img
                            src='/images/portfolio/3.webp'
                            className='w-full h-full object-cover hover:scale-105 transition'
                        />
                    </div>

                    <div className='md:absolute md:-bottom-20 lg:-bottom-36 md:-right-6 md:w-44 lg:w-52 rounded-[10px] aspect-square overflow-hidden z-10 animate-[floatSlow_7s_ease-in-out_infinite]'>
                        <img
                            src='/images/portfolio/4.webp'
                            className='w-full h-full object-cover hover:scale-105 transition'
                        />
                    </div>

                    <div className='md:absolute md:-top-10 lg:-top-24 md:-right-16 md:w-52 lg:w-64 rounded-[10px] aspect-square overflow-hidden z-10 animate-[floatMedium_6s_ease-in-out_infinite]'>
                        <img
                            src='/images/portfolio/5.webp'
                            className='w-full h-full object-cover hover:scale-105 transition'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
