import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import AddProduct from './AddProduct';
import AddBrand from './AddBrand';
import { Link } from 'react-router-dom'
import EditInfor from './EditInfor';


const Content = ({ name, email, phone, address, status, activeMenu, brands, role }) => {

    const [products, setProduct] = useState([])

    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortField, setSortField] = useState("productId");
    const [sortDirection, setSortDirection] = useState("ASC")
    const [totalPages, setTotalPages] = useState(0);

    const [editProduct, setEditProduct] = useState(false);
    const [id, setId] = useState("")



    const [searchByName, setSearchByName] = useState("");
    const [searchByPriceMin, setSearchByPriceMin] = useState("");
    const [searchByPriceMax, setSearchByPriceMax] = useState("");
    const [searchByBrand, setSearchByBrand] = useState("");

    //reload table when delete
    const [deleteSuccess, setDeleteSuccess] = useState(false);




    const loadProduct = async () => {
        await axios.get('http://localhost:8080/products/AllProducts', {
            params: {
                page: currentPage,
                pageSize: pageSize,
                sortField: sortField,
                sortDirection: sortDirection,
            },
        })
            .then((res) => {
                setProduct(res.data.content);
                setTotalPages(res.data.totalPages);
                //console.log(res.data);
                //console.log(products);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const searchProduct = async () => {
        await axios.get('http://localhost:8080/products/search', {
            params: {
                page: currentPage,
                pageSize: pageSize,
                sortField: sortField,
                sortDirection: sortDirection,
                brand: searchByBrand,
                productName: searchByName,
                priceMin: searchByPriceMin,
                priceMax: searchByPriceMax
            },
        }).then((res) => {
            setProduct(res.data.content);
            setTotalPages(res.data.totalPages);
            //console.log(res.data);
            // console.log(products);
        })
            .catch((err) => {
                console.log(err);
            })

    }

    const handleChangeSearch = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setSearchByName(value);
        } else if (name === "priceMin") {
            setSearchByPriceMin(value);
        } else if (name === "priceMax") {
            setSearchByPriceMax(value);
        }
        else if (name === 'brand') {
            setSearchByBrand(value);
        }
    };


    useEffect(() => {
        loadProduct();
        setDeleteSuccess(false); // Đặt trạng thái thành công về false sau khi tải lại bảng
    }, [currentPage, pageSize, sortField, sortDirection, deleteSuccess])




    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(0);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages - 1);
    };


    const handleSortChange = (e) => {
        setSortField(e.target.value);
        //  console.log(e.target.value);
    }


    const handleShowEdit = (id) => {
        setEditProduct(!editProduct);
        console.log(editProduct);
        console.log(id);
        setId(id);
    }
    const handleDeleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/products/deleteProduct/${id}`)
            .then((res) => {
                console.log(res.data);
                setDeleteSuccess(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    if (activeMenu === 1) {
        return (
            <div className="content w-[90%] bg-slate-200 shadow-xl shadow-slate-400 rounded-md ">
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
    else if (activeMenu === 2 && role === "ADMIN") {
        return (
            <div className='content w-[90%] bg-slate-200 shadow-xl shadow-slate-400 rounded-md relative'>
                <div className="option-search">
                    <h1 className='text-2xl py-3 font-semibold'>Kho sản phẩm</h1>
                    <div className='grid grid-cols-2 grid-rows-2 px-4 py-10 gap-5'>
                        <div className='flex flex-col'>
                            <span className='flex items-start text-md font-semibold py-2'>Search by brand</span>
                            <input type="text" placeholder='Search by brand' className='rounded-md px-3 h-9 w-2/3 focus:outline-slate-400'
                                value={searchByBrand}
                                name="brand"
                                onChange={(e) => handleChangeSearch(e)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className='flex items-start text-md font-semibold py-2'>Search by price</span>
                            <div className='grid grid-cols-2'>
                                <input type="text" placeholder='Min' className='rounded-md px-3 h-9 w-4/5 focus:outline-slate-400'
                                    name='priceMin'
                                    onChange={(e) => handleChangeSearch(e)}
                                    value={searchByPriceMin}
                                />
                                <input type="text" placeholder='Max' className='rounded-md px-3 h-9 w-4/5 focus:outline-slate-400'
                                    name='priceMax'
                                    onChange={(e) => handleChangeSearch(e)}
                                    value={searchByPriceMax}
                                />
                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <span className='flex items-start text-md font-semibold py-2'>Search by name</span>
                            <input type="text" placeholder='Search by name' className='rounded-md px-3 h-9 w-2/3 focus:outline-slate-400'
                                name='name'
                                onChange={(e) => handleChangeSearch(e)}
                                value={searchByName} />
                        </div>
                    </div>
                    <button className='bg-blue-400 px-8 rounded-md h-9 font-medium text-lg flex items-center justify-center gap-3 ml-3'
                        onClick={searchProduct}
                    >Search <FcSearch /></button>
                </div>
                <div className='py-7'>
                    <table className='w-full border-collapse border border-spacing-32 border-slate-500'>
                        <caption className="caption-bottom controller">
                            <div className="flex gap-3 items-center justify-center">
                                <button onClick={handleFirstPage}>first</button>
                                <button onClick={handlePreviousPage}>Previous</button>
                                <button>{currentPage + 1}</button>
                                <button onClick={handleNextPage}>next</button>
                                <button onClick={handleLastPage}>last</button>
                            </div>
                        </caption>
                        <thead>
                            <tr>
                                <th className='table-thead bg-slate-500 text-white '> <button>Mã sản phẩm</button> </th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"name"} onClick={(e) => handleSortChange(e)}>Tên sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Hình ảnh</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Môt tả sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"price"} onClick={(e) => handleSortChange(e)}>Giá <strong>$</strong></button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Số Lượng</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Thao tác</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => {
                                    return (

                                        <tr key={index}>
                                            <td className='table-tbody'>{product.productId}</td>
                                            <td className='table-tbody'>{product.name}</td>
                                            <td className='table-tbody '>
                                                <div className='flex gap-5 justify-center'>
                                                    {
                                                        product.imageUrl.map((image, imageIndex) => {
                                                            return (
                                                                <img key={imageIndex} src={require(`../../image/${image}`)} alt="" className='w-10 h-10' />
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </td>
                                            <td className='table-tbody'>{product.description}</td>
                                            <td className='table-tbody'>{product.price}</td>
                                            <td className='table-tbody'>20</td>
                                            <td className='table-tbody'>
                                                <button className='btn-update' onClick={() => handleShowEdit(product.productId)}>Sửa</button>
                                                <button className='btn-delete' onClick={() => handleDeleteProduct(product.productId)}>Xóa</button>
                                            </td>
                                        </tr>
                                    )

                                })
                            }

                        </tbody>
                    </table>
                </div>
                {
                    editProduct ?
                        <div className='absolute w-[700px] h-[650px] bg-slate-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl'>
                            <div className='relative h-full'>
                                <EditInfor id={id} />
                            </div>
                        </div>
                        : null
                }

            </div>
        )
    }
    else if (activeMenu === 3 && role === 'ADMIN') {
        return (
            <div className='content w-[90%] bg-slate-200 shadow-xl shadow-slate-400 rounded-md'>
                <AddProduct brands={brands} />
            </div>
        )
    }
    else if (activeMenu === 4 && role === 'ADMIN') {
        return (
            <div className='content w-[90%] bg-slate-200 shadow-xl shadow-slate-400 rounded-md'>
                <AddBrand />
            </div>
        )
    } else if (activeMenu === 2 && role !== 'ADMIN') {
        return (
            <div className='content w-[90%] bg-slate-200 shadow-xl shadow-slate-400 rounded-md'>
                Giỏi hàng
            </div>
        )
    } else if (activeMenu === 3 && role !== 'ADMIN') {
        return (
            <div className='content w-[90%] bg-slate-200 shadow-xl shadow-slate-400 rounded-md'>
                Yêu thích
            </div>
        )
    }

}

export default Content