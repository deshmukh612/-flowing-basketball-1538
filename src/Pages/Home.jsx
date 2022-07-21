

import React from 'react'
import Adds from '../Components/Adds'
import CheckoutBlog from '../Components/CheckoutBlog'
import Footer from '../Components/Footer'
import NewsSlider from '../Components/NewsSlider'
import ShopByCate from '../Components/ShopByCate'
import Slider1G from '../Components/Slider1G'
import home from "../Pages/home.module.css"
const Home = () => {
  return (
    <div>

{/* <CheckoutBlog/> */}
     
        <Slider1G/>
        <ShopByCate h2tag={"Shop by categories"}/>
           <Adds/>

        <ShopByCate h2tag={"Explore by categories"}/>
        <CheckoutBlog/>
        <NewsSlider/>

        {/* <div className={home.footerDiv}> */}
       
        <Footer/>
        {/* </div> */}
    </div>
  )
}

export default Home
