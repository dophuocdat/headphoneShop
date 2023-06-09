import axios from 'axios';
import React, { useEffect } from 'react'


const Content = ({ name, email, phone, address, status, activeMenu }) => {

    if (activeMenu === 1) {
        return (
            <div className="content w-[90%] bg-slate-200 shadow-xl shadow-slate-400 rounded-md">
                <div className='font-extrabold text-2xl pt-10'>Thông tin người dùng</div>
                <div className=' flex items-center justify-center flex-row'>
                    <div className="details-user py-32 flex flex-col items-start gap-5 w-2/3 shadow-md">
                        <div className="name-user flex flex-col items-start pl-10">
                            <div className="title font-bold text-lg">Họ và tên:</div>
                            <div className="name pl-10 text-lg font-mono">{name}</div>
                        </div>
                        <div className="email-user flex flex-col items-start pl-10">
                            <div className="title font-bold text-lg">Email:</div>
                            <div className="email pl-10 text-lg font-mono">{email}</div>
                        </div>
                        <div className="phone-user flex flex-col items-start pl-10">
                            <div className="title font-bold text-lg">Số điện thoại:</div>
                            <div className="phone pl-10 text-lg font-mono">{phone}</div>
                        </div>
                        <div className="address-user flex flex-col items-start pl-10">
                            <div className="title font-bold text-lg">Địa chỉ:</div>
                            <div className="address pl-10 text-lg font-mono">
                                {address}
                            </div>
                        </div>
                        <div className="status-user flex flex-col items-start pl-10">
                            <div className="title font-bold text-lg">Trạng thái:</div>
                            <div className="status pl-10 text-lg font-mono after:w-3 after:h-3 flex gap-3 justify-center items-center
                     after:rounded-full after:bg-green-700 after:content-[''] after:text-green-600">{
                                    status ? "Đang hoạt động" : "Đã khóa"
                                }

                            </div>
                        </div>


                        <div className="btn flex items-center justify-center w-full">
                            <button className='bg-slate-400 text-white font-bold text-lg px-5 py-2 rounded-md shadow-md
                    hover:bg-orange-400'>Sửa thông tin</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    else if (activeMenu === 2) {
        return (
            <div>
                <h2>Hello ActiveMenu 2</h2>
            </div>
        )
    }
    else if (activeMenu === 3) {
        return (
            <div>
                <h2>Hello ActiveMenu 3</h2>
            </div>
        )
    }
    else if (activeMenu === 4) {
        return (
            <div>
                <h2>Hello ActiveMenu 4</h2>
            </div>
        )
    } else {
        return null;
    }

}

export default Content