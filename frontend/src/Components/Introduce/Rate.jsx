import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { rateConfig } from './RateConfig'


function Rate() {
    const [displayedRatings, setDisplayedRatings] = useState([]);

    useEffect(() => {
        //Lấy 5 đối tượng đầu
        setDisplayedRatings(rateConfig.slice(0, 5))

        //Lấy 5 đối tượng ngẫu nhiên sau mỗi 3s
        const interval = setInterval(() => {
            const startIndex = Math.floor(Math.random() * (rateConfig.length - 5));
            setDisplayedRatings(rateConfig.slice(startIndex, startIndex + 5));
        }, 3000)
        return () => clearInterval(interval) //clear interval khi component unmount
    }, []);


    return (
        <div className="rate-container pt-10 pb-20 border-b-gray-400 border-b-2">
            <div className="slide-rate grid grid-rows-1 grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1" >
                {
                    displayedRatings.map((items, index) => {
                        return (
                            <div key={index}>
                                <div className='start flex justify-center items-center'>
                                    {[...Array(items.star)].map((_, starIndex) => (
                                        <AiFillStar key={starIndex} className="text-amber-400 text-2xl" />
                                    ))}
                                </div>
                                <h2 className='text-lg font-semibold '>{items.name}</h2>
                                <div className="date-comment text-xs">
                                    {items.date}
                                </div>
                                <span className='text-sm line-clamp-2'>{items.comment}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rate