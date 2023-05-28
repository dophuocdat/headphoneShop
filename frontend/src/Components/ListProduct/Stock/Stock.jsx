import React, { useCallback, useEffect, useState } from 'react'
import { StockConfig } from './StockConfig';
import { motion } from "framer-motion";

function Stock() {
    const [hoveredItems, setHoveredItems] = useState({});

    const test = () => {
        StockConfig.map((item, index) => {
            console.log(item.id_feature)
        })
    }
    useEffect(() => {
        //test()
    })

    const onHover = useCallback(
        (index) => {
            setHoveredItems((prev) => ({
                ...prev, [index]: true,
            }))
            // console.log(index);
        }, []
    )
    const onMouseOver = useCallback(
        (index) => {
            setHoveredItems((prev) => ({
                ...prev, [index]: false
            }))
        }, []
    )

    return (
        <div className="featured-container">
            <div className='flex justify-center items-center py-5 font-bold text-lg gap-3'>
                <span className="line w-11 h-[.1rem] bg-black"></span>
                <h3 className='uppercase'>New In Stock</h3>
                <span className="line w-11 h-[.1rem] bg-black"></span>
            </div>
            <div className="product grid grid-rows-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-10 justify-items-center">
                {
                    StockConfig.map((item, index) => {
                        return (
                            <div className="box w-full flex flex-col justify-center items-center hover:rounded-md hover:border-slate-700 hover:shadow-lg" key={index}>
                                <motion.img
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 3,
                                        ease: 'easeInOut',

                                    }}
                                    src={hoveredItems[index] ? item.hoverImg : item.img} alt=""
                                    className='w-44'
                                    onMouseOver={() => onHover(index)}
                                    onMouseLeave={() => onMouseOver(index)} />
                                <div className="detail text-sm">
                                    <span>{item.title}</span>
                                </div>
                                <div className="price">
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Stock