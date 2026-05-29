import { useEffect, useRef, useState } from 'react';

type Feedback = {
    name: string;
    text: string;
};

export default function Carousel({ items }: { items: Feedback[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let frame: number;

        const step = () => {
            if (!isPaused && track) {
                track.scrollLeft += 0.8;

                if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
                    track.scrollLeft = 0;
                }
            }

            frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(frame);
    }, [isPaused]);

    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
        isDown.current = true;
        setIsPaused(true);

        const x = 'touches' in e ? e.touches[0].pageX : e.pageX;

        startX.current = x;
        scrollLeft.current = trackRef.current?.scrollLeft || 0;
    };

    const onMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDown.current || !trackRef.current) return;

        const x = 'touches' in e ? e.touches[0].pageX : e.pageX;

        const walk = (x - startX.current) * 1.2;

        trackRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const endDrag = () => {
        isDown.current = false;
        setIsPaused(false);
    };

    return (
        <div
            className='overflow-hidden relative'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                ref={trackRef}
                className='flex gap-6 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none'
                onMouseDown={startDrag}
                onMouseMove={onMove}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onTouchStart={startDrag}
                onTouchMove={onMove}
                onTouchEnd={endDrag}
            >
                {[...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className='bg-white text-black min-w-[320px] max-w-[320px] rounded-2xl p-6 shadow-md flex-shrink-0 transition hover:scale-[1.03]'
                    >
                        {/* stars */}
                        <div className='flex gap-1 mb-3'>
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className='w-4 h-4 text-yellow-400 fill-yellow-400'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73L18.18 21z' />
                                </svg>
                            ))}
                        </div>

                        <p className='font-semibold mb-2'>{item.name}</p>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
