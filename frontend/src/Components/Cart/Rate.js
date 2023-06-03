import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const RateDisplay = ({ initialRate }) => {
  const [rate, setRate] = useState(initialRate);

  const renderStarts = () => {
    const start = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        start.push(<AiFillStar
          key={i}
          onClick={() => setRate(i + 1)} className='text-yellow-400'/>)
      } else {
        start.push(<AiOutlineStar className='text-slate-400'
          key={i}
          onClick={() => setRate(i + 1)}
        />)
      }
    }
    return start;
  }
  return (
    <div className='flex flex-row'>
      {renderStarts()}
    </div>
  )

}
