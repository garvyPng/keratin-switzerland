import { useTranslation } from 'react-i18next';

export default function ParallaxSection() {
    const { t } = useTranslation();

    return (
        <section
            className='h-72 md:h-[350px] bg-fixed bg-cover bg-center flex items-center justify-center mt-10 mb-6 md:mt-20 md:mb-14 relative'
            style={{ backgroundImage: 'url(/images/hero.jpg)' }}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40' />

            <div className='relative z-10 text-center text-white px-4'>
                <h2 className='text-3xl md:text-5xl font-heading font-bold'>
                    {t('parallax.title')}
                </h2>

                <p className='my-4 text-sm md:text-lg text-white/80'>
                    {t('parallax.subtitle')}
                </p>

                <a
                    href='https://buchung.treatwell.ch/ort/keratin-switzerland/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&utm_source=ig&fbclid=PAb21jcASGXZZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafg7AfR51GDLfsdnoKpFnGOu9yxaOxFN_NL4fSulxvyV2PHLyVpxR9QDhBnpQ_aem_VxmJMraycSlvoTTlrGuJSQ'
                    className='mt-6 px-6 py-2 bg-[var(--color-orange)] text-[var(--color-black)] rounded-lg hover:scale-105 transition'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {t('parallax.button')}
                </a>
            </div>
        </section>
    );
}
