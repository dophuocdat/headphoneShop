import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaTrophy } from "react-icons/fa"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { BiImageAdd } from 'react-icons/bi'
import { RateDisplay } from './Rate'
import { comment } from './commentConfig'
import Tab from './Tab'
import TabContent from './TabContent'
import { contentProduct } from './contentProduct'
import axios from 'axios'
import { format } from 'date-fns';
import FromComfirm from './form'


function CartShow() {

  const { id } = useParams();

  const [countProduct, setCountProduct] = useState(1);

  const [enterImage, setImage] = useState(null);

  const [activeTab, setActiveTab] = useState(0);

  const [product, setProduct] = useState([])

  const [comfirm, setComfirm] = useState(null);

  const [idOrder, setIdOrder] = useState(null);

  const [message, setMessage] = useState(null);


  const idCustomer = localStorage.getItem('userId');
  const currentDate = format(new Date(), 'yyyy-MM-dd')

  const handleTabClick = (index) => {
    setActiveTab(index);
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  const loadProduct = async (id) => {
    console.log(id);
    await axios.get(`http://localhost:8080/products/product/${id}`)
      .then((res) => {
        //console.log(res.data);
        setProduct(res.data);
        // console.log(product);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    loadProduct(id);
    // console.log(product);
  }, [])

  useEffect(() => {
    //  console.log(product);
  }, [product]);


  const submitOrder = () => {
    setComfirm(true);
    const payload = {
      orderDate: currentDate,
    };
    axios.post(`http://localhost:8080/orders/${idCustomer}`, payload)
      .then((res) => {
        /*  console.log(payload);*/
        //console.log(res.data.orderId);
        setIdOrder(res.data.orderId);
      }).catch((err) => {
        console.log(err);
      })
  }


  const cancelOrder = () => {
    axios.delete(`http://localhost:8080/orders/${idOrder}`)
      .then((res) => {

      })
      .catch((err) => {
        console.log(err)
      })
    setComfirm(false);
  }

  const buyProduct = () => {
    console.log(product.productId);
    const payload = {
      product: product,
      quantity: countProduct,
      price: countProduct * product.price
    };
    console.log(payload);
    axios.post(`http://localhost:8080/orderDetails/${idOrder}/create`, payload)
      .then((res) => {
        console.log(res.data);
        setMessage('Order success');
        setComfirm(false);
      })
      .catch((err) => {
        setMessage('Order fail');
        console.log(err);
      })
  }


  return (
    <div className='cart-container  mx-80  max-xl:mx-40 max-lg:mx-20  py-10'>
      <div className="grid grid-cols-2  gap-4 max-md:grid-cols-1 max-md:place-items-center relative">
        <div className="show-product">
          <div className="show-img flex items-end justify-end  mr-20 max-md:mr-0 w-[300px]">
            {product.imageUrl?.length > 0 && (
              <img src={require(`../../image/${product.imageUrl[0]}`)} alt="" className='border-1 border-gray-300 drop-shadow-xl shadow-slate-500 w-[300px]' />
            )}
          </div>
        </div>
        <div className="grid grid-rows-4 grid-cols-1 text-start w-[300px] ">
          <div className="show-name border-t border-slate-900 flex items-center ">
            <h1 className='text-lg font-bold'>{product.name}</h1>
          </div>
          <div className="show-price border-t border-slate-900">
            <div className='flex items-center gap-3'>
              <h1 className='text-red-600 text-[2rem]'>{product.price}</h1>
              {
                product.oldPrice === 0 ? <span className='border-2 border-slate-500 w-2 '></span> : null
              }

              <h1 className={`${product.oldPrice !== 0 ? 'block' : 'hidden'} line-through text-slate-500 text-[1.5rem]`}>
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
                  if (countProduct > 1) {
                    setCountProduct(countProduct - 1);
                  }
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
             transition-colors duration-500 ease-linear'
              onClick={submitOrder}>Add to cart</button>
          </div>
        </div>


        {/* Comfirm */}
        {
          message && message.length > 0 ? <div className='absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center rounded-lg'>
            <div className='bg-white w-[400px] h-[200px] flex flex-col items-center justify-center gap-3 '>
              <h1 className='text-2xl font-bold'>{message}</h1>
              <button className='bg-blue-900 text-white w-[100px] h-[40px] rounded-lg hover:bg-blue-800 hover:scale-95
              transition-colors duration-500 ease-linea'
                onClick={() => {
                  setMessage('');
                }
                }>OK</button>
            </div>
          </div> : null

        }

        {
          comfirm === true ? <FromComfirm onCancel={cancelOrder} count={countProduct} name={product.name}
            price={product.price} buy={buyProduct}></FromComfirm> : null
        }


      </div>
      <div className='tabs-detail'>
        <div className='flex flex-row gap-1'>
          <Tab active={activeTab === 0} onClick={() => handleTabClick(0)} > PRODUCT DETAILS FROM THE BRAND </Tab>
          <Tab active={activeTab === 1} onClick={() => handleTabClick(1)} >PRODUCT REVIEWS</Tab>

        </div>
        {/* Hiện thị nội dung */}
        {activeTab === 0 && <TabContent>

          {
            contentProduct.map((item, index) => {
              return <div>
                <legend className='items-start flex font-bold py-2'>{item.Title}</legend>
                <ul className={`flex flex-col items-start list-disc list-inside`}>
                  {
                    item.list.map((listItemm) => {
                      return <li>{listItemm}</li>
                    })
                  }
                </ul>
              </div>
            })

          }


        </TabContent>}
        {activeTab === 1 && <TabContent >
          <legend className='items-start flex font-bold text-2xl py-2'>Review</legend>
        </TabContent>}
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
                    <RateDisplay key={product.id} initialRate={product.rate} />
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
              <textarea className='w-full  outline-gray-500 border-gray-300 border-2 resize-none pl-2' rows={7} placeholder='Write review here!'></textarea>
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
                  {
                    comment.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="name-reviewer flex justify-between">
                            <span className='text-lg font-semibold'>{item.name}</span>
                            <span>{item.dateComment}</span>
                          </div>
                          <div>
                            <img src={item.image} alt="" className='w-16 h-16 object-cover hover:scale-[2]' />
                          </div>
                          <div className="text-reviewer">
                            <p className='line-clamp-2'>
                              {item.title}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  }

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