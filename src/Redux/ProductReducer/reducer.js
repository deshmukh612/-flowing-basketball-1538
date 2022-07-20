import * as types from "./actionTypes"
const initialState = {
 chicken: [],
 fish:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload} =action

  switch(type){

      case types.GET_SHOES_REQUEST :
        return {
          ...state,
          isLoading :true,
          isError:false
        }
       
      case types.GET_SHOES_SUCCESS :
          return {
              ...state,
              chicken:payload,
               fish:payload,
              isLoading :false,
              isError:false
          }
          
   
      case types.GET_SHOES_FAILURE :
          return {
            ...state,
              isLoading :false,
              isError:true
          }

          
          default : return state
};
}