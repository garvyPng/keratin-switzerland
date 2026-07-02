import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n/config';
import { useMemo } from 'react';

type InfoItem = {
    title: string;
    items: string[];
};

export default function Info() {
    const { t } = useTranslation();
    const info = useMemo<InfoItem[]>(
        () => {
            return t('info', { returnObjects: true }) as InfoItem[];
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [i18n.language],
    );

    return (
        <section id='contact' className='pt-10 md:pt-20 '>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between gap-6'>
                <div className='w-full'>
                    <iframe
                        className='w-full h-[400px] md:h-[550px] rounded-xl grayscale'
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.0587506623933!2d8.520444593410653!3d47.39128656186501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a4172826da3%3A0x8c77d9ef6b7391a1!2sHardturmstrasse%2022%2C%208005%20Z%C3%BCrich!5e0!3m2!1s${i18n.language}!2sch!4v1780055347346!5m2!1s${i18n.language}!2sch`}
                        loading='lazy'
                    />
                </div>
                <div className='flex flex-col justify-between md:w-64 gap-6 md:space-y-12'>
                    {info.map((block, i) => (
                        <div
                            key={i}
                            className='flex flex-col items-center font-heading text-sm font-semibold'
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
        </section>
    );
}
