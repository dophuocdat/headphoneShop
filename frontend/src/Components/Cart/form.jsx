import axios from 'axios'
import React from 'react'

const FromComfirm = ({ onCancel, count, name, price,buy }) => {
  const total = count * price;


  return (
    <div className='bg-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-[400px] h-[450px] rounded-lg '>
      <div className='h-full'>
        <h1 className='text-center text-2xl font-bold text-slate-100 pt-4 pb-10'>Thông tin sản phẩm</h1>
        <div className='grid grid-cols-1 grid-rows-3 gap-2  place-items-start  h-1/2' >
          <div className='w-full flex items-start'>
            <label className='w-32 text-start pl-5'>Tên sản phẩm</label>
            <input type="text" className='w-60 rounded-lg h-8 font-semibold text-xl pl-3 outline-none bg-transparent
            ' value={name} disabled/>
          </div>
          <div className='w-full flex items-start'>
            <label className='w-32 text-start pl-5'>Số Lượng</label>
            <input type="text" className='w-60 rounded-lg h-8 font-semibold text-xl pl-3 outline-none bg-transparent
            ' value={count} disabled />
          </div>
          <div className='w-full flex items-start'>
            <label className='w-32 text-start pl-5'> Giá tiền</label>
            <input type="text" value={total} className='w-60 rounded-lg h-8 font-semibold text-xl pl-3 outline-none bg-transparent
            ' disabled />
          </div>
          <div className='flex w-full items-center justify-evenly'>
            <button className='btn-update w-32 hover:bg-slate-200 hover:text-black' onClick={buy}>Buy</button>
            <button className='btn-delete w-32 hover:bg-slate-200 hover:text-black' onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromComfirm