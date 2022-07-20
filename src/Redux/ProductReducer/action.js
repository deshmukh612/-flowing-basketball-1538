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

 
export { getShoesFailure,getShoesRequest,getShoesSuccess }