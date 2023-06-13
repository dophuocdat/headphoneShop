import axios from 'axios'
import React, { useEffect, useState } from 'react'


const EditInfor = ({ id }) => {
  const [infoProduct, setInfoProduct] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [accept, setAccept] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false)

  const [product, setProduct] = useState(
    {
      id: id,
      name: "",
      price: "",
      description: "",
      image: []
    }
  )

  const { name, price, description } = product;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInfoProduct((prevInfoProduct) => ({
      ...prevInfoProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const fileUrls = [];
    const fileNames = [];
    for (const element of files) {
      const file = element;
      const fileUrl = URL.createObjectURL(file);
      fileUrls.push(fileUrl);
      fileNames.push(file.name);

    }
    setInfoProduct((prevInfoProduct) => ({
      ...prevInfoProduct,
      imageUrl: fileNames,
    }));
    setProductImages(files)
    setImageUrls(fileUrls)
  };




  const loadProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/products/product/${id}`);
      setInfoProduct(response.data);

      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProductById(id);
  }, []);

  if (infoProduct === null) {
    return <div>Loading...</div>;
  }


  const acceptAddImage = () => {
    setAccept(!accept)
    console.log(accept);
    if (accept === false) {
      setImageUrls([]);
      setProductImages([]);
    }
  }


  //update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(infoProduct);
    await axios.put(`http://localhost:8080/products/updateProduct/${id}`, infoProduct)
      .then((res) => {
        setUpdateSuccess(true)
        /*   console.log(res.data);
          console.log(infoProduct); */
      }).catch((err) => {
        setUpdateSuccess(false)
        console.log(err);
      })
  }




  return (
    <div className='h-full'>
      <div className='text-2xl font-bold py-3 
      bg-clip-text text-transparent bg-gradient-to-r from-green-300  to-violet-500 '>Edit Product</div>
      {
        updateSuccess ? <div className='text-green-500'>Update Success</div> : <div className='text-red-500'>Update Fail</div>
      }
      <div className='flex items-center h-1/2 justify-center'>
        <div className='grid grid-cols-1 grid-rows-4 place-content-start place-items-start gap-10 pl-3 h-1/3'>
          <div className='flex flex-row gap-3 w-full'>
            <label className='w-32 flex items-start'> ID Product</label>
            <input type="text"
              value={infoProduct.productId}
              disabled
            />
          </div>
          <div className='flex flex-row gap-3 w-full'>
            <label className='w-32 flex items-start'>Product Name</label>
            <input type="text"
              name="name"
              value={infoProduct.name}
              onChange={onInputChange} />
          </div>
          <div className='flex flex-row gap-3 w-full'>
            <label className='w-32 flex items-start'> Price</label>
            <input type="number"
              name="price"
              value={infoProduct.price}
              onChange={onInputChange} />
          </div>
          <div className='flex flex-row gap-3 w-full'>
            <label className='w-32 flex items-start'>Description</label>
            <textarea type="text"
              name="description"
              value={infoProduct.description}
              onChange={onInputChange}
              className='resize-none h-10'
            />
          </div>
          {
            accept ? (
              <div className='pt-4'>
                <div className='flex flex-row gap-2'>
                  <label className='w-32 flex items-start'>Image</label>
                  {
                    infoProduct.imageUrl.map((image) => (
                      (
                        <img src={require(`../../image/${image}`)} alt="" className='w-16 h-16  rounded-md' />
                      )
                    ))
                  }
                </div>
              </div>
            ) : null
          }
          <div className='flex items-center justify-center gap-2'>
            <input type="checkbox" className='w-4 h-4' onClick={acceptAddImage} /> update Image
          </div>

          {
            accept ? null : (
              <div>
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
            )
          }
          <div className='flex items-center justify-center w-full'>
            <div className='flex gap-4'>
              <button className='btn-update' onClick={handleSubmit}>Update</button>
              <button className='btn-delete'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditInfor