

import axios from "axios"
import * as types from "./actionTypes"


const  getShopByCategory = ()=>(dispatch)=>{
    

    dispatch({type : types.GET_SHOP_BY_CATEGORY_REQUEST})

    return axios.get("https://shrawani.herokuapp.com/sbcategory")
      .then((res)=>{

        // console.log(res.data)
        dispatch({type : types.GET_SHOP_BY_CATEGORY_SUCCESS ,payload : res.data})
      })
      .catch((err)=>{
        dispatch({type : types.GET_SHOP_BY_CATEGORY_FAILURE ,payload : err})
      })
}



export {getShopByCategory}