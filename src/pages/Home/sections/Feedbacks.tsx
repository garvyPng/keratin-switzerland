import { useTranslation } from 'react-i18next';
import Carousel from '../../../shared/components/Carousel';

type Feedback = {
    name: string;
    text: string;
};

export default function Feedbacks() {
    const { t } = useTranslation();
    const feedbacks = t('feedbacks.items', {
        returnObjects: true,
    }) as Feedback[];

    return (
        <section className='bg-[var(--color-gray)] py-10 md:py-20'>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 md:mb-6'>
                        {t('feedbacks.title')}
                    </h2>
                    <p className='w-full md:w-2/3 mx-auto text-gray-600'>
                        {t('feedbacks.subtitle')}
                    </p>
                </div>
                <Carousel items={feedbacks} />
            </div>
        </section>
    );
}
