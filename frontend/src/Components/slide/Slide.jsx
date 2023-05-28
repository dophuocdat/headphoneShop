import React, { useEffect, useState } from 'react'
import { slideConfig } from './slideConfig';
import { FcPrevious, FcNext } from 'react-icons/fc'
function Slide() {
    /*     const test = () => {
            slideConfig.map((item) => {
                console.log(item.img);
            })
            }
            useEffect(() => {
                test();
            }, []); */
    const [currentSlide, setCurrentSlide] = useState(0);

    const [isIntervalRunning, setIsIntervalRunning] = useState(true);
    
    const handleNextSlide = () => {
        setCurrentSlide((prev) =>
            (prev + 1) % slideConfig.length)
        setIsIntervalRunning(false);
    }

    const handlePreviousSlide = () => {
        setCurrentSlide((prev) =>
            (prev - 1 + slideConfig.length) % slideConfig.length)
        setIsIntervalRunning(false);
    }

    useEffect(() => {
        let interval;

        if (isIntervalRunning) {
            interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slideConfig.length);
            }, 3000); // Thời gian chuyển đổi giữa các slide (đơn vị: milliseconds)
        }

        return () => {
            clearInterval(interval);
        };
    }, [isIntervalRunning]); // Chạy lại effect khi isIntervalRunning thay đổi giá trị (true -> false, false -> true)

    useEffect(() => {
        const restartInterval = () => {
            setIsIntervalRunning(true);
        }
        const interval = setInterval(restartInterval, 5000); // Thời gian bắt đầu tự động chuyển ảnh sau khi ngừng nhấn nút (đơn vị: milliseconds)

        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div className='slide-container pb-10'>
            <div className='relative'>
                <div className="flex justify-center items-center overflow-hidden w-full">
                    <div className="h-full">
                        <a href={slideConfig[currentSlide].link} className='cursor-grab'>
                            <img src={slideConfig[currentSlide].img} alt="" className='h-full w-full object-cover' />
                        </a>
                    </div>
                </div>
                <div className='absolute flex justify-between top-[50%] text-white w-screen px-10'>
                    <button onClick={handlePreviousSlide} className='w-11 h-11 bg-slate-500 flex items-center justify-center rounded-lg
                    hover:bg-stone-600'>
                        <FcPrevious />
                    </button>
                    <button onClick={handleNextSlide} className='w-11 h-11 bg-slate-500 flex items-center justify-center rounded-lg
                    hover:bg-stone-600'>
                        <FcNext />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slide