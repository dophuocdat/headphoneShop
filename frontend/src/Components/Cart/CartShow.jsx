import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecommendationConfig } from "../ListProduct/Recommentdations/RecommendationConfig"
import { FaTrophy } from "react-icons/fa"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineStar, AiFillLike, AiOutlineLike } from "react-icons/ai"
import { AiFillStar } from 'react-icons/ai'
import { BiImageAdd } from 'react-icons/bi'
function CartShow() {

  const { id } = useParams();
  const product = RecommendationConfig.find(product => product.id === id);

  const [countProduct, setCountProduct] = useState(1);

  const [enterImage, setImage] = useState(null);

  const [liked, setLiked] = useState(true);
  const countLike = useState(0);

  const onLike = () => {
    setLiked(!liked)

  }



  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  /*  useEffect(() => {
     window.scrollTo(0, 0);
   }, []) */

  return (
    <div className='cart-container  mx-80  max-xl:mx-40 max-lg:mx-20  py-10'>
      <div className="grid grid-cols-2  gap-4 max-md:grid-cols-1 max-md:place-items-center">
        <div className="show-product">
          <div className="show-img flex items-end justify-end  mr-20 max-md:mr-0 w-[300px]">
            <img src={product.img} alt="" className='border-1 border-gray-300 drop-shadow-xl shadow-slate-500 w-[300px] ' />
          </div>
        </div>
        <div className="grid grid-rows-4 grid-cols-1 text-start w-[300px]">
          <div className="show-name border-t border-slate-900 flex items-center ">
            <h1 className='text-lg font-bold'>{product.title}</h1>
          </div>
          <div className="show-price border-t border-slate-900">
            <div className='flex items-center gap-3'>
              <h1 className='text-red-600 text-[2rem]'>{product.price}</h1>
              <span className='border-2 border-slate-500 w-2 '></span>
              <h1 className={`${product.oldPrice ? 'block' : 'hidden'} line-through text-slate-500 text-[1.5rem]`}>
                {product.oldPrice}</h1>

            </div>
            <div className="earn flex h-10 bg-red-100 rounded-lg justify-center items-center gap-2">
              <FaTrophy />
              <span>Earn up to <strong>16000</strong> points in rewards.
                <a href="/" className='text-red-600 underline'>Learn more</a></span>
            </div>
          </div>
          <div className="toCart flex  items-center gap-3">
            <div className='count-product flex py-8 gap-1'>
              <button className='outline outline-2 rounded-md w-10 h-10 flex items-center justify-center hover:outline-blue-600 hover:scale-105'
                onClick={() => {
                  setCountProduct(countProduct - 1)
                }}>
                <AiOutlineMinus />
              </button>
              <span className='outline outline-1 outline-lime-50 shadow-md w-10 h-10 flex items-center justify-center'>{countProduct}</span>
              <button className='outline outline-2 rounded-md w-10 h-10 flex items-center justify-center hover:outline-blue-600 hover:scale-105'
                onClick={() => {
                  setCountProduct(countProduct + 1)
                }}>
                <AiOutlinePlus />
              </button>
            </div>
            <button className='font-bold bg-blue-900  h-10 w-full rounded-lg text-slate-300
             hover:bg-blue-800 hover:text-white hover:scale-95
             transition-colors duration-500 ease-linear'>Add to cart</button>
          </div>

        </div>
      </div>
      <div className='tabs-detail'>
        <ul className='flex justify-start gap-3'>
          <li className={`bg-slate-400 px-2 h-10 flex items-center cursor-pointer  hover:bg-slate-600 text-white `}
          >PRODUCT DETAILS FROM THE BRAND</li>
          <li className={`bg-slate-400 px-2 h-10 flex items-center cursor-pointer  hover:bg-slate-600 text-white`}
          >PRODUCT REVIEWS</li>
        </ul>
        <div className='tab-1-detail py-5 hidden'>
          <div className='border border-gray-400 w-full'>
            <small >Any mention of "us," "we," "our," etc is by Noble, not Audio46</small>
          </div>
          <div className="flex items-start gap-8 flex-col pt-6">
            <h1 className='text-lg font-bold bg-gray-200 w-full text-start'>MOONDROP 1DD+2BA+2EST TRIBRID IEM WITH DETACHABLE CABLE</h1>
            <div className='flex flex-col items-start'>
              <h1 className='text-lg font-bold bg-gray-200 w-full text-start'>DIAPHRAGM DYNAMIC DRIVER </h1>
              <small className='text-start'>Diaphragm dynamic driver is also called electric electro-acoustic transducer, and its manufacturing principle is that it can produce displacement by energizing conductor in a constant magnetic field</small>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <h1 className='text-lg font-bold bg-gray-200 w-full text-start'>BALANCED ARMATURE DRIVER</h1>
              <small className='text-start'>Balanced armature driver is mainly assembled by vibrating ferromagnetism and coil parts fixed in the magnetic circuit.
                When the alternating current passes through the coil, an alternating magnetic field is generated,
                which causes the force of the armature or the iron diaphragm in the magnetic circuit to change and vibrate and produce sound.</small>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <h1 className='text-lg font-bold bg-gray-200 w-full text-start'>ELECTROSTATIC DRIVER</h1>
              <small className='text-start'>Electrostatic driver is also commonly referred to as the capacitive electroacoustic transducer.
                Its diaphragm is driven by the repulsive force of the electrostatic field to produce sound.</small>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <h1 className='text-lg font-bold bg-gray-200 w-full text-start'>SEEK FOR THE PERFECT COMPATIBILITY OF TRIBRID IEM</h1>
              <small className='text-start'>Since the application of electrostatic driver for in-ear earphones, products with electrostatic units have emerged one after another,
                but they have been criticized for reasons such as "unacceptable tone" or "difficult to drive".</small>
              <small className='text-start'>The development of Variations adopts our previous experience in the development of EST + BA hybrid and EST + DD hybrid earphones. With 3D printing,
                a precise physical filter structure and frequency divider circuit are manufactured to produce excellent amplitude-frequency response and phase-frequency response.
                Conveys the perfect harmony of the sound and imaging.</small>
            </div>
          </div>
        </div>
        <div className='tab-2-detail py-5 '>
          <div className="grid" >
            <div className='flex items-center'>
              <div className="rate-product flex items-center font-normal text-[2rem] flex-col">
                <div className='flex justify-center items-center'>
                  <h1 className='pr-3'> {product.rate} </h1>
                  {
                    [...Array(product.rate)].map((_, index) => {
                      return <AiFillStar key={index} className='text-yellow-400' />
                    })
                  }
                </div>
                <small className='text-sm'>Based on 4 Reviews</small>
              </div>
              {/*  <div className='text-2xl'>
                <AiOutlineStar />
              </div> */}


            </div>
            <div className='text-start pt-8'>
              <h4>Write a Review</h4>
              <textarea className='w-full  outline-gray-500 border-gray-300 border-2 resize-none pl-2' rows={10} placeholder='Write review here!'></textarea>
              <div className="enterImage flex flex-col gap-3">
                <div>
                  <input type="file" onChange={onImageChange}
                    name="uploadfile"
                    className='block w-full text-sm  text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                  file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'/>
                  <div>

                  </div>
                </div>
                <div className='relative w-28 h-28'>
                  <img src={enterImage} alt="" className='w-full h-full object-cover  border-2 border-gray-700' />
                  <span className={`${enterImage === null ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'hidden'}`}><BiImageAdd /></span>
                </div>
              </div>

              <div className="info-reviewer ">
                <div className='flex gap-5 py-5'>
                  <div className='flex gap-3'>
                    <span>Name</span>
                    <input type="text" placeholder='Name reviewer' className='border-2 border-gray-400 rounded-md pl-3 outline-slate-500' />
                  </div>

                  <div className='flex gap-3'>
                    <span>Email</span>
                    <input type="email" placeholder='Enter email' className='border-2 border-gray-400 rounded-md pl-3 outline-slate-500' />
                  </div>
                </div>
                <div className='flex justify-end py-5 pr-10'>
                  <button className='bg-slate-500 w-32 h-8 rounded-md text-white hover:bg-slate-600'>Submit</button>
                </div>
              </div>

              <div className="review flex flex-col gap-4 ">
                <div className='flex flex-col gap-3 border-b-2 shadow-md'>
                  <div className="name-reviewer flex justify-between">
                    <span className='text-lg font-semibold'>John</span>
                    <span>01/06/2023</span>
                  </div>
                  <div className="text-reviewer">
                    <p className='line-clamp-2'>
                      So the first thing I have to say is thanks to Tony! I came all the way to New York from Memphis and this guy took his time with me without ever pushing anything on me. He made me feel like I was already family in this store. He knew right away which IEM I needed before I did. I tried different ones but I walked out with the exact one he told me to get, the Thieaudio Oracle MK2. I had serious doubts about my choice but he made me feel so at ease. Assuring me that I could return the product if I didn’t love it. But he told, nobody returns the Oracle MK2. And so I got it and took it home with me back to Memphis where I did a couple of days of burn in and then this thing came to life. I can’t stop listening to it, so much that I decided to return my moondrop Kato’s back to Amazon. I can’t go back! So glad I came to Audio46 and met Tony!
                    </p>
                  </div>
                  <div className='flex'>
                    <button
                      className='text-2xl flex justify-end w-full'
                      onClick={onLike}

                    >{liked ? <AiFillLike /> : <AiOutlineLike />}</button>
                    <span>30</span>

                  </div>
                </div>
                <div className='flex flex-col gap-3 border-b-2 shadow-md'>
                  <div className="name-reviewer flex justify-between">
                    <span className='text-lg font-semibold'>Boon</span>
                    <span>01/06/2023</span>
                  </div>
                  <div className="text-reviewer">
                    <p className='line-clamp-2'>
                      So the first thing I have to say is thanks to Tony! I came all the way to New York from Memphis and this guy took his time with me without ever pushing anything on me. He made me feel like I was already family in this store. He knew right away which IEM I needed before I did. I tried different ones but I walked out with the exact one he told me to get, the Thieaudio Oracle MK2. I had serious doubts about my choice but he made me feel so at ease. Assuring me that I could return the product if I didn’t love it. But he told, nobody returns the Oracle MK2. And so I got it and took it home with me back to Memphis where I did a couple of days of burn in and then this thing came to life. I can’t stop listening to it, so much that I decided to return my moondrop Kato’s back to Amazon. I can’t go back! So glad I came to Audio46 and met Tony!
                    </p>
                  </div>
                  <div className='flex'>
                    <button
                      className='text-2xl flex justify-end w-full'
                      onClick={onLike}

                    >{liked ? <AiFillLike /> : <AiOutlineLike />}</button>
                    <span>10</span>

                  </div>
                </div>
                <div className='flex flex-col gap-3 border-b-2 shadow-md'>
                  <div className="name-reviewer flex justify-between">
                    <span className='text-lg font-semibold'>Maria</span>
                    <span>01/06/2023</span>
                  </div>
                  <div className="text-reviewer">
                    <p className='line-clamp-2'>
                      So the first thing I have to say is thanks to Tony! I came all the way to New York from Memphis and this guy took his time with me without ever pushing anything on me. He made me feel like I was already family in this store. He knew right away which IEM I needed before I did. I tried different ones but I walked out with the exact one he told me to get, the Thieaudio Oracle MK2. I had serious doubts about my choice but he made me feel so at ease. Assuring me that I could return the product if I didn’t love it. But he told, nobody returns the Oracle MK2. And so I got it and took it home with me back to Memphis where I did a couple of days of burn in and then this thing came to life. I can’t stop listening to it, so much that I decided to return my moondrop Kato’s back to Amazon. I can’t go back! So glad I came to Audio46 and met Tony!
                    </p>
                  </div>
                  <div className='flex'>
                    <button
                      className='text-2xl flex justify-end w-full'
                      onClick={onLike}

                    >{liked ? <AiFillLike /> : <AiOutlineLike />}</button>
                    <span>3</span>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <button className='bg-slate-600 w-32 h-7 rounded-sm text-white font-serif hover:bg-slate-400 hover:text-black'>View all</button>
                </div>
              </div>

            </div>
          </div>



        </div>
      </div>

    </div>
  )
}

export default CartShow