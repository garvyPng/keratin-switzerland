import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../../shared/hooks/useReveal';

export default function About() {
    const { t } = useTranslation();
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const { ref: leftRef, isVisible: leftVisible } = useReveal();
    const { ref: rightRef, isVisible: rightVisible } = useReveal();

    return (
        <section id='about' className='pt-10 md:pt-20 overflow-hidden'>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-6 md:mb-12'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 md:mb-6'>
                        {t('about.title')}
                    </h2>
                    <p className='w-full md:w-2/3 mx-auto text-sm md:text-base text-gray-600'>
                        {t('about.subtitle')}
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-6 items-center'>
                    <div
                        ref={leftRef}
                        className={`relative h-full rounded-xl overflow-hidden reveal reveal-left ${
                            leftVisible ? 'reveal-visible' : ''
                        }`}
                    >
                        <video
                            ref={videoRef}
                            className='w-full h-full object-cover'
                            src='/video/about.mp4'
                        />
                        <div className='absolute inset-0 bg-black/20' />
                        <button
                            onClick={togglePlay}
                            className='absolute inset-0 flex items-center justify-center'
                        >
                            <div className='w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition'>
                                {playing ? (
                                    <span className='text-black text-xl'>
                                        ❚❚
                                    </span>
                                ) : (
                                    <span className='text-black text-xl'>
                                        ▶
                                    </span>
                                )}
                            </div>
                        </button>
                    </div>

                    <div
                        ref={rightRef}
                        className={`flex flex-col justify-between h-full reveal reveal-right ${
                            rightVisible ? 'reveal-visible' : ''
                        }`}
                    >
                        <div>
                            <h3 className='text-2xl font-heading font-semibold mb-4'>
                                {t('about.textTitle')}
                            </h3>

                            <p className='text-gray-600 leading-relaxed'>
                                {t('about.text')}
                            </p>
                        </div>

                        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-2 md:mt-8'>
                            <p className='mt-6 md:text-lg font-light italic text-gray-500'>
                                {t('about.subtext')}
                            </p>
                            <a
                                href='https://www.instagram.com/keratin.switzerland'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 bg-[var(--color-orange)] text-[var(--color-black)] px-3 py-4 rounded-lg hover:scale-105 transition whitespace-nowrap leading-none h-fit'
                            >
                                {t('about.button')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
