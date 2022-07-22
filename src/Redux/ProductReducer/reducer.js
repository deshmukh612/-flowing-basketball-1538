import * as types from "./actionTypes";

const initalstate = {
  chicken: [],
  isLoading: false,
  isError: false,
  cart: [],
};

const reducer = (state = initalstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        chicken: payload,
        isLoading: true,
        isError: false,
      };

    case types.GET_BOOKS_fAILURE:
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
        }
    default:
      return state;
  }
};

export { reducer };
