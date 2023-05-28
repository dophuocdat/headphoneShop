import React from 'react'
import { FaPhoneSquareAlt, FaThumbtack } from 'react-icons/fa'
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillGoogleCircle, AiFillLinkedin, AiFillRedditCircle, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineMail, AiOutlineYoutube } from 'react-icons/ai'
import card from '../../image/card.png'
import img1 from '../../image/rateRv.png'
import img2 from '../../image/rateWeb.gif'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="line h-16 bg-slate-700 flex gap-5 justify-center items-center">
                <FaPhoneSquareAlt className='text-[2.5rem] text-white' />
                <span className='font-semibold text-[1.5rem] text-white underline decoration-2 underline-offset-[5px]' >+84789444093</span>
            </div>
            <div className="contact grid grid-rows-1 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 font-normal px-10  py-10  gap-6 ">
                <div className="detail">
                    <ul className='flex gap-6 flex-col justify-center text-start'>
                        <li className='text-slate-600 text-sm flex gap-3'>
                            <FaThumbtack className='text-[1.3rem] ' />
                            <strong className='text-sm text-start leading-6'>
                                Audio46 Headphones,29 West 46th Street,Between 5th and 6th Avenue,New York, NY, 10036
                                <br />
                                <a href="/" className='underline decoration-red-400 underline-offset-[5px] text-red-600'>Get directions to our store</a>
                                <p>
                                    Store is OPEN for demos -
                                    <a href="/" className='underline decoration-red-400 underline-offset-[5px] text-red-600'>Learn more</a>
                                </p>
                                <br />
                                <p>Monday - Friday : 9AM - 7PM </p>
                                <p>Saturday : 10AM - 6PM</p>
                                <p>Sunday : 11AM - 6PM</p>
                                <p>All times Eastern</p>
                            </strong>
                        </li>
                        <li className='text-slate-600 text-sm flex gap-3' >
                            <BsFillTelephoneFill className='text-[1.3rem]' />
                            <a href="/phone/call" className='underline decoration-red-400 underline-offset-[5px] text-red-600 font-medium'>(212) 354 - 6424</a>
                        </li>
                        <li className='text-slate-600 text-sm flex gap-3' >
                            <AiOutlineMail className='text-[1.3rem]' />
                            <a href="/phone/call" className='underline decoration-red-400 underline-offset-[5px] text-red-600 font-medium'>
                                Email us / En Español
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="card flex flex-col gap-5">
                    <div className='font-semibold text-start text-[.8rem]'>
                        OUR STORE IS OPEN FOR PICKUP AND DEMO. ORDERS MADE AFTER 5 PM SHIPS THE NEXT DAY.
                        ORDER MADE ON FRIDAY AFTER 5 PM EASTERN TIME WILL BE PROCESSED THE FOLLOWING MONDAY.
                    </div>
                    <div>
                        <img src={card} alt="" />
                        <div className='flex'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="menu-footer pl-4 max-md:hidden">
                    <ul className='flex flex-col items-start justify-start text-sm gap-1'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>In-Store Demo</li>
                        <li>Store Closed Days Advisory</li>
                        <li>Warranty Info</li>
                        <li>Jobs and Careers</li>
                        <li>Affiliate with us!</li>
                        <li>Corporate Sales</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="another max-md:hidden">
                    <ul className='flex flex-col items-start justify-start text-sm gap-1'>
                        <li>Price Match Guarantee</li>
                        <li>Payments & Financing</li>
                        <li>Open Box Policy</li>
                        <li>Shipping/Taxes Policy</li>
                        <li>Returns Policy</li>
                        <li>Return/Exchange Form</li>
                        <li>Restriction Policy</li>
                        <li>Gift Card Policy</li>
                        <li>TOS & Privacy Policy</li>
                        <li>Do Not Sell My Personal Information</li>
                        <li>Accessibility Statemen</li>
                    </ul>
                </div>
            </div>
            <div className='border-dotted border-2 border-slate-800 mx-32 '>

            </div>

            <div className="list-social flex px-10 py-10 gap-1 text-[2.2rem]">
                <a href='/'><BsFacebook /></a>
                <a href='/'><AiFillTwitterCircle /></a>
                <a href='/'><AiOutlineInstagram /></a>
                <a href='/'><AiOutlineYoutube /></a>
                <a href='/'><AiFillLinkedin /></a>
                <a href='/'><AiFillGoogleCircle /></a>
                <a href='/'><AiFillRedditCircle /></a>
            </div>

        </div>
    )
}

export default Footer