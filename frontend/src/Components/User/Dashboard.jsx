import React from 'react'

const Dashboard = () => {
    return (
        <div className="dashboard flex flex-col gap-10 bg-slate-700 h-full sticky ">
            <div className='w-full flex flex-col items-center justify-center'>
                <div className="logo w-40 h-40 ">
                    <img src="https://th.bing.com/th/id/R.734193a8748f829f6bcfb3e7d80c3ff3?rik=RW5jCz%2bHdBcV0g&pid=ImgRaw&r=0" alt=""
                        className='rounded-full h-full w-full' />
                </div>
                <div className='name font-semibold text-xl text-slate-400'>
                    Đỗ Phước Đạt
                </div>
                <div className='font-light text-sm text-red-300'>
                    chưa đăng ký kinh doanh
                </div>
            </div>
            <div className="menuDashboard">
                <nav>
                    <ul className='flex flex-col items-start'>
                        <li className='hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10'>Thông tin chi tiết</li>
                        <li className='hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10'>Quản lý sản phẩm</li>
                        <li className='hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10'>Thông kê</li>
                        <li className='hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10'>Logout</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Dashboard