

import React from 'react'
import Adds from '../Com/Adds'
import CheckoutBlog from '../Com/CheckoutBlog'
import ShopByCate from '../Com/ShopByCate'
import Slider1G from '../Com/Slider1G'

const Home = () => {
  return (
    <div>

<CheckoutBlog/>
        {/* <Adds/> */}
        {/* <Slider1G/> */}
        <ShopByCate h2tag={"Shop by categories"}/>

        {/* <ShopByCate h2tag={"Explore by categories"}/> */}
      
    </div>
  )
}

export default Home
