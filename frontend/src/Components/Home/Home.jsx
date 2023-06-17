import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Slide from '../slide/Slide'
import Introduce from '../Introduce/Introduce'
import Rate from '../Introduce/Rate'
import Recommentdations from '../ListProduct/Recommentdations/Recommendations'
import Featured from '../ListProduct/Featured/Featured'
import Stock from '../ListProduct/Stock/Stock'
import Accessories from '../ListProduct/Accessories/Accessories'
import Ads from '../ListProduct/ADS/Ads'
import Reviews from '../ListProduct/Review/Reviews'
import Footer from '../Footer/Footer'
function Home() {


    return (
        <div className="home-container">
            <Slide />
            <Introduce />
            <Rate />
            <Recommentdations />
            <Featured />
            <Stock/>
            <Accessories/>
            <Ads/>
            <Reviews/>
        {/*  <Footer/> */}

        </div>
    )
}

export default Home