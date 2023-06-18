import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Wishlist = () => {

    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [sortField, setSortField] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [wishList, setWishList] = useState([])

    const storedUserId = localStorage.getItem('userId');

    const loadWishList = async (id, page, size) => {
        try {
            const response = await axios.get(`http://localhost:8080/${id}/myWishlist`, {
                params: {
                    page: currentPage,
                    pageSize: pageSize,
                },
            });

            setWishList(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteOrder = (id) => {
        axios.delete(`http://localhost:8080/orderDetails/${id}`)
            .then((res) => {

            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadWishList(storedUserId, currentPage, pageSize);
    }, [currentPage, pageSize]);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

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
            '>Yêu thích của bạn</h2>
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
                                <th className='table-thead bg-slate-500 text-white '> <button value={"name"}>Tên sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Hình ảnh</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Môt tả sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"price"}>Giá<strong>$</strong></button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Thao tác</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishList.map((item, index) => {
                                    return item.products.map((detail, indexDetail) => {
                                        return (
                                            <tr key={indexDetail}>
                                                <td className='table-tbody'>{detail.productId}</td>
                                                <td className='table-tbody'>{detail.name}</td>
                                                <td className='table-tbody'>
                                                    {detail.imageUrl?.length > 0 && (
                                                        <div className='flex w-full items-center justify-center'>
                                                            <img title={detail.id}
                                                                src={require(`../../image/${detail.imageUrl[0]}`)}
                                                                alt=''
                                                                className='w-20 h-20 mix-blend-multiply'
                                                            />
                                                        </div>
                                                    )}
                                                </td>
                                                <td className='table-tbody'>{detail.description}</td>
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
                                        )
                                    })
                                })
                            }


                        </tbody>
                    </table>

                </div>
            </div>
            {/* {
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

            } */}
        </div>
    )
}

export default Wishlist