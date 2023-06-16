import React from 'react'

const Cart = () => {
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
                                <button>First</button>
                                <button>Previous</button>
                                <button>Page</button>
                                <button>Next</button>
                                <button>Last</button>
                            </div>
                        </caption>
                        <thead>
                            <tr>
                                <th className='table-thead bg-slate-500 text-white '> <button>Mã sản phẩm</button> </th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"name"}>Tên sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Hình ảnh</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Môt tả sản phẩm</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button value={"price"}>Giá <strong>$</strong></button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Số Lượng</button></th>
                                <th className='table-thead bg-slate-500 text-white '> <button >Thao tác</button></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td className='table-tbody'>id</td>
                                <td className='table-tbody'>name</td>
                                <td className='table-tbody '>
                                    image
                                </td>
                                <td className='table-tbody'></td>
                                <td className='table-tbody'></td>
                                <td className='table-tbody'></td>
                                <td className='table-tbody'>
                                    <button className='btn-update'>Sửa</button>
                                    <button className='btn-delete'>Xóa</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart