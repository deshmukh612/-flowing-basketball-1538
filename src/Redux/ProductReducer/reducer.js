import * as types from "./actionTypes";
const initialState = {
  chicken: [],
  fish: [],
  isLoading: false,
  isError: false,
  cart: [],
};

 const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_SHOES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_SHOES_SUCCESS:
      return {
        ...state,
        chicken: payload,
        fish: payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_SHOES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_PRODUCT_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: [...state.cart, payload],
      };
    case types.ADD_PRODUCT_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.FETCH_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: [...payload],
      };
    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.REMOVE_PRODUCT_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.REMOVE_PRODUCT_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
