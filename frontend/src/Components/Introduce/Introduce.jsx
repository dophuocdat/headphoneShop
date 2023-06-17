import React from 'react'
import './Introduce.css'
import { FaBalanceScale, FaBirthdayCake, FaCommentDots } from 'react-icons/fa'
import {RiShoppingBasketFill} from 'react-icons/ri'

function Introduce() {
    return (
        <div className='intro-container'>
            <div className="intro-product">
                <ul className="grid md:grid-rows-1 md:grid-cols-4 w-full grid-rows-4 grid-cols-1 place-content-center" >
                    <li>
                        <FaBirthdayCake className='w-10 h-10' />
                        <h3>GIVE AUDIO46 AS A GIFT</h3>
                        <a href="/">GIFT CARDS AVAILABLE</a>
                    </li>
                    <li>
                    <FaBalanceScale className='w-10 h-10'/>
                        <h3>TRY BEFORE YOU BUY</h3>
                        <a href="/">STORE DEMOS ARE BACK</a>
                    </li>
                    <li>
                    <RiShoppingBasketFill className='w-10 h-10'/>
                        <h3>PAY ONLINE</h3>
                        <a href="/">PICK UP IN STORE</a>
                    </li>
                    <li>
                    <FaCommentDots className='w-10 h-10'/>
                        <h3>LIVE CHAT</h3>
                        <a href="/">SPEAK WITH OUR REPS WHILE YOU SHOP</a>
                    </li>
                </ul>
            </div>
           
        </div>
       
    )
}

export default Introduce