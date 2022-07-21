import * as types from "./actionTypes"


const getShoesRequest= ()=>{
    return {type : types.GET_SHOES_REQUEST}
}
const  getShoesSuccess= (payload)=>{
   return {type : types.GET_SHOES_SUCCESS ,payload}
}
const  getShoesFailure = ()=>{
   return {type : types.GET_SHOES_FAILURE}
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
     .post("http://localhost:8080/cart", product)
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
  axios.get("http://localhost:8080/cart")
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
  axios.delete(`http://localhost:8080/cart/${id}`)
    .then((r) => {
      dispatch(deleteProductCartSuccess(r.data))
    }).then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(deleteProductCartFailure(e.data)));
};

 
export { getShoesFailure,getShoesRequest,getShoesSuccess,addProductToCart, fetchCart, deleteProductCart }