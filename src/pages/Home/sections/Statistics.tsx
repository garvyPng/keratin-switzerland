import { useTranslation } from 'react-i18next';

type Statistic = {
    id: string;
    value: string;
    label: string;
};

export default function Statistics() {
    const { t } = useTranslation();
    const statistics = t('statistics.items', {
        returnObjects: true,
    }) as Statistic[];
    return (
        <section className=' bg-[var(--color-black)]'>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row'>
                    {statistics.map((item: Statistic, i: number) => {
                        const isLast = i === statistics.length - 1;

                        return (
                            <div
                                key={item.id}
                                className={`relative flex-1 text-center text-white py-3 md:py-10 ${
                                    !isLast
                                        ? `
                after:absolute after:bg-white/30
                
                after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:h-px after:w-full
                
                md:after:bottom-auto md:after:left-auto md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2
                md:after:h-16 md:after:w-px
                `
                                        : ''
                                }`}
                            >
                                <p className='text-4xl md:text-5xl font-heading font-bold mb-2'>
                                    {item.value}
                                </p>
                                <p className='text-sm md:text-base text-white/80'>
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
