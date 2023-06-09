import React from 'react'

function Account() {
    return (
        <div className='account-controller py-16 '>
            <div className="flex justify-center flex-col items-center pb-10">
                <h2 className='bg-slate-300 text-2xl font-semibold text-center my-10 w-full'>Login</h2>
                <div className='grid grid-rows-2 grid-cols-1 place-content-center gap-10 py-10 w-1/2 shadow-lg  border-2  outline-offset-1 p-10'>
                    <input type="email" placeholder='Email@gmail.com' className='border-2  rounded-lg h-11 focus:border-rose-300  outline-none transition-all duration-600 px-5' />
                    <input type="password" placeholder='password' className='border-2  rounded-lg h-11 focus:border-rose-300  outline-none transition-all duration-600 px-5' />
                    <div className="flex gap-1 justify-center items-center ">
                        <input type="checkbox" className='w-4 h-4' />
                        <span className='capitalize '> remember password ?</span>
                    </div>
                    <div className='flex gap-3 justify-center'>
                        <a href="/" className='text-red-600 underline'>Forgot your password?</a> Or
                        <a href='/' className='text-red-600 underline'>Create an account</a>
                    </div>

                    <div className="flex gap-10 justify-center">
                        <button className='border-2 border-gray-500 outline-indigo-500 rounded-lg w-1/4 h-10 hover:bg-blue-500  hover:text-white text-lg font-medium'>Login</button>
                        <button className='border-2 border-gray-500 outline-indigo-500 rounded-lg w-1/4 h-10 hover:bg-red-600 hover:text-white text-lg font-medium'>Cancel</button>
                    </div>

                </div>

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

export default Account