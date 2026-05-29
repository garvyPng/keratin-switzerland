import { useTranslation } from 'react-i18next';
import { TreatmentCard } from '../../../shared/components/TreatmentCard';

type Treatment = {
    title: string;
    text: string;
};

export default function Treatments() {
    const { t } = useTranslation();

    const treatments = t('treatments.items', {
        returnObjects: true,
    }) as Treatment[];

    return (
        <section className='pt-10 md:pt-20 overflow-hidden'>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-6 md:mb-12'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 md:mb-6'>
                        {t('treatments.title')}
                    </h2>
                    <p className='w-full md:w-2/3 mx-auto text-sm md:text-base text-gray-600'>
                        {t('treatments.subtitle')}
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6'>
                    {treatments.map((item, i) => (
                        <TreatmentCard
                            key={i}
                            item={item}
                            index={i}
                            isLast={i === treatments.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
