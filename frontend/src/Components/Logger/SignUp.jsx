import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {

    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    })
    const [signup, setSignup] = useState(null)

    // const [name, email, password, phone, address] = customer
    const onInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value }) // e.target.name = email or password, ...user is mean copy all user
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/customers', customer)
            .then((res) => {
                console.log(res);
                setSignup(true)
            })
            .catch((err) => {
                console.log(err);
                setSignup(false)
            });
    }


    return (
        <div className='account-controller py-16 '>
            <div className="flex justify-center flex-col items-center pb-10">
                <h2 className='bg-slate-300 text-2xl font-semibold text-center my-10 w-full'>Sign up</h2>
                {signup === true && <h2 className="text-green-500 text-center text-2xl font-semibold">Sign up success</h2>}
                {signup === false && <h2 className="text-red-500 text-center text-2xl font-semibold">Sign up failed</h2>}
                <form action="" onSubmit={(e) => onSubmit(e)} className='w-full flex items-center justify-center'>
                    <div className='grid grid-rows-2 grid-cols-1 place-content-center gap-10 py-10 w-1/2 shadow-lg  border-2  outline-offset-1 p-10'>
                        <input type="text" placeholder='Fullname' className='border-2  rounded-lg h-11 focus:border-rose-300  outline-none transition-all duration-600 px-5'

                            onChange={(e) => onInputChange(e)}
                            name="name"
                        />
                        <input type="email" placeholder='Email@gmail.com' className='border-2  rounded-lg h-11 focus:border-rose-300  outline-none transition-all duration-600 px-5'

                            onChange={(e) => onInputChange(e)}
                            name="email"
                        />
                        <input type="password" placeholder='password' className='border-2  rounded-lg h-11 focus:border-rose-300  outline-none transition-all duration-600 px-5'

                            onChange={(e) => onInputChange(e)}
                            name="password"
                        />
                        <input type="text" placeholder='Address' className='border-2  rounded-lg h-11 focus:border-rose-300  outline-none transition-all duration-600 px-5'

                            onChange={(e) => onInputChange(e)}
                            name="address"
                        />
                        <input type="number" placeholder='phone' className='border-2 phone rounded-lg h-11 focus:border-rose-300  outline-none transition-all duration-600 px-5'

                            onChange={(e) => onInputChange(e)}
                            name="phone"
                        />


                        <div className="flex gap-10 justify-center">
                            <button type='submit' className='border-2 border-gray-500 outline-indigo-500 rounded-lg w-1/4 h-10 hover:bg-blue-500  hover:text-white text-lg font-medium'
                            >Create Account</button>
                            <Link to={'/'} className='border-2 border-gray-500 outline-indigo-500 rounded-lg w-1/4 h-10 hover:bg-red-600 hover:text-white text-lg font-medium'>Cancel</Link>
                        </div>

                    </div>
                </form>

            </div>
            <div className="description-acc w-screen flex justify-center">
                <div className='w-1/2 '>
                    <span className='uppercase'>RECEIVING AN ERROR MESSAGE WHEN YOU ATTEMPT TO LOGIN USING YOUR EMAIL?</span>
                    <span>If you subscribed to our newsletter and/or made a purchase with us in the past but you're seeing an error message when trying to login, that means you haven't registered an account with us yet.
                        <a href="/" className='text-red-600' >Create an account</a> now using the same email you used with us before.</span>

                </div>
            </div>
        </div>
    )
}

export default SignUp