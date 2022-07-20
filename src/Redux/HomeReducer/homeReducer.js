import * as types from "./actionTypes"

const initState = {
    isLoading : false,
    isError : false,
    sbArray :[]
}


export const homeReducer = (state = initState , action)=>{
    const {type, payload} = action;

    switch(type){
        case types.GET_SHOP_BY_CATEGORY_REQUEST :{

            return {
                ...state,
                isLoading : true,

            }
        }


        case types.GET_SHOP_BY_CATEGORY_SUCCESS : {

            return {
                ...state,
                isLoading : false,
                sbArray : payload
            }
        }

        case types.GET_SHOP_BY_CATEGORY_FAILURE :{
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        }


        default : return state
    }
}