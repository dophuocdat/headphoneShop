import React, { useEffect, useState, useCallback } from 'react'
import { RecommendationConfig } from "./RecommendationConfig"
import './Recommendations.css'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Recommendations() {

  const [hoveredItems, setHoveredItems] = useState({});

  const [currentIndex, setCurrentIndex] = useState(0);

  const onHover = useCallback(
    (index) => {
      setHoveredItems((prev) => ({
        ...prev, [index]: true,
      }))
      //console.log(index);
    }, []
  )
  const onMouseOver = useCallback(
    (index) => {
      setHoveredItems((prev) => ({
        ...prev, [index]: false
      }))
    }, []
  )
  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? RecommendationConfig.length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === RecommendationConfig.length - 1 ? 0 : currentIndex + 1);
  };



  return (
    <div className="recommend-container  relative  border-b-gray-400 border-b-2 pb-10" >
      <div className='flex justify-center items-center py-5 font-bold text-lg gap-3'>
        <span className="line w-11 h-[.1rem] bg-black"></span>
        <h3>STAFF RECOMMENDATIONS</h3>
        <span className="line w-11 h-[.1rem] bg-black"></span>
      </div>
      <div className='w-[max-content] flex justify-center items-center'>
        {
          [...RecommendationConfig.slice(currentIndex), ...RecommendationConfig.slice(0, currentIndex)].map((items, index) => {
            return (
              <div className={`box w-56 h-80 inline-block transition-transform duration-500  cursor-pointer
               hover:rounded-md hover:border-slate-700 hover:shadow-lg`}
                key={index}
                data-aos='fade-up'>
                <div className="h-2/3 relative">
                  <Link to={items.linkCart + items.id}>
                    <motion.img
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        duration: 2,
                        ease: 'easeInOut',

                      }}

                      src={hoveredItems[index] ? items.hoverImg : items.img} alt=""
                      className='h-full  transition-opacity'
                      onMouseOver={() => onHover(index)}
                      onMouseLeave={() => onMouseOver(index)}
                    />
                  </Link>
                </div>
                <div className="detail text-sm">
                  <span>{items.title}</span>

                </div>
                <div className="price">
                  <span>{items.price}</span>
                </div>

              </div>
            )
          })
        }

      </div>

      <button className='w-11 h-11 bg-slate-200 flex items-center justify-center rounded-lg
                    hover:bg-stone-600 absolute left-2 top-1/2 transform -translate-y-1/2'
        onClick={() => handlePrevious()}>
        <FcPrevious />
      </button>
      <button className='w-11 h-11 bg-slate-200 flex items-center justify-center rounded-lg
                    hover:bg-stone-600 absolute right-2 top-1/2 transform -translate-y-1/2'
        onClick={() => handleNext()}>
        <FcNext />
      </button>

    </div>
  )
}

export default Recommendations