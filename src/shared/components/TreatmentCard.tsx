import React from 'react';
import { useReveal } from '../hooks/useReveal';

type Treatment = {
    title: string;
    text: string;
};

export const TreatmentCard = React.memo(function TreatmentCard({
    item,
    isLast,
    index,
}: {
    item: Treatment;
    isLast: boolean;
    index: number;
}) {
    const { ref, isVisible } = useReveal();

    const direction = index % 2 === 0 ? '-translate-x-6' : 'translate-x-6';

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`
                p-6 rounded-xl shadow-md
                transform-gpu will-change-transform
                transition-all duration-700 ease-out
                hover:scale-[1.03]

                ${isLast ? 'md:col-span-2' : ''}

                ${
                    isVisible
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${direction}`
                }
            `}
        >
            <h3 className='font-heading text-lg font-semibold'>{item.title}</h3>
            <p className='text-sm mt-2 text-gray-600'>{item.text}</p>
        </div>
    );
});
