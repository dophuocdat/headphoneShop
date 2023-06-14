import React, { useEffect, useState } from 'react'
import Content from './Content'
import axios from 'axios'
import { FaDotCircle } from 'react-icons/fa'


function Dashboard({ userId, role }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        status: "",
        roles: ""

    })
    /*     const [products, setProduct] = useState({
            brandName: "",
            productId: "",
            name_Product: "",
            description: "",
            price: "",
            priceOld: "",
            image: [],
    
        }) */



    const [brands, setBrand] = useState([])

    // tranh trang thai Request failed with status code 400
    const [isLoading, setLoading] = useState(true)

    const [activeMenu, setActiveMenu] = useState(1);

    const { name, email, phone, address, status, roles } = user
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


    const loadBrand = async (id) => {
        setLoading(true)
        await axios.get('http://localhost:8080/brand/BrandName')
            .then((res) => {
                setBrand(res.data);
                // console.log(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    /* const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortField, setSortField] = useState("products.productId");   
    const [sortDirection, setSortDirection] = useState("DESC")
    const [totalPages, setTotalPages] = useState(0);
    const loadProduct = async () => {
        await axios.get('http://localhost:8080/brand/BrandAndProduct', {
            params: {
                page: currentPage,
                size: pageSize,
                sort: sortField,
                sortDirection: sortDirection,
               
            },
        })
            .then((res) => {
                setProduct(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => {
                console.log(err);
            })
    }
 */
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            loadUser(storedUserId);
        }
        loadBrand();



    }, [])

    /*     useEffect(() => {
            loadProduct();
            console.log(totalPages);
        }, [currentPage, pageSize, sortField, sortDirection])
     */
    const handleMenuClick = (index) => {
        setActiveMenu(index);

    }
    /* const handleSort = (field) => {
        if (sortField === field) {
            // Toggle the sort direction if the same field is clicked again
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            // Set the new sort field and direction
            setSortField(field);
            setSortDirection("asc");
        }
        // Reset the current page to 0 when sorting is changed
        setCurrentPage(0);
    } */
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
                        <div className='name font-mono text-sm text-green-300 uppercase'>
                            {roles}
                        </div>
                        <div className='font-light text-sm text-blue-400 '>
                            <div className='flex justify-center items-center gap-3'>Online <FaDotCircle className='text-green-700' /></div>
                        </div>
                    </div>
                    <div className="menuDashboard">
                        <nav>
                            {
                                role === "ADMIN" ? (
                                    <ul className='flex flex-col items-start'>
                                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu === 1 ? "bg-slate-400" : ""}`} onClick={() => handleMenuClick(1)}>Thông tin chi tiết</li>
                                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu === 2 ? "bg-slate-400" : ""}`} onClick={() => handleMenuClick(2)}>Kho Sản phẩm</li>
                                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu === 3 ? "bg-slate-400" : ""}`} onClick={() => handleMenuClick(3)}>Thêm Sản Phẩm</li>
                                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu === 4 ? "bg-slate-400" : ""}`} onClick={() => handleMenuClick(4)}>Nhà Cung Ứng</li>
                                    </ul>
                                ) : (
                                    <ul className='flex flex-col items-start'>
                                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu === 1 ? "bg-slate-400" : ""}`} onClick={() => handleMenuClick(1)}>Thông tin chi tiết</li>
                                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu === 2 ? "bg-slate-400" : ""}`} onClick={() => handleMenuClick(2)}>Giỏ hàng</li>
                                        <li className={`hover:bg-slate-400 cursor-pointer w-full flex items-start pl-5 h-10 ${activeMenu === 3 ? "bg-slate-400" : ""}`} onClick={() => handleMenuClick(3)}>Sản phẩm yêu thích</li>
                                    </ul>
                                )
                            }
                        </nav>
                    </div>
                </div>
            </div>
            <div className='w-full flex  justify-center py-3'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Content name={name} email={email} phone={phone} address={address}
                        status={status} activeMenu={activeMenu} brands={brands} role={role} />
                )}
            </div>
        </div>
    )
}

export default Dashboard