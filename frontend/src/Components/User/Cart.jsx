import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {

    const storedUserId = localStorage.getItem('userId');
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [sortField, setSortField] = useState(null);
    // const [sortDirection, setSortDirection] = useState("DESC")
    const [totalPages, setTotalPages] = useState(0);
    const [message, setMessage] = useState(null);
    const loadCart = (id) => {
        axios.get(`http://localhost:8080/orders/${id}`,
            {
                params: {
                    page: currentPage,
                    pageSize: pageSize,
                    sortField: sortField
                }
            })
            .then((res) => {
                // console.log(res.data.content);
                setCart(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const deleteOrder = (id) => {
        axios.delete(`http://localhost:8080/orderDetails/${id}`)
            .then((res) => {
                //console.log(res.data);
                loadCart(storedUserId);
                setMessage("Xóa thành công");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadCart(storedUserId);
        //console.log(cart);
    }, [currentPage, pageSize, sortField])

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
    return (
        <div>
            <div>
                <h2 className='font-bold text-4xl py-10 
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 from-10% to-blue-500
            '>Giỏ Hàng</h2>
            </div>
            <div>
                <div>
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
                                <th className='table-thead bg-slate-500 text-white '> <button>Ngày</button> </th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"name"}>Tên sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Hình ảnh</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Môt tả sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"price"}>Giá gốc<strong>$</strong></button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Số Lượng</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"price"}>Giá mua<strong>$</strong></button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Thao tác</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item) => {
                                    return item.orderDetails.map((detail) => {
                                        return (
                                            <tr key={detail.id}>
                                                <td className='table-tbody'>{detail.id}</td>
                                                <td className='table-tbody'>{item.orderDate}</td>
                                                <td className='table-tbody'>{detail.product.name}</td>
                                                <td className='table-tbody'>
                                                    {detail.product.imageUrl?.length > 0 && (
                                                        <div className='flex w-full items-center justify-center'>
                                                            <img title={detail.id}
                                                                src={require(`../../image/${detail.product.imageUrl[1]}`)}
                                                                alt=''
                                                                className='w-20 h-20 mix-blend-multiply'
                                                            />
                                                        </div>
                                                    )}
                                                </td>
                                                <td className='table-tbody'>{detail.product.description}</td>
                                                <td className='table-tbody'>{detail.product.price}</td>
                                                <td className='table-tbody'>{detail.quantity}</td>
                                                <td className='table-tbody'>{detail.price}</td>
                                                <td className='table-tbody'>
                                                    <div className='flex gap-2 items-center justify-center'>
                                                        <button className='btn-update'>Sửa</button>
                                                        <button className='btn-delete' onClick={() => deleteOrder(detail.id)}>
                                                            Hủy
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    });
                                })
                            }


                        </tbody>
                    </table>

                </div>
            </div>
            {
                message && message.length > 0 ? <div className='absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center rounded-lg'>
                    <div className='bg-white w-[400px] h-[200px] flex flex-col items-center justify-center gap-3 '>
                        <h1 className='text-2xl font-bold'>{message}</h1>
                        <button className='bg-blue-900 text-white w-[100px] h-[40px] rounded-lg hover:bg-blue-800 hover:scale-95
              transition-colors duration-500 ease-linea'
                            onClick={() => {
                                setMessage('');
                            }
                            }>OK</button>
                    </div>
                </div> : null

            }
        </div>
    )
}

export default Cart