import React, { useEffect, useState, useCallback } from 'react'
import './Recommendations.css'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Recommendations() {

  const [hoveredItems, setHoveredItems] = useState({});

  const [currentIndex, setCurrentIndex] = useState(0);

  const [products, setProducts] = useState([])

  const [likedItems, setLikedItems] = useState({});

  const [oneProduct, setOneProduct] = useState({})

  const [oneCustomer, setOneCustomer] = useState({})

  const idCustomer = localStorage.getItem('userId');
  const [likedProducts, setLikedProducts] = useState([]);



  const onHover = useCallback(
    (index) => {
      setHoveredItems((prev) => ({
        ...prev, [index]: true,
      }))
      //console.log(index);
    }, []
  )
  const onMouseOver = useCallback(
    (index) => {
      setHoveredItems((prev) => ({
        ...prev, [index]: false
      }))
    }, []
  )
  const handlePrevious = () => {

    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
    //console.log(currentIndex);
  };
  const handleNext = () => {

    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
    // console.log(currentIndex);
  };

  const loadProduct = () => {
    axios.get('http://localhost:8080/products')
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
        // console.log(products);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    loadWishlist();
    loadProduct()
  }, [])

  const updateProducts = useCallback(() => {
    if (products.length > 0) {
      const updatedProducts = [...products];
      const temp = updatedProducts.splice(currentIndex, updatedProducts.length - currentIndex);
      setProducts([...temp, ...updatedProducts]);
    }
  }, [currentIndex]);

  useEffect(() => {
    updateProducts();
  }, [currentIndex, updateProducts]);

  const getProduct = (id) => {
    axios.get(`http://localhost:8080/products/product/${id}`)
      .then((res) => {
        setOneProduct(res.data);
      })
      .catch((err) => {

      })
  }
  const getCustomer = (idCustomer) => {
    axios.get(` http://localhost:8080/information/${idCustomer}`)
      .then((res) => {
        setOneCustomer(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const wishlist = async (idproduct, idCustomer) => {
    getProduct(idproduct);
    getCustomer(idCustomer)
    //console.log(idCustomer);
    const rqBody = {
      customer: oneCustomer,
      products: [oneProduct]
    };
    await axios.post(`http://localhost:8080/wishlist/${idCustomer}/create`, rqBody)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const unWishlist = (idProduct) => {
    axios.delete(`http://localhost:8080/wishlist/${idProduct}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  const handleLike = (index, id) => {
    console.log('Product ID:', id);
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
    if (!likedItems[index]) {
      // User liked the product
      setLikedProducts((prev) => [...prev, id]);

      wishlist(id, idCustomer);
    } else {
      setLikedProducts((prev) => prev.filter((productId) => productId !== id));
      unWishlist(id)
      console.log("unlike");
    }
  };
  const loadWishlist = () => {
    axios.get(`http://localhost:8080/information/${idCustomer}`)
      .then((res) => {
        const wishlist = res.data.wishlists[0];
        const likedProductIds = wishlist.products.map((product) => product.productId);
        setLikedProducts(likedProductIds);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="recommend-container  relative  border-b-gray-400 border-b-2 pb-10" >
      <div className='flex justify-center items-center py-5 font-bold text-lg gap-3'>
        <span className="line w-11 h-[.1rem] bg-black"></span>
        <h3>STAFF RECOMMENDATIONS</h3>
        <span className="line w-11 h-[.1rem] bg-black"></span>
      </div>
      <div className='w-[max-content] flex justify-center items-center'>
        {
          products.map((item, index) => {
            return (
              <div className={`box w-56 h-80 inline-block transition-transform duration-500  cursor-pointer
               hover:rounded-md hover:border-slate-700 hover:shadow-lg`}
                key={index}
                data-aos='fade-up'>
                <div className="h-2/3 relative">
                  <Link to={"/product/cart/" + item.productId}>
                    <motion.img
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        duration: 2,
                        ease: 'easeInOut',

                      }}
                      src={require(`../../../image/${hoveredItems[index] ? item.imageUrl[0] : item.imageUrl[1]}`)}
                      className='h-full  transition-opacity'
                      onMouseOver={() => onHover(index)}
                      onMouseLeave={() => onMouseOver(index)}
                    />
                  </Link>

                </div>
                <div className="detail text-sm pt-4">
                  <span>{item.description}</span>

                </div>
                <div className="price pt-4">
                  <span className='font-bold '>${item.price}</span>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center pt-4">
                    <button
                      className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-lg
                    hover:bg-stone-600"
                      onClick={() => handleLike(index, item.productId)}
                    >
                      {likedItems[index] || likedProducts.includes(item.productId) ? (
                        <AiFillHeart className="text-red-500" />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

      <button className='w-11 h-11 bg-slate-200 flex items-center justify-center rounded-lg
                    hover:bg-stone-600 absolute left-2 top-1/2 transform -translate-y-1/2'
        onClick={() => handlePrevious()}>
        <FcPrevious />
      </button>
      <button className='w-11 h-11 bg-slate-200 flex items-center justify-center rounded-lg
                    hover:bg-stone-600 absolute right-2 top-1/2 transform -translate-y-1/2'
        onClick={() => handleNext()}>
        <FcNext />
      </button>

    </div>
  )
}

export default Recommendations