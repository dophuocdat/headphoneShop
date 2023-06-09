import React, { useState } from 'react'
import './Navbar.css'
import { Policies, mainu, shopByPice } from '../menu/menu'
import { menuStyle } from '../menu/menuStyle'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Navbar() {

    const [show, setShow] = useState(false)

    const showMenu = () => {
        setShow(!show)
    }


    return (
        <header className='flex justify-between px-3 h-14 bg-[#2b2d42] text-white align-middle items-center'>
            <button className='lg:hidden block text-2xl'
                onClick={() => showMenu()}>
                <FaBars />
            </button>
            <div className="logo flex-1">
                <Link to={"/"} className='uppercase font-semibold tracking-widest'>HeadPhone</Link>
            </div>
            <nav className={
                `menu lg:block shrink-0 w-4/5 max-lg:absolute max-lg:top-14 max-lg:py-10  max-lg:w-[350px] max-lg:bg-slate-600 max-lg:z-50
                ${show? 'max-lg:left-0' : 'max-lg:-left-full'}`
            } >
                <ul className='gap-1 flex h-full items-center max-lg:flex-col justify-center '>
                    <li className='w-full h-10'>BLOWOUT SALE
                        <ul className="submenu hidden w-48 rounded-b max-lg:w-[300px] text-black border-double border-2 border-gray-300 shadow-lg">
                            <li className='border-b-[1px] md:normal-case uppercase' > Clearance sale</li>
                            <li className='border-b-[1px] md:normal-case uppercase'>Weekly specials</li>
                            <li className='border-b-[1px] md:normal-case uppercase'>Save big o sealed boxes</li>
                            <li className='border-b-[1px] md:normal-case uppercase'>Open box specials</li>
                            <li className=''>B-Stock specials</li>
                        </ul>
                    </li>
                    <li className='w-full h-10 max-lg:relative'>SHOP BY BRANS
                        <ul className="submenu hidden xl:w-[1200px]  max-lg:w-[500px] rounded-b text-black border-double border-2 border-gray-300 shadow-lg
                       ">
                            {
                                mainu.map(
                                    (item) => {
                                        return (
                                            <li className='border-b-[1px] md:normal-case uppercase' key={item}>{item}</li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </li>
                    <li className='w-full h-10'>SHOP BY PRICE
                        <ul className="submenu hidden xl:w-[1300px]  lg:w-[1100px] max-lg:w-[500px]  rounded-b text-black border-double border-2 border-gray-300 shadow-lg gap-4">
                            {
                                shopByPice.map(
                                    (item) => {
                                        return (
                                            <div className="box shadow-sm px-4">
                                                <h1 className='border-b-[1px] border-t-[1px]  uppercase ' key={item} >{item.title}</h1>
                                                {item.menu.map((a) => {
                                                    return (
                                                        <li className='md:normal-case uppercase text-start text-sm hover:ml-1 max-lg:line-clamp-1' >{a}</li>
                                                    )
                                                })}
                                            </div>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </li>
                    <li className='w-full h-10'>SHOP BY STYLE
                        <ul className="submenu hidden xl:w-[1300px]  max-lg:w-[600px] lg:left-[-100px]  rounded-b text-black border-double border-2 border-gray-300 shadow-lg gap-5">
                            {
                                menuStyle.map(
                                    (item) => {
                                        return (
                                            <div className="box shadow-sm px-4" key={item.title} >
                                                <h1 className='border-b-[1px] border-t-[1px]  uppercase text-base' >{item.title}</h1>
                                                <div className="flex flex-col gap-1 ">
                                                    {item.menu.map((a) => {
                                                        return (
                                                            <li className='md:normal-case uppercase text-start  hover:ml-1 text-xs' >{a}</li>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </ul>
                    </li>

                    <li className='w-full h-10'>REWARDS</li>
                    <li className='w-full h-10'>IN-STORE DEMO</li>
                    <li className='w-full h-10'>POLICIES
                        <ul className="submenu hidden w-[600px] max-lg:w-[500px] rounded-b text-black border-double border-2 border-gray-300 shadow-lg gap-5
                          ">
                            {
                                Policies.map(
                                    (item) => {
                                        return (
                                            <li className='md:normal-case uppercase text-start  hover:ml-1 text-xs' >{item}</li>
                                        )
                                    })
                            }
                        </ul>
                    </li>
                    <li className='w-full h-10'>AFFILIATE</li>
                    <li className='w-full h-10'>CUSTOMER FEEDBACK</li>
                    <li className='w-full h-10'>BLOG</li>
                </ul>
            </nav>
            <div className='flex-1'>
                <Link to={"/account"} className=''>Sign In</Link>
            </div>

        </header>
    )
}

export default Navbar