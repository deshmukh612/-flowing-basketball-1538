

import React from 'react'
import Adds from '../Components/Adds'
import CheckoutBlog from '../Components/CheckoutBlog'
import CreaditCard from '../Components/CreaditCard'
import Footer from '../Components/Footer'
import NewsSlider from '../Components/NewsSlider'
import ShopByCate from '../Components/ShopByCate'
import Slider1G from '../Components/Slider1G'
import Mpayment from '../Mfile/Mpayment'
import home from "../Pages/home.module.css"
import Payment from './Payment'

const Home = () => {
  return (
    <div>


<Slider1G/>

{/* <ShopByCate h2tag={"Shop by categories"}/> */}
<ShopByCate h2tag={"Shop by categories"}/>
           <Adds/>

        <ShopByCate h2tag={"Explore by categories"}/>
        <CheckoutBlog/>

        <NewsSlider/>

         <Footer/>
 {/* <Payment/>  */}
 

{/* <Mpayment/> */}




{/* <CheckoutBlog/> */}
     
        {/* 
       
        */}

        {/* <div className={home.footerDiv}> */}
       
       
        {/* </div> */}
    </div>
  )
}

export default Home
