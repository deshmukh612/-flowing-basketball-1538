

import React from 'react'
import Adds from '../Componentsponents/Adds'
import CheckoutBlog from '../Components/CheckoutBlog'
import ShopByCate from '../Components/ShopByCate'
import Slider1G from '../Components/Slider1G'

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
