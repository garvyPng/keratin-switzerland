import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ServiceItem } from '../../../shared/components/ServiceItem';

type ServiceOption = {
    length: string;
    price: string;
};

type Service = {
    id: string;
    title: string;
    options: ServiceOption[];
};

export default function Services() {
    const { t, i18n } = useTranslation();
    const [openId, setOpenId] = useState<string | null>('nanoplasty');

    const services = useMemo<Service[]>(() => {
        return t('services.items', {
            returnObjects: true,
        }) as Service[];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    const info = useMemo<string[]>(() => {
        return t('services.info', {
            returnObjects: true,
        }) as string[];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    const toggle = useCallback((id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    }, []);

    return (
        <section id='services' className='pt-10 md:pt-20'>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-10 md:mb-12'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-heading font-bold'>
                        {t('services.title')}
                    </h2>
                </div>

                <div className='flex flex-col md:flex-row gap-8 md:gap-9'>
                    <div className='w-full md:w-2/3 space-y-4'>
                        {services.map((service) => (
                            <ServiceItem
                                key={service.id}
                                service={service}
                                isOpen={openId === service.id}
                                onToggle={() => toggle(service.id)}
                            />
                        ))}

                        <div className='pt-2 space-y-1'>
                            {info.map((item, i) => (
                                <p
                                    key={i}
                                    className='italic text-gray-600 text-sm md:text-base'
                                >
                                    *{item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='w-full md:hidden'>
                        <img
                            className='w-full mx-auto md:max-w-none rounded-xl'
                            src='/images/hair_guide_h.webp'
                            alt='length guide'
                            loading='lazy'
                        />
                    </div>
                    <div className='w-full hidden md:block md:w-1/3'>
                        <img
                            className='w-full max-w-md mx-auto md:max-w-none rounded-xl'
                            src='/images/hair_guide_v.webp'
                            alt='length guide'
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
