import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Question = {
    question: string;
    answer: string;
};

export default function Questions() {
    const { t, i18n } = useTranslation();
    const [openId, setOpenId] = useState<number | null>(null);

    const questions = useMemo<Question[]>(
        () => {
            return t('questions.items', {
                returnObjects: true,
            }) as Question[];
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [i18n.language],
    );

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <section className='pt-10 md:pt-20'>
            <div className='mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 text-center md:text-left'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-10 md:mb-12'>
                        {t('questions.title')}
                    </h2>

                    <div className='space-y-4'>
                        {questions.map((question: Question, id: number) => {
                            const isOpen = openId === id;

                            return (
                                <div
                                    key={id}
                                    className='border border-gray-200 rounded-[10px] overflow-hidden'
                                >
                                    <button
                                        onClick={() => toggle(id)}
                                        className={`w-full flex justify-between items-center px-5 md:px-6 py-4 transition
                  ${
                      isOpen
                          ? 'bg-[var(--color-gray)] text-black'
                          : 'bg-[var(--color-black)] text-white'
                  }`}
                                    >
                                        <span className='font-heading font-semibold text-base md:text-lg text-left'>
                                            {question.question}
                                        </span>

                                        <span className='text-xl ml-4'>
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            isOpen
                                                ? 'grid-rows-[1fr] opacity-100 py-4'
                                                : 'grid-rows-[0fr] opacity-0 py-0'
                                        }`}
                                    >
                                        <div className='overflow-hidden px-5 md:px-6 text-sm md:text-base text-gray-600'>
                                            {question.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 aspect-square'>
                    <div className='relative col-span-2 md:col-span-2 rounded-xl overflow-hidden h-40 md:h-auto group'>
                        <img
                            loading='lazy'
                            src='/images/q1.png'
                            className='w-full h-full object-cover transition duration-500 group-hover:scale-110'
                            alt=''
                        />
                        <div className='absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20' />
                    </div>

                    <div className='relative col-span-1 rounded-xl overflow-hidden h-40 md:h-auto group'>
                        <img
                            loading='lazy'
                            src='/images/q2.png'
                            className='w-full h-full object-cover transition duration-500 group-hover:scale-110'
                            alt=''
                        />
                        <div className='absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20' />
                    </div>

                    <div className='relative col-span-1 rounded-xl overflow-hidden h-40 md:h-auto group'>
                        <img
                            loading='lazy'
                            src='/images/q3.png'
                            className='w-full h-full object-cover transition duration-500 group-hover:scale-110'
                            alt=''
                        />
                        <div className='absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20' />
                    </div>

                    <div className='relative col-span-2 md:col-span-2 rounded-xl overflow-hidden h-40 md:h-auto group'>
                        <img
                            loading='lazy'
                            src='/images/q4.png'
                            className='w-full h-full object-cover transition duration-500 group-hover:scale-110'
                            alt=''
                        />
                        <div className='absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20' />
                    </div>
                </div>
            </div>
        </section>
    );
}
