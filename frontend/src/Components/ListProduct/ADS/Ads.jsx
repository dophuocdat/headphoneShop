import React from 'react'
import bg_join from '../../../image/bg-box.jpg'
import './Ads.css'

function Ads() {
    return (
        <div className="ads-container py-10">
            <div className="bg relative w-full h-[500px]">
                <img src={bg_join} alt="" className='h-full w-full rounded-lg object-cover' />
                <div className="box-join absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                bg-[rgba(220,38,38,0.5)] border-double border-4 border-red-300 h-[350px] w-[500px] max-lg:w-[400px] max-lg:h-[300px] max-md:h-[200px] flex items-center flex-col">
                    <div className="bigTitle w-2/3 py-5 flex items-center justify-center">
                        <span className='xl:text-[4rem] lg:text-[3rem] md:text-[2.4rem]  flex flex-wrap line leading-none 
                        text-white font-bold'>Open Box Savings</span>
                    </div>
                    <div className="detail w-4/5 pb-5" >
                        <span className='text-white font-medium'
                        >Save at least 15% on high-quality, complete set open boxes of your favorite brands</span>
                    </div>
                    <div className="btn-join-now pb-5">
                        <button className="btn rounded-sm border-blue-300 w-32 h-10 bg-slate-800
                        hover:ring-2 hover:ring-red-300 hover:scale-[.9]
                        font-bold text-white ">
                        Shop Now </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads