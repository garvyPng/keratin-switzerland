import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../../shared/hooks/useReveal';

export default function About() {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);

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
                    {/* VIDEO BLOCK */}
                    <div
                        ref={leftRef}
                        className={`relative rounded-xl overflow-hidden reveal reveal-left ${
                            leftVisible ? 'reveal-visible' : ''
                        }`}
                    >
                        <img
                            src='/images/about_cover.png'
                            className='w-full max-h-52 md:h-auto lg:max-h-96 object-cover'
                            alt=''
                        />

                        <div className='absolute inset-0 bg-black/20' />

                        <button
                            onClick={() => setIsPlaying(true)}
                            className='absolute inset-0 flex items-center justify-center'
                        >
                            <div className='w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition'>
                                <span className='text-black text-xl'>▶</span>
                            </div>
                        </button>
                    </div>

                    {/* TEXT */}
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
                                className='inline-flex items-center gap-2 bg-[var(--color-orange)] text-[var(--color-black)] px-3 py-2 rounded-lg hover:scale-105 transition'
                            >
                                {t('about.button')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* VIDEO MODAL */}
            {isPlaying && (
                <div
                    className='fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]'
                    onClick={() => setIsPlaying(false)}
                >
                    <div
                        className='w-[90%] max-w-[420px] max-h-[85vh] relative mx-auto flex justify-center items-center'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            src='/images/about.mp4'
                            controls
                            autoPlay
                            className='w-full h-full object-contain rounded-xl bg-black'
                        />

                        <button
                            onClick={() => setIsPlaying(false)}
                            className='absolute top-2 right-2 text-white text-2xl bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition'
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
