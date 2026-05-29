import { useTranslation } from 'react-i18next';
import { useReveal } from '../../../shared/hooks/useReveal';

export default function Wellcome() {
    const { t } = useTranslation();

    const { ref: leftRef, isVisible: leftVisible } = useReveal();
    const { ref: rightRef, isVisible: rightVisible } = useReveal();
    return (
        <section className='bg-[var(--color-gray)] py-10 md:py-20 overflow-hidden'>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center'>
                    <div
                        ref={leftRef}
                        className={`grid grid-cols-4 md:grid-cols-4 lg:grid-cols-2 gap-4 reveal reveal-left ${
                            leftVisible ? 'reveal-visible' : ''
                        }`}
                    >
                        {[1, 2, 3, 4].map((_, i) => (
                            <div
                                key={i}
                                className='aspect-square rounded-[10px] overflow-hidden'
                            >
                                <img
                                    src={`/images/w${_}.webp`}
                                    className='w-full h-full object-cover'
                                    alt=''
                                />
                            </div>
                        ))}
                    </div>

                    <div
                        ref={rightRef}
                        className={`reveal reveal-right ${
                            rightVisible ? 'reveal-visible' : ''
                        }`}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight'>
                            {t('wellcome.title')}{' '}
                            <span className='block font-style text-right md:text-left md:ml-64 font-normal'>
                                Keratin Switzerland
                            </span>
                        </h2>

                        <p className='mt-2 md:mt-6 text-base md:text-lg text-gray-600'>
                            {t('wellcome.text')}
                        </p>

                        <p className='mt-2 md:mt-6 text-sm md:text-lg font-light italic text-gray-500'>
                            {t('wellcome.subtext')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
