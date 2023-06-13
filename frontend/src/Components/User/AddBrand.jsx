import React, { useState } from 'react'
import axios from 'axios'

const AddBrand = () => {
  
  const [brandName, setBrandName] = useState('');
  const [brandCountry, setBrandCountry] = useState('');
  const [message, setMessage] = useState(true);

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  }
  const handleBrandCountryChange = (e) => {
    setBrandCountry(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBrand = {
      brandName: brandName,
      country: brandCountry
    };
    console.log(newBrand);
   await axios.post('http://localhost:8080/brand/addBrand', newBrand)
      .then((res) => {
        console.log(res.data);
        setMessage(false);

      })
      .catch((err) => {
        console.log(err);
        setMessage(true);
      })

    //Rest from sau khi them thanh cong
    setBrandName('');
    setBrandCountry('');

  }


  return (
    <div>
      <h2 className='font-bold text-4xl py-10 
    bg-clip-text text-transparent bg-gradient-to-r from-green-400 from-10% to-blue-500
    '>Add Brand</h2>
      {message ? <p className='text-red-500'>Add Brand Failed</p> : <p className='text-green-500'>Add Brand Successfully</p>}
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 place-items-center gap-9'>

          <div className='flex flex-col items-start pl-10 w-2/3'>
            <label>Tên nhà Hãng:</label>
            <input className='my-1 w-full h-8' type="text"  value={brandName}
              onChange={handleBrandNameChange}
            />

          </div>
          <div className='flex flex-col items-start pl-10 w-2/3'>
            <label>Địa điểm</label>
            <textarea className='my-1 w-full resize-none' value={brandCountry}
            onChange={handleBrandCountryChange}></textarea>

          </div>

        </div>
        <button type="submit" className=' border-2 w-32 border-gray-500 my-10 h-9 rounded-lg 
        bg-gradient-to-r from-blue-400 from-10% via-blue-300 via-60% to-blue-500 to-90% 
        '>Add Product</button>
      </form>
    </div>
  )
}

export default AddBrand