import React, { useEffect, useState } from 'react'
import Content from './Content'
import axios from 'axios'
import { FaDotCircle } from 'react-icons/fa'


function Dashboard({ userId }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address:"",
        status: "",

    })  
    // tranh trang thai Request failed with status code 400
    const [isLoading, setLoading] = useState(true)
     
    const [activeMenu, setActiveMenu] = useState(1);
    

    const { name, email, phone,address,status} = user
    const loadUser = async (id) => {
        setLoading(true)
        await axios.get(`http://localhost:8080/information/${id}`).then((res) => {
            setUser(res.data)
            //console.log(res.data);
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })

    }
    useEffect(() => {
        //console.log(business_address);
        const storedUserId = localStorage.getItem('userId');
        if(storedUserId){
            loadUser(storedUserId);
        }
        
    }, [])

   
    const handleMenuClick = (index) => {
        setActiveMenu(index);
      }

    return (
        <div className="w-screen flex min-h-screen">
            <div className='w-64'>
              {/*   <Dashboard name={name}/> */}
              <div className="dashboard flex flex-col gap-10 bg-slate-700 h-full sticky ">
            <div className='w-full flex flex-col items-center justify-center'>
                <div className="logo w-40 h-40 ">
                    <img src="https://th.bing.com/th/id/R.734193a8748f829f6bcfb3e7d80c3ff3?rik=RW5jCz%2bHdBcV0g&pid=ImgRaw&r=0" alt=""
                        className='rounded-full h-full w-full' />
                </div>
                <div className='name font-semibold text-xl text-slate-400 uppercase'>
                    {name}
                </div>
                <div className='font-light text-sm text-blue-400 '>
                    <div className='flex justify-center items-center gap-3'>Online <FaDotCircle className='text-green-700' /></div>
                </div>
            </div>
            <div className="menuDashboard">
                <nav>
                    <ul className='flex flex-col items-start'>
                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu===1?"bg-slate-400":""}`} onClick={() =>handleMenuClick(1)}>Thông tin chi tiết</li>
                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu===2?"bg-slate-400":""}`} onClick={() =>handleMenuClick(2)}>Kho Sản phẩm</li>
                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu===3?"bg-slate-400":""}`} onClick={() =>handleMenuClick(3)}>Thông kê</li>
                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu===4?"bg-slate-400":""}`} onClick={() =>handleMenuClick(4)}>Logout</li>
                    </ul>
                </nav>
            </div>
        </div>
            </div>
            <div className='w-full flex  justify-center py-3'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Content name={name} email={email} phone={phone} address={address}  status={status} activeMenu={activeMenu}/>
                )}
            </div>
        </div>
    )
}

export default Dashboard