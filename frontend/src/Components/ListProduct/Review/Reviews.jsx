import React from 'react'
import rv1 from '../../../image/rv1.jpg'
import rv2 from '../../../image/rv2.jpg'
import { motion } from 'framer-motion'

function Reviews() {
    return (
        <div className='review-container py-10'>
            <div className='flex flex-col justify-center items-center  py-5'>
                <div className='flex justify-center items-center py-1 gap-3'>
                    <span className="line w-11 h-[.1rem] bg-black"></span>
                    <h3 className='font-bold text-lg '>STAFF RECOMMENDATIONS</h3>
                    <span className="line w-11 h-[.1rem] bg-black"></span>
                </div>
                <small>Need a little help deciding on a pair of headphones? Maybe we can help.</small>
            </div>

            <div className="review-product grid lg:grid-cols-2 grid-rows-1 px-20 grid-cols-1 gap-10">
                <div className="item flex items-center ">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            duration: 1,
                        }}

                        src={rv1} alt="" className='rounded-lg shadow-lg max-xl:w-40 max-lg:w-full max-md:w-32' />
                    <motion.div
                        initial={{ x: "100%" }}
                        whileInView={{ x: "0" }}
                        transition={{
                            type: 'spring',
                            duration: 1,
                        }}
                        className="description px-4 flex flex-col text-start gap-2">
                        <div className="name bg-slate-200 max-md:text-[.67rem]">
                            FIR AUDIO XENON 6 REVIEW
                        </div>
                        <small className='date '>May 23, 2023</small>
                        <div className="detail line-clamp-2 text-[.67rem] max-md:hidden">Fir Audio is one of the few exclusively high-end IEM brands and so far, I’ve been a fan of what they have to offer. I recently checked out the Radon 6, which proved itself as a top tier IEM. The next step up, and the most prestigious model from the line is the Xenon 6, which goes for the price of $3,899. Is it really the best they have? </div>
                        <a href="/blog/more/id" className='text-red-400 underline'>Read more</a>
                    </motion.div>
                </div>
                <div className="item flex items-center ">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            duration: 0.5,
                        }}
                        src={rv2} alt="" className='rounded-lg shadow-lg max-xl:w-40 max-lg:w-full max-md:w-32' />
                    <motion.div
                        initial={{ x: "100%" }}
                        whileInView={{ x: "0" }}
                        transition={{
                            type: 'spring',
                            duration: 1,
                        }}
                        className="description px-4 flex flex-col text-start gap-2">
                        <div className="name bg-slate-200 max-md:text-[.67rem]">
                            DEKONI AUDIO X HIFIMAN COBALT REVIEW
                        </div>
                        <small className='date '>May 23, 2023</small>
                        <div className="detail line-clamp-2 text-[.67rem] max-md:hidden">
                            I’m a big fan of Dekoni ear pads, but I didn’t even know the brand made headphones. So, I was pleasantly surprised to discover that Hifiman had teamed up with Dekoni to produce what I’m hoping will be an impressive headphone. What kind of sound signature does the Cobalt present, and how does it perform?
                        </div>
                        <a href="/blog/more/id" className='text-red-400 underline'>Read more</a>
                    </motion.div>
                </div>

            </div>
            <div className="view-all py-10">
                <button className='bg-slate-300 w-32 h-11 outline  outline-slate-700
                 hover:bg-slate-700 hover:text-white
                 font-bold'
                  >
                    View All
                </button>
            </div>
        </div>
    )
}

export default Reviews