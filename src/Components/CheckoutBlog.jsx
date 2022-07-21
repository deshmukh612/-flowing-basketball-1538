import React from 'react'
import {Flex ,Box ,Text} from "@chakra-ui/react"
import blog from "../Components/blog.module.css"

const CheckoutBlog = () => {
  return (
     <>
     
     <div className={blog.blogDiv}>

     <a href="https://www.licious.in/blog/recipe/homemade-shawarma-recipe">
      
     <div>
        <img src='https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg'/>
        <p>Wait a Minute! Don’t Buy Shawarma Anymore, Make it at Home Instead!</p>
        <p></p>
      </div>
      
      </a>

      <a href="https://www.licious.in/blog/recipe/creamy-herbed-chicken-recipe">

      <div>
      <img src='https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2055615416.jpg'/>
        <p>This Creamy Herbed Chicken Recipe is the Perfect Meal Any Day of the Week!</p>
        <p></p>
      </div>

      </a>
     
     <a href="https://www.licious.in/blog/recipe/paprika-roast-chicken">
     <div>
      <img src='https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2040426830.jpg'/>
        <p>Savour a Mouth-Watering Paprika Roast Chicken On a Lazy Weekend!</p>
        <p></p>
      </div>

     </a>
      
     </div>

     <div className = {blog.blogDiv1}>
      <img src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34c119a29f" alt="" />


     </div>
     </>
  )
}


export default CheckoutBlog
