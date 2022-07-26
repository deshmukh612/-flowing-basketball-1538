import * as types from "./actionTypes"
import axios from "axios"


const getBooks =(pro, params)=>(dispatch  )=>{
  dispatch({type : types.GET_BOOKS_REQUEST})

  axios
  .get(`https://shrawani.herokuapp.com/${pro}`,params)
  .then((r) =>dispatch({type : types.GET_BOOKS_SUCCESS ,payload : r.data}))
  .catch((e)=>dispatch({type : types.GET_BOOKS_fAILURE}))   
}




const addProductCartRequest = (payload) => {
   return {
     type: types.ADD_PRODUCT_CART_REQUEST,
     payload,
   };
 };
 
 const addProductCartSuccess = (payload) => {
   return {
     type: types.ADD_PRODUCT_CART_SUCCESS,
     payload,
   };
 };
 
 const addProductCartFailure = (payload) => {
   return {
     type: types.ADD_PRODUCT_CART_FAILURE,
     payload,
   };
 };
 
 const addProductToCart = (product) => (dispatch) => {
   dispatch(addProductCartRequest());
   axios
     .post("https://shrawani.herokuapp.com/cart", product)
     .then((r) => dispatch(addProductCartSuccess(r.data)))
 
     .catch((e) => dispatch(addProductCartFailure(e.data)));
 };

 const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_REQUEST,
    payload,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload,
  };
};

const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());
  axios.get("https://shrawani.herokuapp.com/cart")
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};

const deleteProductCartRequest = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};

const deleteProductCartSuccess = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const deleteProductCartFailure = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};

const deleteProductCart = (id) => (dispatch) => {
  dispatch(deleteProductCartRequest());
  axios.delete(`https://shrawani.herokuapp.com/cart/${id}`)
    .then((r) => {
      dispatch(deleteProductCartSuccess(r.data))
    }).then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(deleteProductCartFailure(e.data)));
};

 
export { addProductToCart, fetchCart, deleteProductCart,getBooks }