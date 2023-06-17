import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = ({brands}) => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImages, setProductImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [brand, setBrand] = useState("");

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    }
    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    }
    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    };
    const handleImageUpload = (e) => {
        const files = e.target.files;
        const fileUrls = [];
        for (const element of files) {
            const file = element;
            const fileUrl = URL.createObjectURL(file);
            fileUrls.push(fileUrl);

        }
        setProductImages(files)
        setImageUrls(fileUrls)
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('desc', productDescription);
        formData.append('price', productPrice);
        formData.append('brand', brand);
        formData.append('oldPrice', '0')

        for (const element of productImages) {
            formData.append('file', element);
        }

        axios.post("http://localhost:8080/products/addProduct", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

            setProductName("")
            setProductDescription("")
            setProductPrice("")
            setProductImages([])
            setImageUrls([])


    }
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }


    return (
        <div>
            <h2 className='font-bold text-4xl py-10 
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 from-10% to-blue-500
            '>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 place-items-center gap-9'>
                    <div className='flex flex-col items-start pl-10 w-2/3'>
                        <label>Brand:</label>
                        <select className='my-1 w-full h-8' onChange={handleBrandChange}>
                           {
                            brands.map((brand, index) =>{
                                return(
                                    <option key={index} value={brand} className='text-black'>{brand}</option>
                                )
                            })
                           }
                        </select>
                    </div>
                    <div className='flex flex-col items-start pl-10 w-2/3'>
                        <label>Product Name:</label>
                        <input className='my-1 w-full h-8' type="text" value={productName} onChange={handleProductNameChange} />

                    </div>
                    <div className='flex flex-col items-start pl-10 w-2/3'>
                        <label>Product Description:</label>
                        <textarea className='my-1 w-full resize-none' value={productDescription}
                            onChange={handleProductDescriptionChange}></textarea>

                    </div>

                    <div className='flex flex-col items-start pl-10 w-2/3'>
                        <label>Product Price:</label>
                        <input className='my-1 w-full h-8' type="number"
                            value={productPrice}
                            onChange={handleProductPriceChange} />
                    </div>
                    <div className='flex flex-row items-start pl-10 w-2/3'>
                        <div className='flex flex-col items-start'>
                            <label>Product Image:</label>
                            <input className='my-1 w-full h-8' type="file"
                                accept='image/*'
                                // value={productImages}
                                multiple
                                onChange={handleImageUpload} />
                        </div>
                        <div className='flex gap-2 h-20 w-full items-center justify-center'>
                            {imageUrls.map((imageUrls, index) => {
                                return (
                                    <img key={index} src={imageUrls} alt={`Product ${index + 1}`} className='rounded-lg w-20 ' />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <button type="submit" className=' border-2 w-32 border-gray-500 my-10 h-9 rounded-lg 
                bg-gradient-to-r from-blue-400 from-10% via-blue-300 via-60% to-blue-500 to-90% 
                '>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct