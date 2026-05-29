import { useReveal } from '../hooks/useReveal';
type ServiceOption = {
    length: string;
    price: string;
};

type Service = {
    id: string;
    title: string;
    options: ServiceOption[];
};

export function ServiceItem({
    service,
    isOpen,
    onToggle,
}: {
    service: Service;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const { ref, isVisible } = useReveal();

    return (
        <div
            ref={ref}
            className={`
                border border-gray-200 rounded-[10px] overflow-hidden
                transition-all duration-700 ease-out
                ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                }
            `}
        >
            <button
                onClick={onToggle}
                className={`w-full flex justify-between items-center px-4 md:px-6 py-3 md:py-4 transition
                    ${
                        isOpen
                            ? 'bg-[var(--color-gray)] text-black'
                            : 'bg-[var(--color-black)] text-white'
                    }`}
            >
                <span className='font-heading font-semibold text-base md:text-lg text-left'>
                    {service.title}
                </span>

                <span className='text-lg md:text-xl ml-4'>
                    {isOpen ? '−' : '+'}
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'grid-rows-[1fr] opacity-100 py-3 md:py-4'
                        : 'grid-rows-[0fr] opacity-0 py-0'
                }`}
            >
                <div className='overflow-hidden px-4 md:px-6'>
                    <div className='space-y-2'>
                        {service.options.map((opt, i) => (
                            <div
                                key={i}
                                className='flex justify-between text-sm md:text-base border-b border-gray-100 py-2 gap-4'
                            >
                                <span>{opt.length}</span>
                                <span className='font-medium whitespace-nowrap'>
                                    {opt.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
